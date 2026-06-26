"use client";

import type { ReactNode } from "react";
import { Minus, Plus, ShieldCheck, ShoppingBag, Truck, WalletCards } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cities, deliveryHighlights, packs } from "@/data/site";
import { useOrderForm } from "@/hooks/use-order-form";
import { cn } from "@/lib/utils";

export function OrderSection() {
  const { form, onSubmit, selectedPack, total, submitted, setSubmitted } =
    useOrderForm();
  const {
    register,
    setValue,
    watch,
    formState: { errors }
  } = form;
  const product = watch("product");
  const packId = watch("packId");
  const quantity = watch("quantity");

  return (
    <section id="order" className="bg-white py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Commander"
            title="Finalisez votre commande Breatheex."
            description="Paiement a la livraison, confirmation rapide, expedition partout au Maroc."
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-8 rounded-[2rem] border border-blue-100 bg-white p-4 shadow-premium lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
            <form onSubmit={onSubmit} className="rounded-[1.5rem] bg-slate-50 p-5 sm:p-7">
              <div className="grid gap-6">
                <div>
                  <Label>Product Selector</Label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {(["clear", "tan"] as const).map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setValue("product", item, { shouldValidate: true })}
                        className={cn(
                          "rounded-2xl border bg-white p-5 text-left transition hover:border-primary",
                          product === item
                            ? "border-primary shadow-soft"
                            : "border-blue-100"
                        )}
                      >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                          Breatheex
                        </span>
                        <span className="mt-2 block text-2xl font-semibold uppercase text-navy">
                          {item}
                        </span>
                        <span className="mt-2 block text-sm text-slate-500">
                          {item === "clear"
                            ? "Sommeil, confort, discretion"
                            : "Sport, performance, maintien"}
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.product ? (
                    <p className="mt-2 text-sm text-red-500">{errors.product.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label>Pack Selector</Label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {packs.map((pack) => (
                      <button
                        type="button"
                        key={pack.id}
                        onClick={() => setValue("packId", pack.id, { shouldValidate: true })}
                        className={cn(
                          "rounded-2xl border bg-white p-4 text-left transition hover:border-primary",
                          packId === pack.id
                            ? "border-primary shadow-soft"
                            : "border-blue-100"
                        )}
                      >
                        <span className="block font-semibold text-navy">{pack.name}</span>
                        <span className="mt-1 block text-sm text-slate-500">
                          {pack.strips}
                        </span>
                        <span className="mt-3 block text-xl font-semibold text-primary">
                          {pack.price} MAD
                        </span>
                      </button>
                    ))}
                  </div>
                  {errors.packId ? (
                    <p className="mt-2 text-sm text-red-500">{errors.packId.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label>Quantity Selector</Label>
                  <div className="mt-3 inline-flex items-center rounded-full border border-blue-100 bg-white p-1 shadow-sm">
                    <button
                      type="button"
                      aria-label="Diminuer la quantite"
                      onClick={() => setValue("quantity", Math.max(1, Number(quantity) - 1))}
                      className="grid h-10 w-10 place-items-center rounded-full text-navy hover:bg-blue-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold text-navy">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Augmenter la quantite"
                      onClick={() => setValue("quantity", Math.min(10, Number(quantity) + 1))}
                      className="grid h-10 w-10 place-items-center rounded-full text-navy hover:bg-blue-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.fullName?.message}>
                    <Input placeholder="Votre nom complet" {...register("fullName")} />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <Input placeholder="06 00 00 00 00" {...register("phone")} />
                  </Field>
                  <Field label="City" error={errors.city?.message}>
                    <select
                      className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-navy shadow-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-blue-100"
                      {...register("city")}
                    >
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Address" error={errors.address?.message}>
                    <Input placeholder="Adresse complete" {...register("address")} />
                  </Field>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-primary">
                      <WalletCards className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">COD Notice</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Aucun paiement en ligne. Notre equipe vous contacte pour confirmer,
                        puis vous payez a la livraison.
                      </p>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-700">
                    Commande reçue. Un conseiller Breatheex vous contactera pour confirmer.
                  </div>
                ) : null}

                <Button type="submit" size="lg" className="w-full" onClick={() => setSubmitted(false)}>
                  <ShoppingBag className="h-5 w-5" />
                  Confirmer ma commande
                </Button>
              </div>
            </form>

            <aside className="rounded-[1.5rem] bg-gradient-to-br from-navy to-blue-950 p-6 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                Order Summary
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                {selectedPack.name}
              </h3>
              <p className="mt-3 leading-7 text-blue-100">
                {selectedPack.subtitle} Finition {product.toUpperCase()}.
              </p>
              <div className="mt-8 space-y-4 rounded-2xl bg-white/10 p-5">
                <SummaryRow label="Pack" value={selectedPack.strips} />
                <SummaryRow label="Quantite" value={`x${quantity}`} />
                <SummaryRow label="Livraison" value="48h-72h" />
                <div className="border-t border-white/15 pt-4">
                  <SummaryRow label="Total COD" value={`${total} MAD`} large />
                </div>
              </div>
              <div className="mt-8 grid gap-3">
                {deliveryHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-blue-50">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-blue-50">
                <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
                Solution sans medicament. En cas de probleme respiratoire important,
                demandez conseil a un professionnel de sante.
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  large
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-blue-100">{label}</span>
      <span className={cn("font-semibold text-white", large && "text-2xl")}>
        {value}
      </span>
    </div>
  );
}
