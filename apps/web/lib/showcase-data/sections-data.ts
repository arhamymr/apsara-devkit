"use client"

import type * as React from "react"
import { sectionsData, buttonsData, formsData, cardsData, overlaysData } from "./sections-data"

export interface ComponentShowcase {
  id: string
  category: string
  title: string
  description: string
  component: React.ReactNode
}

const SCROLL_AREA_TAGS = Array.from({ length: 50 }).map(
  (_, i) => `Tag ${i + 1}`,
)

export function getComponentsData(): ComponentShowcase[] {
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]

  return [
    ...sectionsData,
    ...buttonsData,
    ...formsData,
    ...cardsData,
    ...overlaysData,

    // Navigation (simplified for demo)
    {
      id: "dropdown",
      category: "navigation",
      title: "Dropdown Menu",
      description: "Dropdown menu with items",
      component: (
        <div className="flex items-center justify-center p-4 border rounded-md">
          <span className="text-muted-foreground">Dropdown Menu</span>
        </div>
      ),
    },
    {
      id: "tabs",
      category: "navigation",
      title: "Tabs",
      description: "Tabbed navigation",
      component: (
        <div className="flex items-center justify-center p-4 border rounded-md">
          <span className="text-muted-foreground">Tabs Component</span>
        </div>
      ),
    },
    {
      id: "accordion",
      category: "navigation",
      title: "Accordion",
      description: "Collapsible accordion menu",
      component: (
        <div className="flex items-center justify-center p-4 border rounded-md">
          <span className="text-muted-foreground">Accordion Component</span>
        </div>
      ),
    },

    // Data Display
    {
      id: "table",
      category: "data-display",
      title: "Table",
      description: "Data table component",
      component: (
        <div className="flex items-center justify-center p-4 border rounded-md">
          <span className="text-muted-foreground">Table Component</span>
        </div>
      ),
    },
    {
      id: "badge",
      category: "data-display",
      title: "Badge",
      description: "Status or category badge",
      component: (
        <div className="flex gap-2">
          <div className="bg-primary text-primary-foreground rounded px-2 py-1 text-sm">Default</div>
          <div className="bg-secondary text-secondary-foreground rounded px-2 py-1 text-sm">Secondary</div>
          <div className="bg-destructive text-destructive-foreground rounded px-2 py-1 text-sm">Destructive</div>
        </div>
      ),
    },
    {
      id: "avatar",
      category: "data-display",
      title: "Avatar",
      description: "User avatar with fallback",
      component: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
          <span className="font-semibold text-sm">CN</span>
        </div>
      ),
    },

    // Feedback
    {
      id: "progress",
      category: "feedback",
      title: "Progress",
      description: "Progress bar",
      component: (
        <div className="w-full">
          <div className="bg-primary rounded h-2 w-[60%]"></div>
        </div>
      ),
    },
    {
      id: "skeleton",
      category: "feedback",
      title: "Skeleton",
      description: "Loading skeleton",
      component: (
        <div className="w-full">
          <div className="bg-muted rounded h-4 w-[250px] mb-2"></div>
          <div className="bg-muted rounded h-4 w-[200px]"></div>
        </div>
      ),
    },
    {
      id: "alert",
      category: "feedback",
      title: "Alert",
      description: "Alert message",
      component: (
        <div className="flex items-center gap-2 p-3 border rounded-md">
          <span className="text-muted-foreground">Alert Component</span>
        </div>
      ),
    },

    // Layout
    {
      id: "aspect-ratio",
      category: "layout",
      title: "Aspect Ratio",
      description: "Container with fixed aspect ratio",
      component: (
        <div className="w-[450px]">
          <div className="bg-muted rounded-lg h-[225px] w-full"></div>
        </div>
      ),
    },
    {
      id: "separator",
      category: "layout",
      title: "Separator",
      description: "Visual divider",
      component: (
        <div className="w-full p-4 border rounded-md">
          <span className="text-muted-foreground">Separator</span>
        </div>
      ),
    },
    {
      id: "scroll-area",
      category: "layout",
      title: "Scroll Area",
      description: "Scrollable container",
      component: (
        <div className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {SCROLL_AREA_TAGS.map((tag, index) => (
              <div key={index} className="space-y-2">
                <div className="text-sm">{tag}</div>
                <div className="bg-muted h-px my-2"></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "resizable",
      category: "layout",
      title: "Resizable",
      description: "Resizable panel layout",
      component: (
        <div className="min-h-[200px] rounded-lg border flex">
          <div className="bg-primary text-primary-foreground flex h-full items-center justify-center p-6 grow">
            <span className="font-semibold">One</span>
          </div>
          <div className="bg-muted h-full w-1"></div>
          <div className="bg-secondary text-secondary-foreground flex h-full items-center justify-center p-6 grow">
            <span className="font-semibold">Two</span>
          </div>
        </div>
      ),
    },
    {
      id: "toggle",
      category: "layout",
      title: "Toggle",
      description: "Toggle button",
      component: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
          <span className="text-primary-foreground text-sm">T</span>
        </div>
      ),
    },
    {
      id: "toggle-group",
      category: "layout",
      title: "Toggle Group",
      description: "Group of toggle buttons",
      component: (
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground flex items-center justify-center w-10 h-10 rounded-full">
            <span className="text-sm">B</span>
          </div>
          <div className="bg-secondary text-secondary-foreground flex items-center justify-center w-10 h-10 rounded-full">
            <span className="text-sm">I</span>
          </div>
          <div className="bg-muted text-muted-foreground flex items-center justify-center w-10 h-10 rounded-full">
            <span className="text-sm">U</span>
          </div>
        </div>
      ),
    },
  ]
}
