import { Providers } from "@/components/providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted/10">
        <DashboardNav />
      </aside>
      <main className="flex-1">
        <DashboardHeader />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

function DashboardNav() {
  return (
    <nav className="flex flex-col gap-2 p-4">
      <a
        href="/dashboard"
        className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
      >
        Home
      </a>
      <a
        href="/dashboard/settings"
        className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
      >
        Settings
      </a>
    </nav>
  );
}

function DashboardHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        <span className="font-semibold">Dashboard</span>
      </div>
    </header>
  );
}
