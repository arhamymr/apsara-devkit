import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Button } from "@workspace/ui/components/button"
import {
  BookOpen,
  Download,
  Folder,
  Layers,
  Palette,
  Rocket,
  Terminal,
  Code2,
  Component,
  FileCode,
  Settings,
  Zap,
  RefreshCw,
  Plus,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { DocsSidebar } from "@/components/docs/docs-sidebar"

export const metadata = {
  title: "Frontend Documentation - Apsara DevKit",
  description: "Complete guide to using the frontend components and features",
}

export default function FrontendDocsPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <DocsSidebar />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <Component className="mr-1 h-3 w-3" />
                Frontend Docs
              </Badge>
              <h1 className="text-4xl md:text-5xl  mb-4 text-balance">Frontend Guide</h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Everything you need to build modern web applications with Next.js, React, and our component library
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="#quick-start">Quick Start</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/components">Browse Components</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl  mb-2">Quick Start</h2>
                <p className="text-muted-foreground">Get up and running in minutes</p>
              </div>

              <Tabs defaultValue="install" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="install">Installation</TabsTrigger>
                  <TabsTrigger value="setup">Setup</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                </TabsList>

                <TabsContent value="install" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Download className="h-5 w-5" />
                        Download Template
                      </CardTitle>
                      <CardDescription>Get the template files and install dependencies</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Step 1: Clone the repository</p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                          git clone https://github.com/arhamymr/apsara-devkit.git
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Step 2: Install dependencies</p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-2">
                          <div>cd apsara-devkit</div>
                          <div>pnpm install</div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Step 3: Run development server</p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">pnpm dev</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="setup" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Configuration
                      </CardTitle>
                      <CardDescription>Customize the template for your project</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Update branding</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Edit the logo and site name in{" "}
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                            components/navigation/main-nav.tsx
                          </code>
                        </p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                          {`<span className="text-lg font-semibold">YourBrand</span>`}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Configure theme colors</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Modify CSS variables in{" "}
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs">app/globals.css</code>
                        </p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                          {`--primary: 200 100% 50%;
--secondary: 200 20% 92%;`}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Update metadata</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Change site metadata in{" "}
                          <code className="bg-muted px-1.5 py-0.5 rounded text-xs">app/layout.tsx</code>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="usage" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        Using Components
                      </CardTitle>
                      <CardDescription>Import and use components in your pages</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Import a component</p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                          {`import { Button } from "@workspace/ui/components/button"`}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Use in your JSX</p>
                        <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                          {`<Button variant="default">Click me</Button>`}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Browse all available components and their props in the{" "}
                          <Link href="/components" className="text-primary hover:underline">
                            Components page
                          </Link>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Project Structure */}
        <section id="project-structure" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl  mb-2">Project Structure</h2>
                <p className="text-muted-foreground">Understanding the frontend organization</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Folder className="h-5 w-5 text-primary" />
                      app/
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">(marketing)/</span>
                      <span className="text-muted-foreground">Landing, blog, about pages</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">(auth)/</span>
                      <span className="text-muted-foreground">Login, register pages</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">dashboard/</span>
                      <span className="text-muted-foreground">Admin dashboard routes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">layout.tsx</span>
                      <span className="text-muted-foreground">Root layout & providers</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Component className="h-5 w-5 text-primary" />
                      components/
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">ui/</span>
                      <span className="text-muted-foreground">shadcn/ui components</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">sections/</span>
                      <span className="text-muted-foreground">Reusable page sections</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">landing/</span>
                      <span className="text-muted-foreground">Landing page components</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">auth/</span>
                      <span className="text-muted-foreground">Authentication forms</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileCode className="h-5 w-5 text-primary" />
                      lib/
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">utils.ts</span>
                      <span className="text-muted-foreground">Utility functions (cn, etc.)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">blog-data.tsx</span>
                      <span className="text-muted-foreground">Blog posts content</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">showcase-*.tsx</span>
                      <span className="text-muted-foreground">Component showcase data</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Layers className="h-5 w-5 text-primary" />
                      Other Directories
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">public/</span>
                      <span className="text-muted-foreground">Static assets & images</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">hooks/</span>
                      <span className="text-muted-foreground">Custom React hooks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-muted-foreground font-mono">styles/</span>
                      <span className="text-muted-foreground">Global CSS & theme</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Guide */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl  mb-2">Key Features</h2>
                <p className="text-muted-foreground">Explore what's included in the frontend</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Component className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>50+ UI Components</CardTitle>
                    </div>
                    <CardDescription>
                      Complete set of shadcn/ui components including buttons, forms, cards, modals, and more
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/components">View Components</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Layers className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>24+ Page Sections</CardTitle>
                    </div>
                    <CardDescription>
                      Pre-built sections for landing pages, dashboards, and marketing content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/components">View Sections</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Palette className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Dark Mode Support</CardTitle>
                    </div>
                    <CardDescription>
                      Built-in theme switching with seamless dark and light mode transitions
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>React Query Integration</CardTitle>
                    </div>
                    <CardDescription>
                      Pre-configured data fetching with caching, mutations, and pagination examples
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#examples">View Examples</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>TypeScript Ready</CardTitle>
                    </div>
                    <CardDescription>
                      Fully typed components with IntelliSense support for better developer experience
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Production Ready</CardTitle>
                    </div>
                    <CardDescription>
                      Optimized build, SEO-friendly structure, and deployment-ready configuration
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* React Query Examples Section */}
        <section id="examples" className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl  mb-2">React Query Examples</h2>
                <p className="text-muted-foreground">
                  Learn how to use TanStack Query for data fetching, caching, and state management
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-primary" />
                      Basic Query
                    </CardTitle>
                    <CardDescription>Simple data fetching with loading states and error handling</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Import and setup</p>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>{"import { useQuery } from '@tanstack/react-query'"}</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Usage example</p>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>{"const { data, isLoading, error } = useQuery({"}</div>
                        <div className="pl-4">{"queryKey: ['users'],"}</div>
                        <div className="pl-4">{"queryFn: fetchUsers,"}</div>
                        <div>{"})"}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Perfect for fetching and caching data with automatic refetching and background updates.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Parameterized Query
                    </CardTitle>
                    <CardDescription>Dynamic queries that update based on parameters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Usage example</p>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>{"const { data } = useQuery({"}</div>
                        <div className="pl-4">{"queryKey: ['user', userId],"}</div>
                        <div className="pl-4">{"queryFn: () => fetchUser(userId),"}</div>
                        <div className="pl-4">{"enabled: !!userId,"}</div>
                        <div>{"})"}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use parameters in your queryKey to create dynamic queries that automatically refetch when
                      dependencies change.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5 text-primary" />
                      Mutations
                    </CardTitle>
                    <CardDescription>Create, update, or delete data with automatic cache updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Usage example</p>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>{"const mutation = useMutation({"}</div>
                        <div className="pl-4">{"mutationFn: createUser,"}</div>
                        <div className="pl-4">{"onSuccess: () => {"}</div>
                        <div className="pl-8">{"queryClient.invalidateQueries({ queryKey: ['users'] })"}</div>
                        <div className="pl-4">{"},"}</div>
                        <div>{"})"}</div>
                        <div className="mt-2">{"mutation.mutate(newUserData)"}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mutations handle data modifications and can automatically update your cache when successful.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 text-primary" />
                      Infinite Queries
                    </CardTitle>
                    <CardDescription>Implement pagination and infinite scrolling</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Usage example</p>
                      <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>{"const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({"}</div>
                        <div className="pl-4">{"queryKey: ['posts'],"}</div>
                        <div className="pl-4">{"queryFn: fetchPosts,"}</div>
                        <div className="pl-4">{"getNextPageParam: (lastPage) => lastPage.nextPage,"}</div>
                        <div className="pl-4">{"initialPageParam: 1,"}</div>
                        <div>{"})"}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Perfect for implementing "Load More" buttons or infinite scroll patterns with built-in page
                      management.
                    </p>
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
              <h2 className="text-3xl  mb-4">Ready to Build?</h2>
              <p className="text-muted-foreground mb-8">
                Explore the backend and AI documentation to build complete applications
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button size="lg" asChild>
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
    </div>
  )
}
