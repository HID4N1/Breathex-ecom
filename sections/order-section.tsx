"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Home,
  MapPin,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  UserRound
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { curatedPacks, productCollections } from "@/data/commerce";
import { cities } from "@/data/site";
import { cn } from "@/lib/utils";
import type { CuratedPack, ProductCard } from "@/types/product";

type ShopItemType = "product" | "pack";

type ShopItem = {
  id: string;
  type: ShopItemType;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  accent: string;
  badge: string;
  availability: string;
  delivery: string;
  savings?: number;
  quantityLabel: string;
  includes?: string[];
  packProducts?: CuratedPack["products"];
};

type CartMap = Record<string, number>;

type CheckoutValues = {
  fullName: string;
  phone: string;
  city: string;
  address: string;
};

const defaultCheckoutValues: CheckoutValues = {
  fullName: "",
  phone: "",
  city: "Casablanca",
  address: ""
};

const trustRows = [
  "Paiement à la livraison",
  "Livraison 48-72h",
  "Livraison gratuite",
  "Support client",
  "Satisfaction garantie"
];

const shopItems: ShopItem[] = [
  ...productCollections.flatMap((collection) =>
    collection.products.map((product) =>
      productToShopItem(product, collection.title, collection.accent)
    )
  ),
  ...curatedPacks.map(packToShopItem)
];

export function OrderSection() {
  const [cart, setCart] = useState<CartMap>({});
  const [checkoutValues, setCheckoutValues] = useState(defaultCheckoutValues);
  const [submitted, setSubmitted] = useState(false);

  const cartItems = useMemo(
    () =>
      shopItems
        .map((item) => ({
          ...item,
          quantity: cart[item.id] ?? 0,
          subtotal: item.priceValue * (cart[item.id] ?? 0)
        }))
        .filter((item) => item.quantity > 0),
    [cart]
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const savings = cartItems.reduce(
    (sum, item) => sum + (item.savings ?? 0) * item.quantity,
    0
  );
  const total = subtotal;

  const updateQuantity = (id: string, nextQuantity: number) => {
    setSubmitted(false);
    setCart((current) => {
      const quantity = Math.max(0, Math.min(10, nextQuantity));
      const next = { ...current };

      if (quantity === 0) {
        delete next[id];
      } else {
        next[id] = quantity;
      }

      return next;
    });
  };

  const handleCheckoutChange = (
    key: keyof CheckoutValues,
    value: string
  ) => {
    setSubmitted(false);
    setCheckoutValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (cartCount === 0) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="order"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_48%,#ffffff_100%)] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-16 h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-[#25D8FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-28 h-80 w-80 rounded-full bg-[#25D8FF]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[42%] h-96 w-96 rounded-full bg-primary/8 blur-3xl" />

      <div className="section-shell relative">
        <Reveal>
          <SectionHeading
            eyebrow="Commander"
            title="Ajoutez, vérifiez, commandez."
            description="Une expérience panier rapide: choisissez vos produits, ajustez les quantités et voyez votre total se mettre à jour instantanément."
          />
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(340px,0.3fr)]"
          >
            <div className="min-w-0">
              <ProductCarousel
                items={shopItems}
                cart={cart}
                onQuantityChange={updateQuantity}
              />
            </div>

            <CartSummary
              cartItems={cartItems}
              cartCount={cartCount}
              subtotal={subtotal}
              savings={savings}
              total={total}
              checkoutValues={checkoutValues}
              submitted={submitted}
              onCheckoutChange={handleCheckoutChange}
              onQuantityChange={updateQuantity}
            />
          </form>
        </Reveal>
      </div>

      <MobileCheckoutBar cartCount={cartCount} total={total} />
    </section>
  );
}

