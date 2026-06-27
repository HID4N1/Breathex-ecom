"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { curatedPacks, productCollections } from "@/data/commerce";

export const orderSchema = z.object({
  orderType: z.enum(["product", "pack"], {
    required_error: "Choisissez produits ou packs."
  }),
  productId: z.string().min(1, "Choisissez un produit."),
  packId: z.string().min(1, "Choisissez un pack."),
  quantity: z.coerce.number().min(1).max(10),
  fullName: z.string().min(3, "Entrez votre nom complet."),
  phone: z
    .string()
    .min(9, "Entrez un numero valide.")
    .regex(/^[0-9+\s-]+$/, "Le telephone doit contenir uniquement des chiffres."),
  city: z.string().min(2, "Choisissez votre ville."),
  address: z.string().min(8, "Entrez une adresse complete.")
});

export type OrderValues = z.infer<typeof orderSchema>;

const productOptions = productCollections.flatMap((collection) =>
  collection.products.map((product) => ({
    ...product,
    collection: collection.title,
    accent: collection.accent
  }))
);

export function useOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<OrderValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      orderType: "product",
      productId: "clear-30",
      packId: "pack-duo",
      quantity: 1,
      fullName: "",
      phone: "",
      city: "Casablanca",
      address: ""
    }
  });

  const orderType = form.watch("orderType");
  const selectedProductId = form.watch("productId");
  const selectedPackId = form.watch("packId");
  const quantity = form.watch("quantity");

  const selectedProduct =
    productOptions.find((product) => product.id === selectedProductId) ??
    productOptions[1];
  const selectedPack =
    curatedPacks.find((pack) => pack.id === selectedPackId) ?? curatedPacks[0];
  const selectedItem = orderType === "pack" ? selectedPack : selectedProduct;

  const total = useMemo(
    () => selectedItem.priceValue * Number(quantity || 1),
    [quantity, selectedItem.priceValue]
  );

  const onSubmit = form.handleSubmit(() => {
    setSubmitted(true);
    form.reset({
      orderType: "product",
      productId: "clear-30",
      packId: "pack-duo",
      quantity: 1,
      fullName: "",
      phone: "",
      city: "Casablanca",
      address: ""
    });
  });

  return {
    form,
    onSubmit,
    productOptions,
    packOptions: curatedPacks,
    selectedProduct,
    selectedPack,
    selectedItem,
    total,
    submitted,
    setSubmitted
  };
}
