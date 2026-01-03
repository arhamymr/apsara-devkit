import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  BookOpen,
  Code2,
  Server,
  Brain,
  ArrowRight,
  Layers,
  Rocket,
  Terminal,
  Component,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Documentation - Apsara DevKit",
  description: "Complete documentation for the Apsara DevKit monorepo",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BookOpen className="mr-1 h-3 w-3" />
              Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Apsara DevKit Docs</h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              A comprehensive guide to building modern web applications with our full-stack monorepo
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="#overview">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/arhamymr/apsara-devkit" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">What is Apsara DevKit?</h2>
              <p className="text-muted-foreground">A production-ready full-stack monorepo template</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
                <CardDescription>Modern technologies for building scalable applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Code2 className="h-4 w-4" /> Frontend
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Next.js 16 (App Router)</li>
                      <li>React 19</li>
                      <li>TypeScript 5</li>
                      <li>Tailwind CSS v4</li>
                      <li>Radix UI Primitives</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Server className="h-4 w-4" /> Backend
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Hono (fast web framework)</li>
                      <li>TypeScript</li>
                      <li>Database support</li>
                      <li>JWT Authentication</li>
                      <li>Rate limiting</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Brain className="h-4 w-4" /> AI
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Mastra AI framework</li>
                      <li>Agent workflows</li>
                      <li>LLM integration</li>
                      <li>Tool definitions</li>
                      <li>Scorers & evaluators</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                    <Component className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Frontend Guide</CardTitle>
                  <CardDescription>
                    Next.js, React components, styling, and UI library documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/docs/frontend">
                      Read Frontend Docs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Backend Guide</CardTitle>
                  <CardDescription>
                    Hono API, authentication, database, and middleware documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/docs/backend">
                      Read Backend Docs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>AI Guide</CardTitle>
                  <CardDescription>
                    Mastra AI agents, workflows, and LLM integration documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/docs/ai">
                      Read AI Docs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section id="structure" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Project Structure</h2>
              <p className="text-muted-foreground">Understanding the monorepo organization</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Layers className="h-5 w-5 text-primary" />
                    apps/
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <code className="text-primary font-medium">web/</code>
                    <p className="text-muted-foreground mt-1">Next.js frontend application (port 1111)</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <code className="text-primary font-medium">backend/</code>
                    <p className="text-muted-foreground mt-1">Hono API server</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <code className="text-primary font-medium">ai/</code>
                    <p className="text-muted-foreground mt-1">Mastra AI agent framework</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Rocket className="h-5 w-5 text-primary" />
                    packages/
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <code className="text-primary font-medium">ui/</code>
                    <p className="text-muted-foreground mt-1">Shared UI component library (50+ components)</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <code className="text-primary font-medium">eslint-config/</code>
                    <p className="text-muted-foreground mt-1">Shared ESLint configuration</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <code className="text-primary font-medium">typescript-config/</code>
                    <p className="text-muted-foreground mt-1">Shared TypeScript configuration</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Commands */}
      <section id="commands" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Quick Commands</h2>
              <p className="text-muted-foreground">Essential commands for development</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Root Commands
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Install dependencies</div>
                    pnpm install
                  </div>
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Build all workspaces</div>
                    pnpm build
                  </div>
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Start all dev servers</div>
                    pnpm dev
                  </div>
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Lint all workspaces</div>
                    pnpm lint
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    App-Specific
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Web app (port 1111)</div>
                    pnpm --filter web dev
                  </div>
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Backend server</div>
                    pnpm --filter backend dev
                  </div>
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># AI app</div>
                    pnpm --filter ai dev
                  </div>
                  <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                    <div className="text-muted-foreground mb-1"># Add UI component</div>
                    pnpm dlx shadcn@latest add button -c apps/web
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Key Features</h2>
              <p className="text-muted-foreground">Everything included in the DevKit</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">50+ UI Components</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Production-ready components built with Radix UI primitives and styled with Tailwind CSS.
                </CardContent>
              <Card>
                </Card>

              <CardHeader>
                  <CardTitle className="text-lg">Dark/Light Mode</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Seamless theme switching with next-themes. CSS variables for easy customization.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Authentication</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Complete auth system with login, register, session management, and protected routes.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">React Query</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Data fetching, caching, mutations, and infinite queries pre-configured and ready to use.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">TypeScript</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Full type safety with strict mode. Shared configurations across all packages.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Turborepo</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  High-performance builds with intelligent caching. Parallel execution for faster builds.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-muted-foreground mb-8">
              Choose a documentation section to get started with your preferred stack
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/docs/frontend">Frontend Docs</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/backend">Backend Docs</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/ai">AI Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