function ProductCarousel({
  items,
  cart,
  onQuantityChange
}: {
  items: ShopItem[];
  cart: CartMap;
  onQuantityChange: (id: string, quantity: number) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    cardRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1
    );
  };

  const handleCarouselScroll = () => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const viewportCenter =
      viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
    let nearestIndex = activeIndex;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(viewportCenter - cardCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    if (nearestIndex !== activeIndex) {
      setActiveIndex(nearestIndex);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-blue-100/90 bg-white/76 py-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
            Sélection rapide
          </p>
          <h4 className="mt-1 text-xl font-extrabold tracking-normal text-navy">
            Faites défiler, le choix actif reste au centre
          </h4>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Produit précédent"
            className="grid h-11 w-11 place-items-center rounded-full border border-blue-100 bg-white text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Produit suivant"
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        onScroll={handleCarouselScroll}
        className="mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[calc(50%_-_min(37vw,140px))] py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="w-[min(74vw,280px)] shrink-0 snap-center"
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <ProductCard
              item={item}
              quantity={cart[item.id] ?? 0}
              active={index === activeIndex}
              onQuantityChange={(nextQuantity) =>
                onQuantityChange(item.id, nextQuantity)
              }
            />
          </div>
        ))}
      </div>

      <div className="mt-1 flex justify-center gap-2 px-4">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Voir ${item.title}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2.5 bg-blue-100 hover:bg-blue-200"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function productToShopItem(
  product: ProductCard,
  collection: "CLEAR" | "TAN",
  accent: string
): ShopItem {
  const isBestSeller = product.badge?.toLowerCase().includes("populaire");
  const isValue = product.label?.toLowerCase().includes("rapport");

  return {
    id: product.id,
    type: "product",
    title: product.name,
    subtitle: `${collection} • ${product.quantity}`,
    description: product.description,
    price: product.price,
    priceValue: product.priceValue,
    image: product.image,
    accent,
    badge: isBestSeller ? "Best Seller" : isValue ? "Value" : "En stock",
    availability: "En stock",
    delivery: "Livraison estimée 48-72h",
    quantityLabel: collection
  };
}

function packToShopItem(pack: CuratedPack): ShopItem {
  const regularValue = pack.id === "pack-duo" ? 318 : pack.priceValue + 39;
  const savings = Math.max(0, regularValue - pack.priceValue);

  return {
    id: pack.id,
    type: "pack",
    title: pack.title,
    subtitle: pack.includes.join(" • "),
    description: pack.description,
    price: pack.price,
    priceValue: pack.priceValue,
    image: pack.products[0]?.image ?? "/images/breathe-right-clear-small-medium-30.jpg",
    accent: pack.accent,
    badge: pack.id === "pack-duo" ? "Popular" : "Pack",
    availability: "En stock",
    delivery: "Livraison estimée 48-72h",
    savings,
    quantityLabel: pack.title.replace("Pack ", ""),
    includes: pack.includes,
    packProducts: pack.products
  };
}

