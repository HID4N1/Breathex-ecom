"use client";

import type { ReactNode } from "react";
import {
  Boxes,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Truck,
  WalletCards
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cities, deliveryHighlights } from "@/data/site";
import { productCollections } from "@/data/commerce";
import { useOrderForm } from "@/hooks/use-order-form";
import { cn } from "@/lib/utils";

export function OrderSection() {
  const {
    form,
    onSubmit,
    productOptions,
    packOptions,
    selectedProduct,
    selectedPack,
    selectedItem,
    total,
    submitted,
    setSubmitted
  } = useOrderForm();
  const {
    register,
    setValue,
    watch,
    formState: { errors }
  } = form;
  const orderType = watch("orderType");
  const productId = watch("productId");
  const packId = watch("packId");
  const quantity = watch("quantity");

  const selectedTitle =
    orderType === "pack" ? selectedPack.title : selectedProduct.name;
  const selectedSubtitle =
    orderType === "pack"
      ? selectedPack.description
      : `${selectedProduct.collection} • ${selectedProduct.quantity} • ${selectedProduct.description}`;

  return (
    <section id="order" className="relative overflow-hidden bg-white py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[620px] w-[760px] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Commander"
            title="Finalisez votre commande Breatheex."
            description="Choisissez un produit ou un pack, confirmez vos informations, puis payez simplement à la livraison."
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-8 rounded-[32px] border border-blue-100 bg-white/82 p-4 shadow-premium backdrop-blur-xl lg:grid-cols-[1.08fr_0.92fr] lg:p-6">
            <form onSubmit={onSubmit} className="rounded-[24px] bg-slate-50/90 p-5 sm:p-7">
              <div className="grid gap-7">
                <div>
                  <Label>Type de commande</Label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        value: "product",
                        title: "Produits",
                        description: "Choisir CLEAR ou TAN en 26, 30 ou 44.",
                        icon: PackageCheck
                      },
                      {
                        value: "pack",
                        title: "Packs",
                        description: "Choisir une routine prête à commander.",
                        icon: Boxes
                      }
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = orderType === item.value;

                      return (
                        <button
                          type="button"
                          key={item.value}
                          onClick={() =>
                            setValue("orderType", item.value as "product" | "pack", {
                              shouldValidate: true
                            })
                          }
                          className={cn(
                            "rounded-2xl border bg-white p-5 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-soft",
                            active
                              ? "border-primary shadow-soft"
                              : "border-blue-100"
                          )}
                        >
                          <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="mt-4 block text-xl font-extrabold text-navy">
                            {item.title}
                          </span>
                          <span className="mt-2 block text-sm leading-6 text-[#5A657A]">
                            {item.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {orderType === "product" ? (
                  <div>
                    <Label>Produit</Label>
                    <div className="mt-3 grid gap-3">
                      {productCollections.map((collection) => (
                        <div key={collection.title}>
                          <p
                            className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em]"
                            style={{ color: collection.accent }}
                          >
                            {collection.title}
                          </p>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {productOptions
                              .filter((product) => product.collection === collection.title)
                              .map((product) => (
                                <button
                                  type="button"
                                  key={product.id}
                                  onClick={() =>
                                    setValue("productId", product.id, {
                                      shouldValidate: true
                                    })
                                  }
                                  className={cn(
                                    "rounded-2xl border bg-white p-4 text-left transition hover:-translate-y-1 hover:shadow-soft",
                                    productId === product.id
                                      ? "border-primary shadow-soft"
                                      : "border-blue-100 hover:border-primary"
                                  )}
                                >
                                  <span className="block text-lg font-extrabold text-navy">
                                    {product.name}
                                  </span>
                                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                    {product.quantity}
                                  </span>
                                  <span className="mt-3 block text-xl font-extrabold text-primary">
                                    {product.price}
                                  </span>
                                </button>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.productId ? (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.productId.message}
                      </p>
                    ) : null}
                  </div>
                ) : (
                  <div>
                    <Label>Pack</Label>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {packOptions.map((pack) => (
                        <button
                          type="button"
                          key={pack.id}
                          onClick={() =>
                            setValue("packId", pack.id, { shouldValidate: true })
                          }
                          className={cn(
                            "rounded-2xl border bg-white p-4 text-left transition hover:-translate-y-1 hover:shadow-soft",
                            packId === pack.id
                              ? "border-primary shadow-soft"
                              : "border-blue-100 hover:border-primary"
                          )}
                        >
                          <span className="block text-lg font-extrabold text-navy">
                            {pack.title}
                          </span>
                          <span className="mt-2 block min-h-10 text-sm leading-5 text-[#5A657A]">
                            {pack.description}
                          </span>
                          <span className="mt-3 block text-xl font-extrabold text-primary">
                            {pack.price}
                          </span>
                        </button>
                      ))}
                    </div>
                    {errors.packId ? (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.packId.message}
                      </p>
                    ) : null}
                  </div>
                )}

                <div>
                  <Label>Quantité</Label>
                  <div className="mt-3 inline-flex items-center rounded-full border border-blue-100 bg-white p-1 shadow-sm">
                    <button
                      type="button"
                      aria-label="Diminuer la quantité"
                      onClick={() =>
                        setValue("quantity", Math.max(1, Number(quantity) - 1))
                      }
                      className="grid h-10 w-10 place-items-center rounded-full text-navy hover:bg-blue-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold text-navy">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Augmenter la quantité"
                      onClick={() =>
                        setValue("quantity", Math.min(10, Number(quantity) + 1))
                      }
                      className="grid h-10 w-10 place-items-center rounded-full text-navy hover:bg-blue-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom complet" error={errors.fullName?.message}>
                    <Input placeholder="Votre nom complet" {...register("fullName")} />
                  </Field>
                  <Field label="Téléphone" error={errors.phone?.message}>
                    <Input placeholder="06 00 00 00 00" {...register("phone")} />
                  </Field>
                  <Field label="Ville" error={errors.city?.message}>
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
                  <Field label="Adresse" error={errors.address?.message}>
                    <Input placeholder="Adresse complète" {...register("address")} />
                  </Field>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-50 text-primary">
                      <WalletCards className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">Paiement à la livraison</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Aucun paiement en ligne. Notre équipe vous contacte pour
                        confirmer, puis vous payez à la livraison.
                      </p>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-700">
                    Commande reçue. Un conseiller Breatheex vous contactera pour confirmer.
                  </div>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  onClick={() => setSubmitted(false)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Confirmer ma commande
                </Button>
              </div>
            </form>

            <aside className="rounded-[24px] bg-gradient-to-br from-navy to-blue-950 p-6 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                Résumé
              </p>
              <h3 className="mt-4 text-3xl font-extrabold">
                {selectedTitle}
              </h3>
              <p className="mt-3 leading-7 text-blue-100">
                {selectedSubtitle}
              </p>
              <div className="mt-8 space-y-4 rounded-2xl bg-white/10 p-5">
                <SummaryRow
                  label={orderType === "pack" ? "Pack" : "Produit"}
                  value={orderType === "pack" ? selectedPack.price : selectedProduct.price}
                />
                <SummaryRow label="Quantité" value={`x${quantity}`} />
                <SummaryRow label="Livraison" value="Incluse" />
                <div className="border-t border-white/15 pt-4">
                  <SummaryRow label="Total COD" value={`${total} DH`} large />
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
                Solution sans médicament. En cas de problème respiratoire important,
                demandez conseil à un professionnel de santé.
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
