import type { LucideIcon } from "lucide-react";

export type StripVariant = "clear" | "tan";

export type Pack = {
  id: string;
  name: string;
  price: number;
  subtitle: string;
  strips: string;
  badge?: string;
  highlight?: boolean;
};

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TrustItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};
