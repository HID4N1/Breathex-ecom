import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { commerceTrustItems, curatedPacks } from "@/data/commerce";

export function PackSection() {
  return (
    <section id="packs" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-[42%] h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-32 h-80 w-80 rounded-full bg-[#FF7A45]/8 blur-3xl" />

      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-primary">
              NOS PACKS
            </p>
            <h2 className="mx-auto mt-6 max-w-[700px] text-[42px] font-extrabold leading-[0.96] tracking-normal text-navy sm:text-[56px] lg:text-[64px]">
              Choisissez le pack adapté à votre routine.
            </h2>
            <p className="mx-auto mt-8 max-w-[650px] text-lg leading-[1.7] text-[#5A657A] sm:text-xl">
              Tous les packs incluent la livraison partout au Maroc et le
              paiement à la livraison (COD).
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {curatedPacks.map((pack, index) => (
            <Reveal
              key={pack.title}
              className="h-full"
              delay={0.08 + index * 0.06}
            >
              <article
                className={`group relative h-full min-h-[640px] overflow-hidden rounded-[28px] border border-blue-100 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-2.5 ${pack.borderHover} ${pack.shadowHover}`}
              >
                <div
                  className={`pointer-events-none absolute left-1/2 top-28 h-40 w-64 -translate-x-1/2 rounded-full ${pack.glowClass} blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex min-h-[600px] flex-col">
                  <div className="relative h-[290px]">
                    <div
                      className={`absolute bottom-7 left-1/2 h-14 w-56 -translate-x-1/2 rounded-full ${pack.glowClass} blur-2xl`}
                    />
                    {pack.products.map((product) => (
                      <div
                        key={`${pack.title}-${product.alt}-${product.className}`}
                        className={`absolute transition-transform duration-300 group-hover:scale-[1.04] ${product.className}`}
                      >
                        <Image
                          src={product.image}
                          alt={product.alt}
                          fill
                          sizes="180px"
                          className="object-contain drop-shadow-[0_24px_30px_rgba(15,23,42,0.22)]"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <h3 className="min-h-[72px] text-3xl font-extrabold leading-tight tracking-normal text-navy">
                      {pack.title}
                    </h3>
                    <p className="mt-3 min-h-[84px] text-base leading-7 text-[#5A657A]">
                      {pack.description}
                    </p>

                    <ul className="mt-5 min-h-[96px] space-y-3">
                      {pack.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm font-semibold text-[#5A657A]"
                        >
                          <span
                            className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"
                            style={{ backgroundColor: pack.accent }}
                          >
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex items-end justify-between gap-4">
                      <p className="text-[34px] font-extrabold leading-none tracking-normal text-navy">
                        {pack.price}
                      </p>
                    </div>

                    <a
                      href="#order"
                      className={`mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${pack.buttonClass} px-5 text-sm font-extrabold text-white transition duration-300 hover:brightness-110`}
                    >
                      {pack.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.22}>
          <div className="mt-10 grid gap-3 rounded-[28px] border border-blue-100 bg-white/72 p-3 shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {commerceTrustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[22px] border border-blue-100/80 bg-white/74 p-4 shadow-[0_12px_34px_rgba(15,23,42,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#25D8FF]/45 hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="font-extrabold text-navy">{item.label}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
