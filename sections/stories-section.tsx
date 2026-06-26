import { Quote, Star } from "lucide-react";
import { experiences } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function StoriesSection() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Customer experiences"
            title="Des retours sobres, humains, credibles."
            description="Le ton reste premium: pas de promesses miracles, juste des experiences realistes autour du confort respiratoire."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {experiences.map((story, index) => (
            <Reveal key={story.name} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-primary">
                    <Quote className="h-5 w-5" />
                  </span>
                  <div className="flex text-primary">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-6 min-h-28 text-lg leading-8 text-slate-700">
                  "{story.quote}"
                </p>
                <div className="mt-8 border-t border-blue-100 pt-5">
                  <p className="font-semibold text-navy">{story.name}</p>
                  <p className="text-sm text-slate-500">
                    {story.city} · {story.context}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
