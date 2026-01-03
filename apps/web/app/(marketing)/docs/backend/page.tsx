import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  BookOpen,
  Server,
  Terminal,
  Code2,
  Settings,
  Zap,
  Shield,
  Database,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { DocsSidebar } from "@/components/docs/docs-sidebar"

export const metadata = {
  title: "Backend Documentation - Apsara DevKit",
  description: "Complete guide to using the Hono backend API",
}

export default function BackendDocsPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <DocsSidebar />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <Server className="mr-1 h-3 w-3" />
                Backend Docs
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Backend API Guide</h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Build fast, scalable APIs with Hono - a lightweight, high-performance web framework
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="#getting-started">Getting Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#endpoints">API Endpoints</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Getting Started</h2>
                <p className="text-muted-foreground">Set up and run the backend server</p>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Quick Start
                  </CardTitle>
                  <CardDescription>Run the backend development server</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Navigate to backend directory</p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">cd apps/backend</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Install dependencies</p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">pnpm install</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Start development server</p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">pnpm dev</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The backend server will start on port 3001 by default.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="h-5 w-5 text-primary" />
                      Why Hono?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• Blazing fast performance</p>
                    <p>• Web-standard Request/Response API</p>
                    <p>• Works with any JavaScript runtime</p>
                    <p>• Built-in middleware support</p>
                    <p>• TypeScript ready</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Settings className="h-5 w-5 text-primary" />
                      Project Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• <code className="bg-muted px-1 py-0.5 rounded">src/</code> - Application code</p>
                    <p>• <code className="bg-muted px-1 py-0.5 rounded">src/routes/</code> - API routes</p>
                    <p>• <code className="bg-muted px-1 py-0.5 rounded">src/lib/</code> - Utilities & db</p>
                    <p>• <code className="bg-muted px-1 py-0.5 rounded">src/middleware/</code> - Custom middleware</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">API Endpoints</h2>
                <p className="text-muted-foreground">Available API routes and their usage</p>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Base URL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    http://localhost:3001/api/v1
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication Routes</CardTitle>
                    <CardDescription>User authentication endpoints</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">POST</Badge>
                          <code className="text-sm">/auth/register</code>
                        </div>
                        <span className="text-sm text-muted-foreground">Register new user</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">POST</Badge>
                          <code className="text-sm">/auth/login</code>
                        </div>
                        <span className="text-sm text-muted-foreground">Login user</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">POST</Badge>
                          <code className="text-sm">/auth/logout</code>
                        </div>
                        <span className="text-sm text-muted-foreground">Logout user</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">GET</Badge>
                          <code className="text-sm">/auth/me</code>
                        </div>
                        <span className="text-sm text-muted-foreground">Get current user</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Example Request</CardTitle>
                    <CardDescription>How to make API calls from the frontend</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Register a new user</p>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>{"fetch('http://localhost:3001/api/v1/auth/register', {"}</div>
                        <div className="pl-4">{"method: 'POST',"}</div>
                        <div className="pl-4">{"headers: {'Content-Type': 'application/json'},"}</div>
                        <div className="pl-4">{"body: JSON.stringify({"}</div>
                        <div className="pl-8">{'email: "user@example.com",'}</div>
                        <div className="pl-8">{'password: "password123",'}</div>
                        <div className="pl-8">{'name: "John Doe"'}</div>
                        <div className="pl-4">{"})"}</div>
                        <div>{"}).then(res => res.json())"}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Middleware */}
        <section id="middleware" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Middleware</h2>
                <p className="text-muted-foreground">Built-in middleware and custom middleware</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Built-in Middleware
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>• CORS - Cross-origin resource sharing</p>
                    <p>• JWT authentication</p>
                    <p>• Rate limiting</p>
                    <p>• Request logging</p>
                    <p>• Error handling</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Custom Middleware
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Create middleware in <code className="bg-muted px-1 py-0.5 rounded">src/middleware/</code></p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm mt-2">
                      <div>{"app.use('*', customMiddleware)"}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Database */}
        <section id="database" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Database</h2>
                <p className="text-muted-foreground">Database configuration and models</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Database Setup
                  </CardTitle>
                  <CardDescription>Configure your database connection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Environment variables</p>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                      <div>DATABASE_URL="postgresql://user:password@localhost:5432/mydb"</div>
                      <div>DB_TYPE="postgres" # or "mysql", "sqlite"</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Supported databases</p>
                    <div className="grid md:grid-cols-3 gap-2 mt-2">
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">MySQL</Badge>
                      <Badge variant="outline">SQLite</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need AI Capabilities?</h2>
              <p className="text-muted-foreground mb-8">
                Explore the AI documentation to add intelligent features to your application
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/docs/frontend">Frontend Docs</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/ai">AI Docs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
