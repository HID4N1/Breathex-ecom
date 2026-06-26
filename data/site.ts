import {
  Activity,
  BedDouble,
  Bike,
  CheckCircle2,
  Clock3,
  Dumbbell,
  HeartPulse,
  Leaf,
  MapPinned,
  Moon,
  ShieldCheck,
  Smile,
  Sparkles,
  Truck,
  WalletCards,
  Wind
} from "lucide-react";
import type { Benefit, Pack, TrustItem } from "@/types/product";

export const whatsappUrl =
  "https://wa.me/212600000000?text=Bonjour%20Breatheex%2C%20je%20souhaite%20commander.";

export const heroBadges = [
  "Paiement a la livraison",
  "Livraison partout au Maroc",
  "Livraison sous 48h-72h",
  "Sans medicament",
  "Effet immediat"
];

export const trustItems: TrustItem[] = [
  {
    title: "Livraison Maroc",
    description: "48h-72h vers les grandes villes.",
    icon: Truck
  },
  {
    title: "COD",
    description: "Paiement simple a la livraison.",
    icon: WalletCards
  },
  {
    title: "Sans medicament",
    description: "Action mecanique, sans actifs.",
    icon: Leaf
  },
  {
    title: "Confort optimal",
    description: "Pensé pour rester discret.",
    icon: Smile
  },
  {
    title: "Usage quotidien",
    description: "Sommeil, sport et routines.",
    icon: Clock3
  }
];

export const benefits: Benefit[] = [
  {
    title: "Better Sleep",
    description: "Aide a ouvrir les voies nasales pour une nuit plus calme.",
    icon: Moon
  },
  {
    title: "Reduced Snoring",
    description: "Favorise le passage de l'air lorsque la respiration nasale est limitee.",
    icon: BedDouble
  },
  {
    title: "Easier Breathing",
    description: "Une sensation d'air plus libre des les premieres minutes.",
    icon: Wind
  },
  {
    title: "Better Recovery",
    description: "Une meilleure respiration soutient des routines de recuperation plus stables.",
    icon: HeartPulse
  },
  {
    title: "Better Sports Performance",
    description: "Un soutien discret pour les seances intenses et l'endurance.",
    icon: Dumbbell
  },
  {
    title: "Drug-Free Solution",
    description: "Sans medicament, sans spray, sans dependance.",
    icon: ShieldCheck
  }
];

export const useCases = [
  {
    title: "Sleep Better",
    eyebrow: "Sommeil",
    description:
      "Aidez votre respiration nasale a rester plus libre pendant la nuit pour vous reveiller plus leger.",
    image: "/images/breathe-right-sport-sleep-banner.png",
    icon: Moon
  },
  {
    title: "Perform Better",
    eyebrow: "Performance",
    description:
      "Un allié discret pour les entrainements, les courses et les journees ou l'energie compte.",
    image: "/images/breathe-right-extra-strength-tan-44.jpg",
    icon: Bike
  },
  {
    title: "Feel Better Every Day",
    eyebrow: "Quotidien",
    description:
      "Respirer plus librement change la maniere de dormir, bouger, recuperer et se concentrer.",
    image: "/images/breathe-right-extra-strength-clear-44.jpg",
    icon: Sparkles
  }
];

export const packs: Pack[] = [
  {
    id: "decouverte",
    name: "Pack Decouverte",
    price: 149,
    subtitle: "Ideal pour tester Breatheex.",
    strips: "30 strips"
  },
  {
    id: "duo",
    name: "Pack Duo",
    price: 249,
    subtitle: "Sommeil + sport sur un mois.",
    strips: "60 strips",
    badge: "Most Popular",
    highlight: true
  },
  {
    id: "famille",
    name: "Pack Famille",
    price: 399,
    subtitle: "Pour partager le confort.",
    strips: "120 strips"
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: 549,
    subtitle: "La routine complete.",
    strips: "180 strips"
  }
];

export const experiences = [
  {
    quote:
      "Je l'utilise surtout la nuit. La sensation est simple: je respire plus naturellement et je me reveille moins lourd.",
    name: "Yassine",
    city: "Casablanca",
    context: "Sommeil"
  },
  {
    quote:
      "Pendant le sport, c'est discret mais utile. On sent la difference quand l'effort monte.",
    name: "Nadia",
    city: "Rabat",
    context: "Fitness"
  },
  {
    quote:
      "J'avais peur que ca tire la peau, mais le confort est bon. Je le garde dans ma routine du soir.",
    name: "Mehdi",
    city: "Marrakech",
    context: "Confort"
  }
];

export const faqs = [
  {
    question: "Breatheex aide-t-il vraiment pour le sommeil ?",
    answer:
      "Breatheex aide a ouvrir mecaniquement les voies nasales. Pour beaucoup d'utilisateurs, une respiration nasale plus libre rend la nuit plus confortable."
  },
  {
    question: "Est-ce que cela reduit le ronflement ?",
    answer:
      "Il peut aider lorsque le ronflement est lie a une respiration nasale limitee. Il ne remplace pas un avis medical en cas de ronflement severe ou d'apnee suspectee."
  },
  {
    question: "Puis-je l'utiliser pendant le sport ?",
    answer:
      "Oui. La version Tan est pensee pour les activites plus intenses, l'entrainement et les routines de performance."
  },
  {
    question: "Est-ce confortable sur la peau ?",
    answer:
      "Les strips sont concus pour etre fins, flexibles et agreables. Appliquez-les sur une peau propre et seche pour une meilleure adhesion."
  },
  {
    question: "Combien de temps puis-je le porter ?",
    answer:
      "Vous pouvez l'utiliser pendant une nuit ou une session sportive. Retirez-le doucement apres usage."
  },
  {
    question: "Est-ce un medicament ?",
    answer:
      "Non. Breatheex est une solution mecanique sans medicament, sans spray et sans principe actif."
  },
  {
    question: "La livraison couvre-t-elle tout le Maroc ?",
    answer:
      "Oui, la livraison est disponible partout au Maroc avec un delai indicatif de 48h a 72h selon la ville."
  },
  {
    question: "Comment fonctionne le paiement a la livraison ?",
    answer:
      "Vous validez votre commande, notre equipe confirme les details, puis vous payez en especes au moment de la livraison."
  }
];

export const sciencePoints = [
  {
    title: "Avant Breatheex",
    label: "Airflow limite",
    value: "42%",
    icon: Activity
  },
  {
    title: "Apres Breatheex",
    label: "Airflow ameliore",
    value: "82%",
    icon: CheckCircle2
  }
];

export const cities = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fes",
  "Tanger",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
  "Autre ville"
];

export const languages = ["FR", "AR", "EN"];

export const quickLinks = [
  { label: "Pourquoi respirer", href: "#why" },
  { label: "Science", href: "#science" },
  { label: "Packs", href: "#packs" },
  { label: "FAQ", href: "#faq" }
];

export const deliveryHighlights = [
  {
    label: "Partout au Maroc",
    icon: MapPinned
  },
  {
    label: "48h-72h",
    icon: Truck
  },
  {
    label: "Paiement a la livraison",
    icon: WalletCards
  }
];
