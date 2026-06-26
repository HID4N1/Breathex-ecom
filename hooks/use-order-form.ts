"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { packs } from "@/data/site";

export const orderSchema = z.object({
  product: z.enum(["clear", "tan"], {
    required_error: "Choisissez une finition."
  }),
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

export function useOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<OrderValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      product: "clear",
      packId: "duo",
      quantity: 1,
      fullName: "",
      phone: "",
      city: "Casablanca",
      address: ""
    }
  });

  const selectedPackId = form.watch("packId");
  const quantity = form.watch("quantity");
  const selectedPack = packs.find((pack) => pack.id === selectedPackId) ?? packs[1];
  const total = useMemo(
    () => selectedPack.price * Number(quantity || 1),
    [quantity, selectedPack.price]
  );

  const onSubmit = form.handleSubmit(() => {
    setSubmitted(true);
    form.reset({
      product: "clear",
      packId: "duo",
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
    selectedPack,
    total,
    submitted,
    setSubmitted
  };
}
