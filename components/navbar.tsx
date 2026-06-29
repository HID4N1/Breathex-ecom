import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/data/site";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 py-3">
      <div className="section-shell">
        <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/35 bg-white/10 px-3 py-2 text-white shadow-premium backdrop-blur-2xl sm:px-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-full pr-3 transition hover:bg-blue-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:bg-blue-100"
            aria-label="Breatheex"
            aria-current="page"
          >
            <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-sm">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="hidden sm:block">
              <span className="block text-base font-extrabold tracking-tight">
                Breatheex
              </span>
              <span className="block text-[11px] font-bold text-white/75">
                L'art de bien respirer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1.5 text-sm font-bold text-white lg:flex">
            <a
              href="#why"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white active:text-primary"
            >
              Pourquoi
            </a>
            <a
              href="#science"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white active:text-primary"
            >
              Science
            </a>
            <a
              href="#packs"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white active:text-primary"
            >
              Packs
            </a>
            <a
              href="#faq"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white active:text-primary"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden h-10 px-5 text-sm shadow-none active:scale-95 sm:inline-flex"
            >
              <a href="#order">
                Ajouter au panier
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden h-10 border-white/70 bg-white px-5 text-sm font-bold text-primary shadow-none hover:bg-blue-50 active:scale-95 md:inline-flex"
            >
              <a href={whatsappUrl} aria-label="Commander sur WhatsApp">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-[#0EA5E9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.85 11.85 0 0 0 12.08 0C5.51 0 .16 5.35.16 11.93c0 2.1.55 4.15 1.6 5.96L.06 24l6.26-1.64a11.95 11.95 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93a11.85 11.85 0 0 0-3.5-8.42Zm-8.43 18.34h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.88 9.88 0 0 1-1.51-5.28c0-5.45 4.43-9.89 9.89-9.89a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
