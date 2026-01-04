"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@workspace/ui/components/collapsible";
import { ChevronDown } from "lucide-react";
import type { ComponentShowcase } from "@/lib/showcase-components-data";

export const categories = [
  { id: "all", name: "All" },
  { id: "sections", name: "Landing Sections" },
  { id: "auth", name: "Authentication" },
  { id: "blog", name: "Blog" },
  { id: "dashboard", name: "Dashboard" },
  { id: "about", name: "About" },
  { id: "buttons", name: "Buttons" },
  { id: "forms", name: "Forms" },
  { id: "cards", name: "Cards" },
  { id: "overlays", name: "Overlays" },
  { id: "navigation", name: "Navigation" },
  { id: "data-display", name: "Data Display" },
  { id: "feedback", name: "Feedback" },
  { id: "layout", name: "Layout" },
];

interface ComponentsSidebarProps {
  components: ComponentShowcase[];
  activeComponent: string | null;
  onSelect: (id: string) => void;
  className?: string;
}

export function ComponentsSidebar({
  components,
  activeComponent,
  onSelect,
  className,
}: ComponentsSidebarProps) {
  const groupedComponents = React.useMemo(() => {
    const groups: Record<string, ComponentShowcase[]> = {};
    categories.slice(1).forEach((cat) => {
      groups[cat.id] = components.filter((c) => c.category === cat.id);
    });
    return groups;
  }, [components]);

  const [expandedCategories, setExpandedCategories] = React.useState<
    Record<string, boolean>
  >(() => {
    const initial: Record<string, boolean> = {};
    categories.slice(1).forEach((cat) => {
      initial[cat.id] = true;
    });
    return initial;
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <ScrollArea className={cn("h-full", className)}>
      <div className="p-4 space-y-2">
        {categories.slice(1).map((category) => (
          <Collapsible
            key={category.id}
            open={expandedCategories[category.id]}
            onOpenChange={() => toggleCategory(category.id)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between px-2 py-1.5 h-auto text-sm font-semibold"
              >
                <span className="flex items-center gap-2">
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      !expandedCategories[category.id] && "-rotate-90",
                    )}
                  />
                  {category.name}
                </span>
                <Badge variant="secondary" className="text-xs ml-2">
                  {groupedComponents[category.id]?.length || 0}
                </Badge>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pt-1 pb-2 pl-6">
              {groupedComponents[category.id]?.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  variant={activeComponent === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start text-sm font-normal",
                    activeComponent === item.id && "font-medium",
                  )}
                >
                  {item.title}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </ScrollArea>
  );
}
