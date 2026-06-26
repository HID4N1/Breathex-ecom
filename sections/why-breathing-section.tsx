import {
  Activity,
  ArrowRight,
  HeartPulse,
  Moon,
  RotateCcw,
  Wind,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const benefits = [
  {
    label: "Sommeil",
    description: "Dormez plus profondément et respirez naturellement.",
    icon: Moon,
    className: "left-0 top-8 sm:left-6 lg:-left-4 lg:top-10"
  },
  {
    label: "Énergie",
    description: "Réveillez-vous plus reposé.",
    icon: Zap,
    className: "right-0 top-16 sm:right-8 lg:right-2 lg:top-12"
  },
  {
    label: "Performance",
    description: "Plus d'oxygène pendant l'effort.",
    icon: Activity,
    className: "left-0 top-[42%] sm:left-8 lg:-left-8 lg:top-[45%]"
  },
  {
    label: "Récupération",
    description: "Une meilleure récupération après chaque activité.",
    icon: RotateCcw,
    className: "right-0 top-[46%] sm:right-8 lg:-right-6 lg:top-[48%]"
  },
  {
    label: "Bien-être",
    description: "Respirer librement au quotidien.",
    icon: HeartPulse,
    className: "left-1/2 top-[62%] -translate-x-1/2 sm:top-[70%]"
  }
];

const stats = [
  {
    value: "7 à 8 h",
    label: "Respiration optimisée pendant votre sommeil"
  },
  {
    value: "100%",
    label: "Sans médicament"
  },
  {
    value: "24/7",
    label: "Fonctionne jour et nuit"
  }
];

export function WhyBreathingSection() {
  return (
    <section id="why" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[58%] top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#25D8FF]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-40 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-20 left-[45%] h-44 w-44 rounded-full bg-accent/10 blur-2xl" />

      <div className="section-shell grid gap-20 lg:grid-cols-[45%_55%] lg:items-center lg:gap-20">
        <Reveal>
          <div className="max-w-[560px]">
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[4px] text-primary">
              POURQUOI RESPIRER COMPTE
            </p>
            <h2 className="max-w-[560px] text-[42px] font-extrabold leading-[0.96] tracking-normal text-navy sm:text-[56px] lg:text-[64px]">
              Une meilleure respiration améliore bien plus que votre sommeil.
            </h2>
            <p className="mt-8 max-w-[520px] text-lg leading-[1.7] text-[#5A657A] sm:text-xl">
              Respirer librement améliore naturellement la qualité du sommeil,
              l'énergie quotidienne, la récupération physique et les
              performances sportives. Une meilleure oxygénation influence chaque
              moment de votre journée.
            </p>
            <a
              href="#science"
              className="group mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#25D8FF] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 text-base font-extrabold text-primary transition-all duration-300 hover:bg-[length:100%_2px] hover:text-[#0B63E5]"
            >
              Découvrir la science
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto min-h-[760px] w-full max-w-[720px] sm:min-h-[700px]">
            <div className="absolute left-1/2 top-[44%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full bg-[radial-gradient(circle,rgba(37,216,255,0.22)_0%,rgba(37,99,235,0.10)_42%,transparent_70%)] blur-sm" />
            <div className="absolute left-1/2 top-[44%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/80 bg-white/50 shadow-[0_32px_90px_rgba(37,99,235,0.14)] backdrop-blur-xl" />
            <div className="absolute left-1/2 top-[44%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full bg-[radial-gradient(circle,rgba(37,216,255,0.34)_0%,rgba(96,165,250,0.12)_52%,transparent_72%)]" />

            <div className="absolute left-1/2 top-[44%] grid h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/70 shadow-[0_28px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
              <div className="absolute inset-8 rounded-full border border-blue-100" />
              <div className="absolute inset-14 animate-breathe rounded-full border border-[#25D8FF]/35 shadow-[0_0_48px_rgba(37,216,255,0.30)]" />
              <svg
                viewBox="0 0 260 260"
                className="relative h-[230px] w-[230px]"
                role="img"
                aria-label="Visualisation du flux d'air nasal"
              >
                <defs>
                  <linearGradient id="airflow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#25D8FF" />
                    <stop offset="55%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M154 35c31 13 52 43 52 78 0 37-22 68-54 81l-8 24h-53l8-34c-22-17-36-42-36-71 0-50 41-91 91-78Z"
                  fill="rgba(219,234,254,0.52)"
                  stroke="rgba(37,99,235,0.20)"
                  strokeWidth="3"
                />
                <path
                  d="M146 78c20 5 34 20 34 38 0 18-14 31-37 35"
                  fill="none"
                  stroke="#0F172A"
                  strokeLinecap="round"
                  strokeWidth="5"
                  opacity="0.72"
                />
                <path
                  d="M142 116c-18 0-34 6-47 18"
                  fill="none"
                  stroke="#0F172A"
                  strokeLinecap="round"
                  strokeWidth="5"
                  opacity="0.56"
                />
                <path
                  d="M118 126c-24-5-44 2-64 20"
                  fill="none"
                  filter="url(#softGlow)"
                  stroke="url(#airflow)"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
                <path
                  d="M116 111c-29-13-55-12-81 6"
                  fill="none"
                  filter="url(#softGlow)"
                  stroke="url(#airflow)"
                  strokeLinecap="round"
                  strokeWidth="5"
                  opacity="0.78"
                />
                <path
                  d="M120 142c-23 10-40 27-50 51"
                  fill="none"
                  filter="url(#softGlow)"
                  stroke="url(#airflow)"
                  strokeLinecap="round"
                  strokeWidth="5"
                  opacity="0.68"
                />
                <circle cx="95" cy="133" r="7" fill="#25D8FF" filter="url(#softGlow)" />
              </svg>
              <span className="absolute bottom-10 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-soft backdrop-blur-xl">
                <Wind className="h-4 w-4" />
                Airflow
              </span>
            </div>

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.label}
                  className={`glass group absolute z-10 w-[164px] animate-in fade-in-0 slide-in-from-bottom-4 rounded-[24px] border-blue-100/90 p-3 transition-all duration-700 [animation-fill-mode:both] hover:-translate-y-2 hover:scale-[1.03] hover:border-[#25D8FF]/45 hover:shadow-[0_28px_70px_rgba(37,99,235,0.18)] sm:w-[210px] sm:p-4 ${benefit.className}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-[#25D8FF] text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)] transition duration-500 group-hover:shadow-[0_0_30px_rgba(37,216,255,0.45)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-navy sm:text-lg">
                    {benefit.label}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#5A657A] sm:text-sm sm:leading-6">
                    {benefit.description}
                  </p>
                </div>
              );
            })}

            <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className="glass animate-in fade-in-0 slide-in-from-bottom-3 rounded-[24px] p-3 text-center transition-all duration-700 [animation-fill-mode:both] hover:-translate-y-1 hover:border-[#25D8FF]/45 hover:shadow-[0_24px_64px_rgba(37,99,235,0.15)] sm:p-5"
                  style={{ animationDelay: `${520 + index * 120}ms` }}
                >
                  <p className="text-xl font-extrabold tracking-normal text-navy sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] font-medium leading-5 text-[#5A657A] sm:text-sm sm:leading-6">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
