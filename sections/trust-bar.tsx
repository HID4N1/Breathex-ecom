import { trustItems } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function TrustBar() {
  return (
    <section className="border-y border-blue-100 bg-white py-5">
      <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-xl bg-blue-50/55 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-primary shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
