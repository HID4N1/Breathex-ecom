import { trustItems } from "@/data/site";
import { Reveal } from "@/components/reveal";

const trustHighlights = ["48h-72h", "Paiement a la livraison", "Sans medicament"];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-blue-100 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] py-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#25D8FF]/50 to-transparent" />
      <div className="absolute left-1/2 top-0 h-24 w-[min(760px,86vw)] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="group flex h-full items-start gap-3 rounded-lg border border-blue-100/85 bg-white/82 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#25D8FF]/45 hover:shadow-[0_20px_44px_rgba(37,99,235,0.12)]">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#EFF6FF] text-primary shadow-inner shadow-white transition duration-300 group-hover:bg-[#E0F7FF] group-hover:text-[#0284C7]">
                    <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/80" />
                    <Icon className="relative h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold leading-5 text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-slate-600">
          {trustHighlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 shadow-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
