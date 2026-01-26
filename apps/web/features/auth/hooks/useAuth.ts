import * as React from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextValue extends AuthState {
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  React.useEffect(() => {
    refreshUser();
  }, []);

  async function refreshUser() {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const user = await response.json();
        setState({
          user,
          isLoading: false,
          isAuthenticated: true,
        });
      } else {
        setState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    } catch {
      setState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  }

  async function login(credentials: { email: string; password: string }) {
    setState((prev) => ({ ...prev, isLoading: true }));
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      setState((prev) => ({ ...prev, isLoading: false }));
      throw new Error(error.message || "Login failed");
    }

    await refreshUser();
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  }

  async function register(data: RegisterData) {
    setState((prev) => ({ ...prev, isLoading: true }));
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      setState((prev) => ({ ...prev, isLoading: false }));
      throw new Error(error.message || "Registration failed");
    }

    await refreshUser();
  }

  const value: AuthContextValue = {
    ...state,
    login,
    logout,
    register,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
