import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sciencePoints } from "@/data/site";

export function ScienceSection() {
  return (
    <section id="science" className="bg-slate-50 py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="La science d'une meilleure respiration"
            title="Un geste simple pour aider l'air a circuler plus librement."
            description="Breatheex agit de maniere mecanique: le strip soutient delicatement l'ouverture nasale pour reduire la sensation de restriction."
          />
        </Reveal>
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {sciencePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 0.12}>
                <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-premium">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                        {point.title}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-navy">
                        {point.label}
                      </h3>
                    </div>
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-primary">
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                    <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-500">
                      <span>Passage de l'air</span>
                      <span>{point.value}</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: point.value }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <div className="hidden h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-soft lg:grid">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
