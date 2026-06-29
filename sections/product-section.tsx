import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { productCollections } from "@/data/commerce";

export function ProductSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-[42%] h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-32 h-80 w-80 rounded-full bg-[#FF7A45]/8 blur-3xl" />

      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-primary">
              NOS PRODUITS
            </p>
            <h2 className="mx-auto mt-6 max-w-[700px] text-[42px] font-extrabold leading-[0.96] tracking-normal text-navy sm:text-[56px] lg:text-[64px]">
              Choisissez le format qui correspond à votre routine.
            </h2>
            <p className="mx-auto mt-8 max-w-[700px] text-lg leading-[1.7] text-[#5A657A] sm:text-xl">
              Tous les prix incluent la livraison partout au Maroc. Paiement à
              la livraison disponible.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-10">
          {productCollections.map((collection, collectionIndex) => (
            <Reveal key={collection.title} delay={0.1 + collectionIndex * 0.08}>
              <div className="relative rounded-[32px] border border-blue-100/80 bg-white/74 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7 lg:p-8">
                <div
                  className={`pointer-events-none absolute left-10 top-8 h-32 w-32 rounded-full ${collection.glowClass} blur-3xl`}
                />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-[42px] font-extrabold leading-none tracking-normal text-navy sm:text-[56px]">
                      {collection.title}
                    </h3>
                    <span
                      className={`mt-4 inline-flex rounded-full bg-gradient-to-r ${collection.badgeClass} px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-soft`}
                    >
                      {collection.badge}
                    </span>
                  </div>
                  <p className="max-w-[330px] text-sm font-medium leading-6 text-[#5A657A] sm:text-right">
                    Choisissez votre quantité, puis confirmez votre commande en
                    paiement à la livraison.
                  </p>
                </div>

                <div className="relative mt-8 grid gap-5 lg:grid-cols-3">
                  {collection.products.map((product) => (
                    <article
                      key={product.name}
                      className={`group relative min-h-[520px] overflow-hidden rounded-[20px] border border-blue-100 bg-white p-5 shadow-[0_18px_54px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 ${collection.borderHover} ${collection.shadowHover}`}
                    >
                      <div
                        className={`absolute left-1/2 top-28 h-24 w-52 -translate-x-1/2 rounded-full ${collection.glowClass} blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                      />
                      <div className="relative flex min-h-[480px] flex-col">
                        <div className="min-h-[36px]">
                          {product.badge ? (
                            <span
                              className={`inline-flex rounded-full bg-gradient-to-r ${collection.badgeClass} px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-soft`}
                            >
                              {product.badge}
                            </span>
                          ) : product.label ? (
                            <span
                              className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary"
                              style={{ color: collection.accent }}
                            >
                              {product.label}
                            </span>
                          ) : null}
                        </div>

                        <div className="relative mx-auto mt-4 h-[230px] w-full max-w-[240px]">
                          <Image
                            src={product.image}
                            alt={`${product.name} nasal strips box`}
                            fill
                            sizes="240px"
                            className="object-contain drop-shadow-[0_26px_30px_rgba(15,23,42,0.22)] transition duration-300 group-hover:scale-[1.04]"
                          />
                        </div>

                        <div className="mt-auto">
                          <p
                            className="text-xs font-extrabold uppercase tracking-[0.22em]"
                            style={{ color: collection.accent }}
                          >
                            {product.quantity}
                          </p>
                          <div className="mt-3 flex items-end justify-between gap-4">
                            <div>
                              <h4 className="text-2xl font-extrabold tracking-normal text-navy">
                                {product.name}
                              </h4>
                              <p className="mt-2 text-sm font-medium text-[#5A657A]">
                                {product.description}
                              </p>
                            </div>
                            <p className="text-3xl font-extrabold tracking-normal text-navy">
                              {product.price}
                            </p>
                          </div>

                          <a
                            href="#order"
                            className={`mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${collection.buttonClass} text-sm font-extrabold text-white transition duration-300 hover:brightness-110`}
                          >
                            Ajouter au panier
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
