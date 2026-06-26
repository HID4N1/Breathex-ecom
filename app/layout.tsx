import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import frMessages from "@/messages/fr.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://breatheex.ma"),
  title: "Breatheex | L'art de bien respirer",
  description:
    "Breatheex aide a respirer plus librement pour ameliorer le sommeil, la recuperation et le confort au quotidien.",
  openGraph: {
    title: "Breatheex | Respirez mieux. Vivez mieux.",
    description:
      "Une respiration plus libre pour ameliorer votre sommeil, votre recuperation et vos performances au quotidien.",
    images: ["/images/breatheex-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale="fr" messages={frMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
