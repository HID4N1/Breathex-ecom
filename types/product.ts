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

export type ProductCard = {
  id: string;
  name: string;
  quantity: string;
  price: string;
  priceValue: number;
  description: string;
  image: string;
  badge?: string;
  label?: string;
};

export type ProductCollection = {
  title: "CLEAR" | "TAN";
  badge: string;
  badgeClass: string;
  accent: string;
  glowClass: string;
  borderHover: string;
  shadowHover: string;
  buttonClass: string;
  products: ProductCard[];
};

export type PackProductVisual = {
  image: string;
  alt: string;
  className: string;
};

export type CuratedPack = {
  id: string;
  title: string;
  description: string;
  price: string;
  priceValue: number;
  cta: string;
  accent: string;
  glowClass: string;
  borderHover: string;
  shadowHover: string;
  buttonClass: string;
  includes: string[];
  products: PackProductVisual[];
};

export type CommerceTrustItem = {
  label: string;
  icon: LucideIcon;
};
