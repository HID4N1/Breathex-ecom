import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { packs } from "@/data/site";
import { cn } from "@/lib/utils";

export function PackSection() {
  return (
    <section id="packs" className="bg-slate-50 py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Pack selection"
            title="Des packs simples, pensés pour convertir sans pression."
            description="Prix indicatifs pour MVP. La structure est prete pour remplacer les valeurs par votre offre finale."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packs.map((pack, index) => (
            <Reveal key={pack.id} delay={index * 0.06}>
              <article
                className={cn(
                  "relative h-full rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium",
                  pack.highlight
                    ? "border-primary shadow-soft"
                    : "border-blue-100"
                )}
              >
                {pack.badge ? (
                  <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-soft">
                    <Star className="h-3.5 w-3.5" />
                    {pack.badge}
                  </div>
                ) : null}
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  {pack.strips}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-navy">
                  {pack.name}
                </h3>
                <p className="mt-3 min-h-12 leading-6 text-slate-600">
                  {pack.subtitle}
                </p>
                <div className="mt-7 flex items-end gap-1">
                  <span className="text-4xl font-semibold text-navy">
                    {pack.price}
                  </span>
                  <span className="pb-1 text-sm font-bold text-slate-500">
                    MAD
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {["COD disponible", "Livraison 48h-72h", "Support WhatsApp"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <Button asChild className="mt-7 w-full" variant={pack.highlight ? "default" : "outline"}>
                  <a href="#order">Choisir ce pack</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
