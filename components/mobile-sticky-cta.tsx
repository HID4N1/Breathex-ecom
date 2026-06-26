"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blue-100 bg-white/92 px-4 py-3 shadow-[0_-18px_45px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <Button asChild className="w-full">
        <a href="#order">
          <ShoppingBag className="h-4 w-4" />
          Commander maintenant
        </a>
      </Button>
    </div>
  );
}
