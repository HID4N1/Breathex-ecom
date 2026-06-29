import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function FinalCtaSection() {
  return (
    <section className="bg-white pb-24">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-blue-950 to-primary p-8 text-white shadow-premium sm:p-12 lg:p-16">
            <div className="absolute right-10 top-10 h-36 w-36 rounded-full border border-white/15" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">
                Breatheex
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Chaque respiration compte.
              </h2>
              <p className="mt-5 text-lg leading-8 text-blue-50">
                Offrez-vous une respiration plus libre, un meilleur sommeil et un
                meilleur confort au quotidien.
              </p>
              <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-blue-50">
                <a href="#order">
                  Ajouter au panier
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
