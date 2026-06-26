import { Facebook, Instagram, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { languages, quickLinks, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white pb-24 pt-12 md:pb-10">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-bold text-navy">Breatheex</p>
              <p className="text-sm text-slate-500">L'art de bien respirer</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-600">
            Better breathing. Better sleep. Better recovery. Better performance.
            Better life.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <a href={whatsappUrl} className="hover:text-primary">
              WhatsApp
            </a>
            <span>contact@breatheex.ma</span>
            <span>Livraison partout au Maroc</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Language</h3>
          <div className="mt-4 flex gap-2">
            {languages.map((language) => (
              <button
                key={language}
                className="rounded-full border border-blue-100 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-primary hover:text-primary"
              >
                {language}
              </button>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <Button asChild variant="outline" size="icon" aria-label="Instagram">
              <a href="#">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="Facebook">
              <a href="#">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="WhatsApp">
              <a href={whatsappUrl}>
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-blue-100 pt-6 text-sm text-slate-500">
        © 2026 Breatheex. Tous droits reserves.
      </div>
    </footer>
  );
}
