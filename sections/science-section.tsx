import Image from "next/image";
import { ArrowRight, Moon, Pill, Wind } from "lucide-react";
import { Reveal } from "@/components/reveal";

const scientificBenefits = [
  {
    title: "Ouverture mécanique",
    description: "Soulève délicatement les parois nasales.",
    icon: Wind
  },
  {
    title: "Sans médicament",
    description: "Aucune substance active.",
    icon: Pill
  },
  {
    title: "Action immédiate",
    description: "Fonctionne dès la pose.",
    icon: Moon
  }
];

type NoseDiagramProps = {
  variant: "before" | "after";
};

function NoseDiagram({ variant }: NoseDiagramProps) {
  const isAfter = variant === "after";
  const color = isAfter ? "#25D8FF" : "#F04438";
  const softColor = isAfter ? "rgba(37,216,255,0.24)" : "rgba(240,68,56,0.18)";
  const pathWidth = isAfter ? 10 : 4;
  const gradientId = `${variant}-airflow-gradient`;
  const glowId = `${variant}-airflow-glow`;
  const skinGradientId = `${variant}-nose-gradient`;

  return (
    <svg
      viewBox="0 0 360 300"
      className="h-[260px] w-full"
      role="img"
      aria-label={
        isAfter
          ? "Passage nasal ouvert avec flux d'air amélioré"
          : "Passage nasal étroit avec flux d'air limité"
      }
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={isAfter ? "#25D8FF" : "#FF8A7A"} />
          <stop offset="100%" stopColor={isAfter ? "#2563EB" : "#F04438"} />
        </linearGradient>
        <linearGradient id={skinGradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
          <stop offset="58%" stopColor="rgba(239,246,255,0.9)" />
          <stop offset="100%" stopColor="rgba(219,234,254,0.74)" />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="180" cy="150" r="126" fill={softColor} opacity="0.72">
        <animate
          attributeName="r"
          dur="4.8s"
          repeatCount="indefinite"
          values="118;132;118"
        />
        <animate
          attributeName="opacity"
          dur="4.8s"
          repeatCount="indefinite"
          values="0.46;0.78;0.46"
        />
      </circle>
      <path
        d="M180 32c-28 31-45 69-48 113-28 19-44 43-44 70 0 34 34 51 92 51s92-17 92-51c0-27-16-51-44-70-3-44-20-82-48-113Z"
        fill={`url(#${skinGradientId})`}
        stroke="rgba(37,99,235,0.18)"
        strokeWidth="3"
      />
      <path
        d="M180 47c-13 35-21 68-21 108 0 39 9 65 21 85 12-20 21-46 21-85 0-40-8-73-21-108Z"
        fill="rgba(255,255,255,0.62)"
        stroke="rgba(37,99,235,0.10)"
        strokeWidth="2"
      />
      <path
        d="M180 54c-5 42-6 80-2 115 2 18 2 36 2 56"
        fill="none"
        stroke="rgba(15,23,42,0.20)"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M140 151c-25 11-42 31-47 59"
        fill="none"
        stroke="rgba(37,99,235,0.10)"
        strokeLinecap="round"
        strokeWidth="15"
      />
      <path
        d="M220 151c25 11 42 31 47 59"
        fill="none"
        stroke="rgba(37,99,235,0.10)"
        strokeLinecap="round"
        strokeWidth="15"
      />
      <path
        d={isAfter ? "M147 101c-25 36-38 70-38 108" : "M158 108c-14 30-20 61-20 96"}
        fill="none"
        stroke="rgba(15,23,42,0.34)"
        strokeLinecap="round"
        strokeWidth={isAfter ? 8 : 14}
      />
      <path
        d={isAfter ? "M213 101c25 36 38 70 38 108" : "M202 108c14 30 20 61 20 96"}
        fill="none"
        stroke="rgba(15,23,42,0.34)"
        strokeLinecap="round"
        strokeWidth={isAfter ? 8 : 14}
      />
      <path
        d={isAfter ? "M138 211c14 19 28 28 42 28s28-9 42-28" : "M151 214c10 10 20 15 29 15s19-5 29-15"}
        fill="none"
        stroke="rgba(15,23,42,0.36)"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <ellipse
        cx="145"
        cy="219"
        rx={isAfter ? 21 : 13}
        ry={isAfter ? 10 : 8}
        fill="rgba(15,23,42,0.76)"
        transform="rotate(-15 145 219)"
      />
      <ellipse
        cx="215"
        cy="219"
        rx={isAfter ? 21 : 13}
        ry={isAfter ? 10 : 8}
        fill="rgba(15,23,42,0.76)"
        transform="rotate(15 215 219)"
      />
      <path
        d={isAfter ? "M120 150c30-18 90-18 120 0" : "M132 152c24-10 72-10 96 0"}
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeLinecap="round"
        strokeWidth={isAfter ? 18 : 10}
      />
      {isAfter ? (
        <>
          <path
            d="M120 150c30-18 90-18 120 0"
            fill="none"
            filter={`url(#${glowId})`}
            stroke="rgba(37,216,255,0.8)"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <path
            d="M134 138c-12-14-22-19-34-22M226 138c12-14 22-19 34-22"
            fill="none"
            stroke="#25D8FF"
            strokeLinecap="round"
            strokeWidth="5"
            opacity="0.78"
          />
        </>
      ) : null}
      <path
        d={isAfter ? "M173 82c-20 48-28 88-27 133" : "M174 88c-9 38-12 77-10 121"}
        fill="none"
        filter={`url(#${glowId})`}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={pathWidth}
        opacity={isAfter ? 0.95 : 0.7}
      />
      <path
        d={isAfter ? "M187 82c20 48 28 88 27 133" : "M186 88c9 38 12 77 10 121"}
        fill="none"
        filter={`url(#${glowId})`}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={pathWidth}
        opacity={isAfter ? 0.95 : 0.7}
      />
      <path
        d={isAfter ? "M146 220c-28 19-58 27-92 23" : "M154 219c-14 8-29 11-45 8"}
        fill="none"
        filter={`url(#${glowId})`}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={isAfter ? 8 : 4}
        opacity={isAfter ? 0.82 : 0.58}
      />
      <path
        d={isAfter ? "M214 220c28 19 58 27 92 23" : "M206 219c14 8 29 11 45 8"}
        fill="none"
        filter={`url(#${glowId})`}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={isAfter ? 8 : 4}
        opacity={isAfter ? 0.82 : 0.58}
      />

      {[0, 1, 2, 3, 4].map((particle) => (
        <circle key={particle} r={isAfter ? 4 : 2.8} fill={color} opacity={isAfter ? 0.9 : 0.62}>
          <animateMotion
            dur={isAfter ? "3.4s" : "4.8s"}
            begin={`${particle * 0.45}s`}
            repeatCount="indefinite"
            path={
              particle % 2 === 0
                ? "M173 82 C150 134 149 181 92 238"
                : "M187 82 C210 134 211 181 268 238"
            }
          />
          <animate
            attributeName="opacity"
            dur={isAfter ? "3.4s" : "4.8s"}
            repeatCount="indefinite"
            values="0;1;0"
          />
        </circle>
      ))}
    </svg>
  );
}

function TransitionArrow() {
  return (
    <div className="relative mx-auto grid h-24 w-full max-w-[180px] place-items-center lg:h-full lg:w-24">
      <div className="absolute h-20 w-20 animate-breathe rounded-full bg-[#25D8FF]/18 blur-xl" />
      <div className="relative grid h-16 w-16 place-items-center rounded-full border border-blue-100 bg-white/80 text-primary shadow-[0_18px_50px_rgba(37,99,235,0.18)] backdrop-blur-xl">
        <ArrowRight className="h-8 w-8 drop-shadow-[0_0_14px_rgba(37,216,255,0.48)]" />
      </div>
      <span className="absolute left-8 top-1/2 h-1.5 w-1.5 rounded-full bg-[#25D8FF] shadow-[0_0_18px_rgba(37,216,255,0.8)] lg:left-2">
        <span className="absolute inset-0 animate-[ping_2.8s_ease-in-out_infinite] rounded-full bg-[#25D8FF]" />
      </span>
      <span className="absolute right-8 top-[42%] h-1 w-1 rounded-full bg-primary shadow-[0_0_16px_rgba(37,99,235,0.7)] lg:right-2">
        <span className="absolute inset-0 animate-[ping_3.2s_ease-in-out_infinite] rounded-full bg-primary" />
      </span>
    </div>
  );
}

export function ScienceSection() {
  return (
    <section id="science" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute left-10 top-[45%] h-52 w-52 rounded-full bg-accent/10 blur-2xl" />

      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-extrabold uppercase tracking-[4px] text-primary">
              LA SCIENCE D'UNE MEILLEURE RESPIRATION
            </p>
            <h2 className="mx-auto mt-6 max-w-[700px] text-[42px] font-extrabold leading-[0.96] tracking-normal text-navy sm:text-[56px] lg:text-[64px]">
              Un simple geste, une respiration transformée.
            </h2>
            <p className="mx-auto mt-8 max-w-[700px] text-lg leading-[1.7] text-[#5A657A] sm:text-xl">
              Le strip nasal agit mécaniquement en soulevant délicatement les
              parois du nez afin d'améliorer le passage de l'air, sans
              médicament et sans substance active.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-7">
          <Reveal delay={0.08}>
            <article className="glass group h-full rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_28px_80px_rgba(240,68,56,0.12)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#F04438]">
                    Avant Breatheex
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
                    Airflow restricted
                  </h3>
                </div>
                <span className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-lg font-extrabold text-[#F04438]">
                  42%
                </span>
              </div>

              <div className="mt-8 rounded-[28px] border border-red-100/80 bg-gradient-to-b from-white to-red-50/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <NoseDiagram variant="before" />
              </div>

              <div className="mt-7 space-y-2">
                <p className="text-xl font-extrabold text-navy">
                  Passage d'air limité
                </p>
                <p className="text-base leading-7 text-[#5A657A]">
                  Respiration plus difficile.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.18} className="flex items-center">
            <TransitionArrow />
          </Reveal>

          <Reveal delay={0.28}>
            <article className="glass group h-full rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#25D8FF]/45 hover:shadow-[0_32px_90px_rgba(37,99,235,0.18)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">
                    Après Breatheex
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-normal text-navy">
                    Airflow improved
                  </h3>
                </div>
                <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-lg font-extrabold text-primary">
                  82%
                </span>
              </div>

              <div className="mt-8 rounded-[28px] border border-blue-100/90 bg-gradient-to-b from-white to-blue-50/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <NoseDiagram variant="after" />
              </div>

              <div className="mt-7 space-y-2">
                <p className="text-xl font-extrabold text-navy">
                  Passage d'air amélioré
                </p>
                <p className="text-base leading-7 text-[#5A657A]">
                  Respiration plus fluide.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {scientificBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.title} delay={0.12 + index * 0.08}>
                <article className="glass group h-full rounded-[24px] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#25D8FF]/45 hover:shadow-[0_28px_70px_rgba(37,99,235,0.16)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-[#25D8FF] text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition duration-500 group-hover:shadow-[0_0_34px_rgba(37,216,255,0.45)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 max-w-[280px] text-base leading-7 text-[#5A657A]">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="pointer-events-none absolute -bottom-16 right-0 hidden w-[190px] rotate-[-4deg] lg:block">
          <div className="absolute -bottom-3 left-8 h-10 w-32 rounded-full bg-[#25D8FF]/35 blur-2xl" />
          <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
            <Image
              src="/images/breathe-right-extra-strength-clear-44.jpg"
              alt="Breatheex nasal strips"
              width={360}
              height={360}
              className="h-[152px] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