function ProductCard({
  item,
  quantity,
  active,
  onQuantityChange
}: {
  item: ShopItem;
  quantity: number;
  active: boolean;
  onQuantityChange: (quantity: number) => void;
}) {
  const isAdded = quantity > 0;

  return (
    <motion.article
      layout
      animate={{ scale: active ? 1 : 0.94, opacity: active ? 1 : 0.72 }}
      whileHover={{ y: -4, opacity: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      className={cn(
        "group relative flex min-h-[360px] flex-col overflow-hidden rounded-[22px] border bg-white p-4 shadow-[0_18px_54px_rgba(15,23,42,0.07)] transition-all duration-300",
        isAdded
          ? "border-primary/80 shadow-[0_24px_70px_rgba(37,99,235,0.16)] ring-4 ring-blue-100/80"
          : active
            ? "border-primary/55 shadow-[0_24px_72px_rgba(37,99,235,0.12)]"
            : "border-blue-100 hover:border-primary/55 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
      )}
    >
      <AnimatePresence>
        {isAdded ? (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-primary text-white shadow-soft"
            aria-hidden="true"
          >
            <Check className="h-5 w-5" />
          </motion.span>
        ) : null}
      </AnimatePresence>

      <div className="relative h-[170px] rounded-[18px] bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)]">
        <div
          className="absolute left-1/2 top-12 h-28 w-44 -translate-x-1/2 rounded-full opacity-30 blur-2xl"
          style={{ backgroundColor: item.accent }}
        />
        {item.packProducts ? (
          <PackVisual products={item.packProducts} />
        ) : (
          <Image
            src={item.image}
            alt={`${item.title} box`}
            fill
            sizes="(min-width: 1280px) 260px, (min-width: 768px) 45vw, 90vw"
            className="object-contain p-5 drop-shadow-[0_22px_26px_rgba(15,23,42,0.20)] transition duration-300 group-hover:scale-[1.04]"
          />
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h4 className="line-clamp-2 min-h-[56px] text-xl font-extrabold tracking-normal text-navy">
          {item.title}
        </h4>
        <p className="mt-2 text-3xl font-extrabold tracking-normal text-primary">
          {item.price}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-3">
            <QuantitySelector
              value={quantity}
              onChange={onQuantityChange}
              ariaLabel={`${item.title} quantity`}
            />
            <button
              type="button"
              onClick={() => onQuantityChange(quantity > 0 ? quantity : 1)}
              aria-label={
                isAdded ? `${item.title} déjà ajouté` : `Ajouter ${item.title} au panier`
              }
              className={cn(
                "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition duration-300",
                isAdded
                  ? "bg-blue-50 text-primary hover:bg-blue-100"
                  : "bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-blue-700"
              )}
            >
              {isAdded ? (
                <Check className="h-5 w-5" />
              ) : (
                <ShoppingCart className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function QuantitySelector({
  value,
  onChange,
  ariaLabel
}: {
  value: number;
  onChange: (value: number) => void;
  ariaLabel: string;
}) {
  return (
    <div
      className="inline-flex h-12 shrink-0 items-center rounded-full border border-blue-100 bg-white p-1 shadow-sm"
      aria-label={ariaLabel}
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(value - 1)}
        disabled={value === 0}
        aria-label="Diminuer la quantité"
        className="grid h-10 w-10 place-items-center rounded-full text-navy transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
      >
        <Minus className="h-4 w-4" />
      </motion.button>
      <motion.span
        key={value}
        initial={{ scale: 0.82, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-10 text-center text-lg font-extrabold text-navy"
        aria-live="polite"
      >
        {value}
      </motion.span>
      <motion.button
        type="button"
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(value + 1)}
        aria-label="Augmenter la quantité"
        className="grid h-10 w-10 place-items-center rounded-full text-navy transition hover:bg-blue-50"
      >
        <Plus className="h-4 w-4" />
      </motion.button>
    </div>
  );
}

function CartSummary({
  cartItems,
  cartCount,
  subtotal,
  savings,
  total,
  checkoutValues,
  submitted,
  onCheckoutChange,
  onQuantityChange
}: {
  cartItems: Array<ShopItem & { quantity: number; subtotal: number }>;
  cartCount: number;
  subtotal: number;
  savings: number;
  total: number;
  checkoutValues: CheckoutValues;
  submitted: boolean;
  onCheckoutChange: (key: keyof CheckoutValues, value: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}) {
  return (
    <aside id="cart-summary" className="lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br from-[#061226] via-[#0A1C3C] to-[#123B78] text-white shadow-[0_30px_100px_rgba(6,18,38,0.28)]">
        <div className="relative p-5 sm:p-6">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#25D8FF]/20 blur-3xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/10">
                <ShoppingBag className="h-5 w-5 text-[#25D8FF]" />
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-[#25D8FF] px-1 text-xs font-extrabold text-navy"
                >
                  {cartCount}
                </motion.span>
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">
                  Votre commande
                </p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-normal">
                  {cartCount > 0
                    ? `Votre commande (${cartCount} article${cartCount > 1 ? "s" : ""})`
                    : "Votre commande"}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <AnimatePresence mode="popLayout">
              {cartItems.length > 0 ? (
                <motion.div layout className="space-y-3">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={(quantity) =>
                        onQuantityChange(item.id, quantity)
                      }
                    />
                  ))}
                </motion.div>
              ) : (
                <EmptyCartState />
              )}
            </AnimatePresence>
          </div>

          <PriceBreakdown
            subtotal={subtotal}
            savings={savings}
            total={total}
          />

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
            <Label className="text-white">Code promo</Label>
            <div className="mt-2 grid grid-cols-[1fr_auto] gap-2">
              <Input
                disabled
                placeholder="Bientôt disponible"
                className="border-white/10 bg-white/10 text-white placeholder:text-blue-100/70 disabled:opacity-70"
              />
              <Button
                type="button"
                disabled
                variant="outline"
                className="h-12 border-white/15 bg-white/10 px-4 text-white"
              >
                Appliquer
              </Button>
            </div>
          </div>

          <CheckoutFields
            values={checkoutValues}
            onChange={onCheckoutChange}
          />

          {submitted ? (
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-4 rounded-2xl border border-green-300/30 bg-green-400/15 p-4 text-sm font-bold text-green-50"
            >
              Commande reçue. Un conseiller Breatheex vous contactera pour confirmer.
            </motion.div>
          ) : null}

          <CheckoutButton disabled={cartCount === 0} />

          <div className="mt-5 grid gap-2">
            {trustRows.map((row) => (
              <div key={row} className="flex items-center gap-2 text-sm text-blue-50">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#25D8FF]" />
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function CartItem({
  item,
  onQuantityChange
}: {
  item: ShopItem & { quantity: number; subtotal: number };
  onQuantityChange: (quantity: number) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 18, scale: 0.96 }}
      className="rounded-2xl border border-white/10 bg-white/10 p-3"
    >
      <div className="flex gap-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white">
          <Image
            src={item.image}
            alt={`${item.title} thumbnail`}
            fill
            sizes="64px"
            className="object-contain p-2"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="truncate font-extrabold text-white">
                {item.quantityLabel} ×{item.quantity}
              </p>
              <p className="mt-1 truncate text-xs text-blue-100">{item.title}</p>
            </div>
            <button
              type="button"
              onClick={() => onQuantityChange(0)}
              aria-label={`Retirer ${item.title}`}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-blue-100 transition hover:bg-white/10 hover:text-white"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <QuantitySelector
              value={item.quantity}
              onChange={onQuantityChange}
              ariaLabel={`${item.title} cart quantity`}
            />
            <div className="text-right">
              <p className="text-xs text-blue-100">
                {item.priceValue} DH × {item.quantity}
              </p>
              <motion.p
                key={item.subtotal}
                initial={{ opacity: 0.5, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-extrabold text-white"
              >
                {item.subtotal} DH
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PriceBreakdown({
  subtotal,
  savings,
  total
}: {
  subtotal: number;
  savings: number;
  total: number;
}) {
  return (
    <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-white/10 p-4">
      <SummaryRow label="Sous-total" value={`${subtotal} DH`} />
      <SummaryRow label="Livraison" value="Gratuite" />
      <SummaryRow
        label="Remise"
        value={savings > 0 ? `-${savings} DH` : "Aucune"}
      />
      <div className="border-t border-white/15 pt-4">
        <SummaryRow label="Total TTC" value={`${total} DH`} large />
      </div>
    </div>
  );
}

function CheckoutButton({ disabled }: { disabled: boolean }) {
  return (
    <Button
      type="submit"
      size="lg"
      disabled={disabled}
      className="mt-5 h-14 w-full rounded-2xl bg-gradient-to-r from-primary to-[#25D8FF] text-base font-extrabold shadow-[0_18px_48px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:from-blue-700 hover:to-[#17C8EF]"
    >
      Passer la commande
      <ArrowRight className="h-5 w-5" />
    </Button>
  );
}

function CheckoutFields({
  values,
  onChange
}: {
  values: CheckoutValues;
  onChange: (key: keyof CheckoutValues, value: string) => void;
}) {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
      <p className="text-sm font-extrabold text-white">Coordonnées</p>
      <div className="mt-4 grid gap-3">
        <CheckoutField label="Nom complet" icon={<UserRound className="h-4 w-4" />}>
          <Input
            required
            value={values.fullName}
            onChange={(event) => onChange("fullName", event.target.value)}
            placeholder="Votre nom complet"
            className="border-white/10 bg-white text-navy"
          />
        </CheckoutField>
        <CheckoutField label="Téléphone" icon={<Phone className="h-4 w-4" />}>
          <Input
            required
            value={values.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            placeholder="06 00 00 00 00"
            className="border-white/10 bg-white text-navy"
          />
        </CheckoutField>
        <CheckoutField label="Ville" icon={<MapPin className="h-4 w-4" />}>
          <select
            required
            value={values.city}
            onChange={(event) => onChange("city", event.target.value)}
            className="h-12 w-full rounded-xl border border-white/10 bg-white px-4 text-sm text-navy shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </CheckoutField>
        <CheckoutField label="Adresse" icon={<Home className="h-4 w-4" />}>
          <Input
            required
            value={values.address}
            onChange={(event) => onChange("address", event.target.value)}
            placeholder="Adresse complète"
            className="border-white/10 bg-white text-navy"
          />
        </CheckoutField>
      </div>
    </div>
  );
}

function CheckoutField({
  label,
  icon,
  children
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-2 inline-flex items-center gap-2 text-blue-50">
        <span className="text-[#25D8FF]">{icon}</span>
        {label}
      </Label>
      {children}
    </div>
  );
}

function EmptyCartState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center"
    >
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/10 text-[#25D8FF]">
        <ShoppingBag className="h-7 w-7" />
      </span>
      <p className="mt-4 text-lg font-extrabold text-white">
        Votre panier est vide.
      </p>
      <p className="mt-2 text-sm leading-6 text-blue-100">
        Ajoutez des produits pour commencer votre commande.
      </p>
    </motion.div>
  );
}

function PackVisual({ products }: { products: CuratedPack["products"] }) {
  return (
    <div className="absolute inset-0">
      {products.slice(0, 3).map((product, index) => (
        <div
          key={`${product.image}-${index}`}
          className={cn(
            "absolute top-1/2 h-[150px] w-[104px] -translate-y-1/2",
            index === 0 && "left-[18%] -rotate-6",
            index === 1 && "left-1/2 z-10 -translate-x-1/2 rotate-3",
            index === 2 && "right-[18%] rotate-6"
          )}
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="120px"
            className="object-contain drop-shadow-[0_20px_24px_rgba(15,23,42,0.22)]"
          />
        </div>
      ))}
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
      <motion.span
        key={`${label}-${value}`}
        initial={{ opacity: 0.55, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "text-right font-semibold text-white",
          large && "text-3xl font-extrabold"
        )}
      >
        {value}
      </motion.span>
    </div>
  );
}

function MobileCheckoutBar({
  cartCount,
  total
}: {
  cartCount: number;
  total: number;
}) {
  if (cartCount === 0) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-[74px] z-40 border-t border-blue-100 bg-white/94 p-3 shadow-[0_-18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden">
      <a
        href="#cart-summary"
        className="flex h-14 items-center justify-between rounded-2xl bg-gradient-to-r from-primary to-[#25D8FF] px-5 text-white shadow-soft"
      >
        <span className="inline-flex items-center gap-2 text-sm font-extrabold">
          <ShoppingCart className="h-5 w-5" />
          Panier ({cartCount})
        </span>
        <span className="inline-flex items-center gap-2 text-base font-extrabold">
          {total} DH
          <ArrowRight className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}
