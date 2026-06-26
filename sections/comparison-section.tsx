import Image from "next/image";
import {
  ArrowRight,
  BedDouble,
  Dumbbell,
  Moon,
  ShieldCheck,
  Wind,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const products = [
  {
    badge: "CLEAR",
    title: "Invisible. Confortable. Chaque nuit.",
    description:
      "Conçu pour le sommeil, le ronflement et une respiration naturelle pendant toute la nuit.",
    cta: "Découvrir CLEAR",
    background: "/images/breatheex-hero.png",
    backgroundPosition: "object-[78%_center]",
    productImage: "/images/breathe-right-extra-strength-clear-44.jpg",
    productAlt: "Breatheex Clear nasal strips box",
    accent: "#2BD8FF",
    badgeClass: "from-[#2563EB] to-[#2BD8FF]",
    buttonClass:
      "from-[#2563EB] to-[#2BD8FF] shadow-[0_18px_46px_rgba(43,216,255,0.28)] group-hover/card:shadow-[0_22px_58px_rgba(43,216,255,0.42)]",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(37,99,235,.18),rgba(8,38,88,.66),rgba(2,11,31,.90))]",
    glowClass: "bg-[#2BD8FF]/42",
    hoverGlowClass: "group-hover/card:shadow-[0_36px_100px_rgba(43,216,255,0.28)]",
    chips: [
      { label: "Sommeil", icon: Moon },
      { label: "Anti-ronflement", icon: BedDouble },
      { label: "Respiration naturelle", icon: Wind }
    ]
  },
  {
    badge: "SPORT",
    title: "Maintien maximal pour vos performances.",
    description:
      "Conçu pour le sport, l'entraînement et les activités où un maintien maximal est nécessaire.",
    cta: "Découvrir TAN",
    background: "/images/breatheex-hero.png",
    backgroundPosition: "object-[18%_center]",
    productImage: "/images/breathe-right-extra-strength-tan-44.jpg",
    productAlt: "Breatheex Tan nasal strips box",
    accent: "#FF7A45",
    badgeClass: "from-[#FF5A3D] to-[#FF9B55]",
    buttonClass:
      "from-[#FF5A3D] to-[#FF9B55] shadow-[0_18px_46px_rgba(255,122,69,0.26)] group-hover/card:shadow-[0_22px_58px_rgba(255,122,69,0.38)]",
    overlayClass:
      "bg-[linear-gradient(180deg,rgba(255,90,61,.18),rgba(78,22,18,.64),rgba(25,8,8,.90))]",
    glowClass: "bg-[#FF7A45]/40",
    hoverGlowClass: "group-hover/card:shadow-[0_36px_100px_rgba(255,122,69,0.26)]",
    chips: [
      { label: "Sport", icon: Dumbbell },
      { label: "Maintien renforcé", icon: ShieldCheck },
      { label: "Haute performance", icon: Zap }
    ]
  }
];

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-80 w-80 rounded-full bg-[#FF7A45]/8 blur-3xl" />

      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-primary">
              CHOISISSEZ VOTRE STRIP
            </p>
            <h2 className="mx-auto mt-6 max-w-[700px] text-[42px] font-extrabold leading-[0.96] tracking-normal text-navy sm:text-[56px] lg:text-[64px]">
              Deux strips. Deux usages. Une respiration optimale.
            </h2>
            <p className="mx-auto mt-8 max-w-[700px] text-lg leading-[1.7] text-[#5A657A] sm:text-xl">
              Chaque version est conçue pour répondre à un besoin spécifique.
              Choisissez celle qui correspond à votre quotidien.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.badge} delay={0.12 + index * 0.1}>
              <article
                className={`group/card relative min-h-[760px] overflow-hidden rounded-[32px] bg-[#08122D] shadow-[0_30px_90px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-2 ${product.hoverGlowClass}`}
              >
                <Image
                  src={product.background}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-500 group-hover/card:scale-105 ${product.backgroundPosition}`}
                />
                <div className={`absolute inset-0 ${product.overlayClass}`} />
                <div
                  className={`absolute left-1/2 top-[42%] h-44 w-56 -translate-x-1/2 rounded-full ${product.glowClass} opacity-70 blur-3xl transition-opacity duration-300 group-hover/card:opacity-100`}
                />

                <div className="relative z-10 flex min-h-[760px] flex-col p-6 sm:p-8 lg:p-10">
                  <div className="flex justify-start">
                    <span
                      className={`inline-flex rounded-full bg-gradient-to-r ${product.badgeClass} px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_12px_34px_rgba(15,23,42,0.22)]`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <div className="relative mx-auto mt-16 grid h-[300px] w-full max-w-[330px] place-items-center sm:mt-14">
                    <div
                      className={`absolute bottom-2 left-1/2 h-12 w-56 -translate-x-1/2 rounded-full ${product.glowClass} blur-2xl`}
                    />
                    <div className="relative h-[290px] w-[220px] transition-transform duration-300 group-hover/card:scale-105 sm:h-[320px] sm:w-[245px]">
                      <Image
                        src={product.productImage}
                        alt={product.productAlt}
                        fill
                        sizes="245px"
                        className="object-contain drop-shadow-[0_28px_36px_rgba(0,0,0,0.42)]"
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="max-w-[340px] text-[38px] font-extrabold leading-[0.96] tracking-normal text-white sm:text-[48px]">
                      {product.title}
                    </h3>
                    <p className="mt-5 max-w-[460px] text-lg leading-8 text-white/80 sm:text-xl">
                      {product.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {product.chips.map((chip) => {
                        const Icon = chip.icon;

                        return (
                          <span
                            key={chip.label}
                            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(0,0,0,0.14)] backdrop-blur-xl transition duration-300 group-hover/card:border-white/30 group-hover/card:bg-white/20"
                          >
                            <Icon
                              className="h-4 w-4"
                              style={{ color: product.accent }}
                            />
                            {chip.label}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href="#packs"
                      className={`mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r ${product.buttonClass} px-6 text-sm font-extrabold text-white transition duration-300 hover:brightness-110`}
                    >
                      {product.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
