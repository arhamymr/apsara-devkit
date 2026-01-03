import type * as React from "react";

export interface ComponentShowcase {
  id: string;
  category: string;
  title: string;
  description: string;
  component: React.ReactNode;
}
