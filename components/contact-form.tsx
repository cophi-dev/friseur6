"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { sendErrorMessage } from "@/lib/kontakt";

type Fields = {
  name: string;
  firma: string;
  telefon: string;
  email: string;
  nachricht: string;
  datenschutz: boolean;
};

const initialFields: Fields = {
  name: "",
  firma: "",
  telefon: "",
  email: "",
  nachricht: "",
  datenschutz: false,
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFormError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Partial<Record<string, string[] | undefined>>;
      };

      if (!response.ok || !data.ok) {
        const nextErrors: FieldErrors = {};
        if (data.fieldErrors) {
          for (const [key, messages] of Object.entries(data.fieldErrors)) {
            const message = messages?.[0];
            if (message) {
              nextErrors[key as keyof Fields] = message;
            }
          }
        }
        setFieldErrors(nextErrors);
        setFormError(data.message || sendErrorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setFormError(sendErrorMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-dashed border-cognac bg-foam px-5 py-10 sm:px-8">
        <p className="font-serif text-xl leading-snug text-ink sm:text-2xl">
          Vielen Dank — Ihre Nachricht wurde gesendet.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Sie erreichen mich unter{" "}
          <a href={`tel:${site.phoneTel}`} className="text-ink underline decoration-line underline-offset-4">
            {site.phoneDisplay}
          </a>{" "}
          und{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline decoration-line underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field
        id="name"
        label="Name"
        value={fields.name}
        error={fieldErrors.name}
        autoComplete="name"
        onChange={(value) => update("name", value)}
        required
      />
      <Field
        id="firma"
        label="Salon / Firma"
        hint="freiwillig"
        value={fields.firma}
        error={fieldErrors.firma}
        autoComplete="organization"
        onChange={(value) => update("firma", value)}
      />
      <Field
        id="telefon"
        label="Telefon"
        hint="freiwillig"
        type="tel"
        value={fields.telefon}
        error={fieldErrors.telefon}
        autoComplete="tel"
        onChange={(value) => update("telefon", value)}
      />
      <Field
        id="email"
        label="E-Mail"
        type="email"
        value={fields.email}
        error={fieldErrors.email}
        autoComplete="email"
        onChange={(value) => update("email", value)}
        required
      />
      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-ink">
          Nachricht
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={6}
          value={fields.nachricht}
          aria-invalid={fieldErrors.nachricht ? true : undefined}
          aria-describedby={fieldErrors.nachricht ? "nachricht-error" : undefined}
          onChange={(event) => update("nachricht", event.target.value)}
          className="mt-2 w-full border border-line bg-foam px-3 py-3 text-base text-ink"
        />
        {fieldErrors.nachricht ? (
          <p id="nachricht-error" className="mt-2 text-sm text-cognac-deep">
            {fieldErrors.nachricht}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="datenschutz" className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <input
            id="datenschutz"
            name="datenschutz"
            type="checkbox"
            required
            checked={fields.datenschutz}
            aria-invalid={fieldErrors.datenschutz ? true : undefined}
            aria-describedby={fieldErrors.datenschutz ? "datenschutz-error" : undefined}
            onChange={(event) => update("datenschutz", event.target.checked)}
            className="mt-1 h-4 w-4 accent-cognac"
          />
          <span>
            Ich habe die{" "}
            <a href="/datenschutz" className="text-ink underline decoration-line underline-offset-4">
              Datenschutzerklärung
            </a>{" "}
            gelesen und bin einverstanden, dass meine Angaben zur Beantwortung der Anfrage verarbeitet werden.
          </span>
        </label>
        {fieldErrors.datenschutz ? (
          <p id="datenschutz-error" className="mt-2 text-sm text-cognac-deep">
            {fieldErrors.datenschutz}
          </p>
        ) : null}
      </div>
      {formError ? (
        <p role="status" aria-live="polite" className="text-sm leading-relaxed text-cognac-deep">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-cognac px-5 py-3 text-base font-medium text-foam hover:bg-cognac-deep disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  required = false,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {hint ? <span className="font-normal text-ink-soft"> ({hint})</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-line bg-foam px-3 py-3 text-base text-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-cognac-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
