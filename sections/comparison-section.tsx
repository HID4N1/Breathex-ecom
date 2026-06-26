"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Dumbbell, Moon, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import type { StripVariant } from "@/types/product";

const variants = {
  clear: {
    title: "CLEAR",
    subtitle: "Invisible pour la nuit et le confort quotidien.",
    color: "from-blue-50 to-white",
    uses: ["Sleep", "Snoring", "Daily comfort"],
    icon: Moon,
    image: "/images/breathe-right-extra-strength-clear-44.jpg"
  },
  tan: {
    title: "TAN",
    subtitle: "Naturel et stable pour le sport et les activites intenses.",
    color: "from-sky-100 to-white",
    uses: ["Sport", "Performance", "Intense activities"],
    icon: Dumbbell,
    image: "/images/breathe-right-extra-strength-tan-44.jpg"
  }
};

export function ComparisonSection() {
  const [active, setActive] = useState<StripVariant>("clear");
  const selected = variants[active];

  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Product comparison"
            title="Choisissez le strip adapte a votre routine."
            description="Deux finitions, une meme intention: une respiration plus libre, avec une experience adaptee au moment d'utilisation."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-premium lg:grid-cols-[0.86fr_1.14fr]">
            <div className="border-b border-blue-100 p-5 lg:border-b-0 lg:border-r">
              <div className="grid gap-3">
                {(Object.keys(variants) as StripVariant[]).map((key) => {
                  const item = variants[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setActive(key)}
                      className={cn(
                        "rounded-2xl border p-5 text-left transition",
                        active === key
                          ? "border-primary bg-blue-50 shadow-soft"
                          : "border-blue-100 bg-white hover:border-blue-200"
                      )}
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        Breatheex
                      </span>
                      <span className="mt-2 block text-2xl font-semibold text-navy">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-slate-600">
                        {item.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={cn("bg-gradient-to-br p-7 sm:p-10", selected.color)}>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl bg-white shadow-premium">
                  <Image
                    src={selected.image}
                    alt={`Breathe Right ${selected.title} nasal strips packaging`}
                    fill
                    sizes="(min-width: 1024px) 320px, 75vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                    <Sparkles className="h-4 w-4" />
                    {selected.title} routine
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold text-navy">
                    {selected.subtitle}
                  </h3>
                  <div className="mt-6 grid gap-3">
                    {selected.uses.map((use) => (
                      <div
                        key={use}
                        className="flex items-center gap-3 rounded-xl bg-white/75 p-4 text-sm font-semibold text-navy"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        {use}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
