import Image from "next/image";
import {
  ArrowRight,
  Check,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Truck
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const packs = [
  {
    title: "Pack Duo",
    description: "Le meilleur équilibre entre sommeil et performance.",
    price: "300 DH",
    cta: "Commander maintenant",
    accent: "#25D8FF",
    glowClass: "bg-[#25D8FF]/36",
    borderHover: "hover:border-[#25D8FF]/55",
    shadowHover: "hover:shadow-[0_30px_90px_rgba(37,216,255,0.18)]",
    buttonClass:
      "from-[#2563EB] to-[#25D8FF] shadow-[0_16px_42px_rgba(37,216,255,0.24)] hover:shadow-[0_20px_54px_rgba(37,216,255,0.38)]",
    includes: [
      "1 boîte CLEAR (26)",
      "1 boîte TAN (26)",
      "Livraison incluse"
    ],
    products: [
      {
        image: "/images/breathe-right-extra-strength-clear-26.jpg",
        alt: "Breatheex Clear 26 box",
        className: "left-[18%] top-[28px] h-[210px] w-[145px] -rotate-6"
      },
      {
        image: "/images/breathe-right-extra-strength-tan-26.jpg",
        alt: "Breatheex Tan 26 box",
        className: "right-[18%] top-[48px] h-[210px] w-[145px] rotate-6"
      }
    ]
  },
  {
    title: "Pack Sommeil",
    description:
      "Pour améliorer votre sommeil et réduire les ronflements chaque nuit.",
    price: "349 DH",
    cta: "Commander",
    accent: "#25D8FF",
    glowClass: "bg-[#25D8FF]/34",
    borderHover: "hover:border-[#25D8FF]/55",
    shadowHover: "hover:shadow-[0_30px_90px_rgba(37,216,255,0.16)]",
    buttonClass:
      "from-[#0EA5E9] to-[#25D8FF] shadow-[0_16px_42px_rgba(37,216,255,0.22)] hover:shadow-[0_20px_54px_rgba(37,216,255,0.34)]",
    includes: [
      "2 boîtes CLEAR (30)",
      "Livraison incluse",
      "Confort quotidien"
    ],
    products: [
      {
        image: "/images/breathe-right-clear-small-medium-30.jpg",
        alt: "Breatheex Clear 30 box",
        className: "left-[20%] top-[36px] h-[212px] w-[148px] -rotate-5"
      },
      {
        image: "/images/breathe-right-clear-small-medium-30.jpg",
        alt: "Breatheex Clear 30 box",
        className: "right-[20%] top-[52px] h-[212px] w-[148px] rotate-5"
      }
    ]
  },
  {
    title: "Pack Performance",
    description:
      "Conçu pour le sport, les entraînements et les activités intensives.",
    price: "349 DH",
    cta: "Commander",
    accent: "#FF7A45",
    glowClass: "bg-[#FF7A45]/34",
    borderHover: "hover:border-[#FF7A45]/55",
    shadowHover: "hover:shadow-[0_30px_90px_rgba(255,122,69,0.16)]",
    buttonClass:
      "from-[#FF5A3D] to-[#FF9B55] shadow-[0_16px_42px_rgba(255,122,69,0.22)] hover:shadow-[0_20px_54px_rgba(255,122,69,0.34)]",
    includes: [
      "2 boîtes TAN (30)",
      "Livraison incluse",
      "Maintien renforcé"
    ],
    products: [
      {
        image: "/images/breathe-right-tan-large-30.jpg",
        alt: "Breatheex Tan 30 box",
        className: "left-[20%] top-[36px] h-[212px] w-[148px] -rotate-5"
      },
      {
        image: "/images/breathe-right-tan-large-30.jpg",
        alt: "Breatheex Tan 30 box",
        className: "right-[20%] top-[52px] h-[212px] w-[148px] rotate-5"
      }
    ]
  },
  {
    title: "Pack Annuel",
    description:
      "Une année complète de respiration optimale pour toute la famille.",
    price: "699 DH",
    cta: "Commander",
    accent: "#D97706",
    glowClass: "bg-[#FACC15]/34",
    borderHover: "hover:border-[#FACC15]/70",
    shadowHover: "hover:shadow-[0_30px_90px_rgba(217,119,6,0.16)]",
    buttonClass:
      "from-[#D97706] via-[#F59E0B] to-[#FACC15] shadow-[0_16px_42px_rgba(217,119,6,0.22)] hover:shadow-[0_20px_54px_rgba(217,119,6,0.34)]",
    includes: ["4 boîtes (44)", "CLEAR + TAN", "Livraison incluse"],
    products: [
      {
        image: "/images/breathe-right-extra-strength-clear-44.jpg",
        alt: "Breatheex Clear 44 box",
        className: "left-[11%] top-[60px] h-[188px] w-[132px] -rotate-8"
      },
      {
        image: "/images/breathe-right-extra-strength-tan-44.jpg",
        alt: "Breatheex Tan 44 box",
        className: "right-[11%] top-[60px] h-[188px] w-[132px] rotate-8"
      },
      {
        image: "/images/breathe-right-extra-strength-clear-44.jpg",
        alt: "Breatheex Clear 44 box",
        className: "left-[25%] top-[28px] h-[210px] w-[148px] -rotate-3"
      },
      {
        image: "/images/breathe-right-extra-strength-tan-44.jpg",
        alt: "Breatheex Tan 44 box",
        className: "right-[25%] top-[34px] h-[210px] w-[148px] rotate-3"
      }
    ]
  }
];

const trustItems = [
  { label: "Livraison incluse", icon: Truck },
  { label: "Paiement à la livraison", icon: CreditCard },
  { label: "Produit officiel", icon: ShieldCheck },
  { label: "Support WhatsApp", icon: MessageCircle }
];

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
          {packs.map((pack, index) => (
            <Reveal key={pack.title} delay={0.08 + index * 0.06}>
              <article
                className={`group relative h-full min-h-[640px] overflow-hidden rounded-[28px] border border-blue-100 bg-white p-5 shadow-[0_22px_70px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-2.5 ${pack.borderHover} ${pack.shadowHover}`}
              >
                <div
                  className={`pointer-events-none absolute left-1/2 top-28 h-40 w-64 -translate-x-1/2 rounded-full ${pack.glowClass} blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex min-h-[600px] flex-col">
                  <div className="relative h-[270px]">
                    <div
                      className={`absolute bottom-8 left-1/2 h-12 w-52 -translate-x-1/2 rounded-full ${pack.glowClass} blur-2xl`}
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
            {trustItems.map((item) => {
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
