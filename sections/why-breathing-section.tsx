import { Activity, BatteryCharging, Moon, Trophy, Wind } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const impacts = [
  { label: "Sommeil", icon: Moon },
  { label: "Energie", icon: BatteryCharging },
  { label: "Recuperation", icon: Activity },
  { label: "Performance", icon: Trophy },
  { label: "Bien-etre", icon: Wind }
];

export function WhyBreathingSection() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Pourquoi respirer compte"
            title="La plupart des gens sous-estiment l'impact de leur respiration."
            description="Respirer plus librement n'est pas un detail. C'est une base silencieuse qui influence la qualite du sommeil, l'energie du matin, la recuperation et la sensation de controle pendant l'effort."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-6 shadow-premium">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-blue-200 opacity-50" />
            <div className="grid gap-4 sm:grid-cols-2">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={impact.label}
                    className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-lg font-semibold text-navy">
                      {impact.label}
                    </p>
                    <div className="mt-4 h-1.5 rounded-full bg-blue-50">
                      <div
                        className="h-full rounded-full bg-primary transition-all group-hover:bg-accent"
                        style={{ width: `${58 + index * 8}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
