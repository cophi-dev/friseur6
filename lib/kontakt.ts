import { z } from "zod";

export const kontaktSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte den Namen angeben.")
    .max(120, "Der Name ist zu lang."),
  firma: z.string().trim().max(160, "Der Name des Salons ist zu lang.").optional().default(""),
  telefon: z.string().trim().max(40, "Die Telefonnummer ist zu lang.").optional().default(""),
  email: z
    .string()
    .trim()
    .min(1, "Bitte eine E-Mail angeben.")
    .email("Bitte eine gültige E-Mail angeben.")
    .max(200, "Die E-Mail ist zu lang."),
  nachricht: z
    .string()
    .trim()
    .min(10, "Bitte kurz beschreiben, worum es geht.")
    .max(5000, "Die Nachricht ist zu lang."),
  datenschutz: z.boolean().refine((value) => value, "Bitte die Datenschutzerklärung bestätigen."),
});

export type KontaktInput = z.infer<typeof kontaktSchema>;

export const sendErrorMessage =
  "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie an.";
