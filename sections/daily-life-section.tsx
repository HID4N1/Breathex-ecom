import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCases } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function DailyLifeSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Daily life"
            title="Une routine discrete pour les moments qui comptent."
            description="Breatheex s'integre naturellement dans les routines de sommeil, d'effort et de bien-etre quotidien."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group relative min-h-[430px] overflow-hidden rounded-[1.75rem] bg-navy shadow-premium">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
                        {item.eyebrow}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-blue-50">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
