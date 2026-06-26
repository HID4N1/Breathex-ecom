import Image from "next/image";
import { ArrowRight, Check, Leaf, Moon, ShieldCheck, Wind } from "lucide-react";

const leftFeatures = [
  "+50% de maintien*",
  "+20% de couverture*",
  "Confortable & facile à retirer"
];

const rightFeatures = [
  "Soulage instantanément la congestion nasale",
  "Facilite la respiration pendant le sommeil",
  "Idéal pour une nuit paisible"
];

const benefits = [
  {
    label: "Sans médicament",
    icon: ShieldCheck
  },
  {
    label: "Hypoallergénique",
    icon: Leaf
  },
  {
    label: "Respiration immédiate",
    icon: Wind
  }
];

export function HeroSection() {
  return (
    <section className="relative h-[clamp(620px,52vw,760px)] overflow-hidden bg-[#020b1f]">
      <Image
        src="/images/breatheex-hero.png"
        alt="Breatheex hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(37,216,255,0.38)_0%,rgba(37,216,255,0.12)_22%,transparent_46%),radial-gradient(circle_at_24%_48%,rgba(2,11,31,0.12)_0%,rgba(2,11,31,0.55)_38%,transparent_64%),radial-gradient(circle_at_76%_46%,rgba(2,11,31,0.1)_0%,rgba(2,11,31,0.52)_36%,transparent_64%),linear-gradient(90deg,rgba(2,11,31,0.46)_0%,rgba(2,11,31,0.08)_30%,rgba(2,11,31,0.06)_70%,rgba(2,11,31,0.48)_100%),linear-gradient(180deg,rgba(2,11,31,0.58)_0%,rgba(2,11,31,0.08)_42%,rgba(2,11,31,0.62)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#020b1f]/85 to-transparent" />

      <div className="absolute inset-x-6 top-[96px] z-10 mx-auto max-w-[650px] text-center text-white sm:top-[104px] lg:top-[112px]">
        <h1
          className="text-[44px] font-black leading-[0.9] tracking-normal sm:text-[58px] lg:text-[72px]"
          style={{
            textShadow:
              "0 0 34px rgba(37,216,255,0.3), 0 6px 24px rgba(0,0,0,0.5)"
          }}
        >
          Respirez{" "}
          <span className="bg-gradient-to-r from-white via-cyan-100 to-[#25D8FF] bg-clip-text text-transparent">
            mieux
          </span>
          ,
          <br />
          vivez{" "}
          <span className="bg-gradient-to-r from-white via-cyan-100 to-[#25D8FF] bg-clip-text text-transparent">
            mieux
          </span>
          .
        </h1>

        {/* <p className="mx-auto mt-6 max-w-[560px] text-balance text-base font-medium leading-7 text-white/80 sm:text-xl lg:text-[22px]">
          Bandes nasales conçues pour ouvrir vos voies nasales et améliorer vos
          performances et votre sommeil.
        </p> */}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#order"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#25D8FF] px-7 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(37,99,235,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(37,216,255,0.34)]"
          >
            Commander maintenant
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#packs"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(2,11,31,0.24)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/16"
          >
            Voir les packs
          </a>
        </div>
      </div>

      <div className="absolute bottom-[116px] left-[8vw] z-10 hidden max-w-[270px] text-white lg:block">
        <h2 className="flex items-center gap-4 text-3xl font-black uppercase leading-[0.95] tracking-normal drop-shadow-lg xl:text-4xl">
          <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-[#FF5A3D] bg-[#061226]/36 text-white shadow-[0_0_22px_rgba(255,90,61,0.26)] backdrop-blur-sm">
            <Wind className="h-8 w-8" />
          </span>
          <span>
            Performez
            <br />
            <span className="text-[#FF5A3D]">mieux</span>
          </span>
        </h2>
        <ul className="mt-6 space-y-3 text-[15px] font-medium leading-6 text-white/88 xl:text-base">
          {leftFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FF5A3D] text-white shadow-[0_0_14px_rgba(255,90,61,0.42)]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-[116px] right-[7vw] z-10 hidden max-w-[320px] text-white lg:block">
        <h2 className="flex items-center gap-4 text-3xl font-black uppercase leading-[0.95] tracking-normal drop-shadow-lg xl:text-4xl">
          <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-[#25D8FF] bg-[#061226]/36 text-[#25D8FF] shadow-[0_0_22px_rgba(37,216,255,0.26)] backdrop-blur-sm">
            <Moon className="h-8 w-8" />
          </span>
          <span>
            Dormez
            <br />
            <span className="text-[#25D8FF]">mieux</span>
          </span>
        </h2>
        <ul className="mt-6 space-y-3 text-[15px] font-medium leading-6 text-white/88 xl:text-base">
          {rightFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25D8FF] text-[#021327] shadow-[0_0_14px_rgba(37,216,255,0.42)]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>


    </section>
  );
}
