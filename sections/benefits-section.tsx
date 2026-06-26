import { benefits } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function BenefitsSection() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Benefices"
            title="Better breathing, better life."
            description="Breatheex relie un geste tres simple a ce que vos clients ressentent vraiment: dormir mieux, recuperer mieux et aborder la journee avec plus de confort."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-premium">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
