"use client";

import Link from "next/link";
import { useState } from "react";

const INFO_EMAIL = "info@digentra.net";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const firstName = String(fd.get("firstName") ?? "").trim();
    const lastName = String(fd.get("lastName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const jobTitle = String(fd.get("jobTitle") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, jobTitle, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please try again or email us directly.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="flex flex-col items-center rounded-[1.35rem] border border-[var(--brand-border)] bg-white/95 p-10 text-center shadow-[0_24px_60px_-28px_rgba(26,31,28,0.28)] backdrop-blur-sm"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 text-lg font-semibold text-[var(--brand-ink)]">Message sent</p>
        <p className="mt-2 text-sm text-[var(--brand-muted)]">
          We&apos;ll respond within one business day. You can also email{" "}
          <a
            className="font-semibold text-[var(--brand-primary)] underline underline-offset-2 hover:opacity-80"
            href={`mailto:${INFO_EMAIL}`}
          >
            {INFO_EMAIL}
          </a>
        </p>
      </div>
    );
  }

  const inputClass =
    "focus-ring mt-1.5 w-full rounded-xl border border-[var(--brand-border)] bg-white px-4 py-3 text-[0.9375rem] text-[var(--brand-ink)] outline-none transition placeholder:text-neutral-400 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/12 disabled:opacity-60";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-[1.35rem] border border-[var(--brand-border)] bg-white/95 p-6 shadow-[0_24px_60px_-28px_rgba(26,31,28,0.28)] backdrop-blur-sm sm:p-8"
      noValidate
    >
      <h2 className="text-xl font-semibold tracking-tight text-[var(--brand-ink)] sm:text-[1.35rem]">
        Book your conversation
      </h2>
      <p className="mt-1.5 text-sm text-[var(--brand-muted)]">
        Tell us a little about your team — we&apos;ll follow up within one business day.
      </p>

      {errorMessage ? (
        <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--brand-ink)]">
            Business email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={status === "sending"}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-first-name" className="block text-sm font-medium text-[var(--brand-ink)]">
              First name
            </label>
            <input
              id="contact-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              disabled={status === "sending"}
              className={inputClass}
              placeholder="Jordan"
            />
          </div>
          <div>
            <label htmlFor="contact-last-name" className="block text-sm font-medium text-[var(--brand-ink)]">
              Last name
            </label>
            <input
              id="contact-last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              disabled={status === "sending"}
              className={inputClass}
              placeholder="Lee"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--brand-ink)]">
            Company name
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            disabled={status === "sending"}
            className={inputClass}
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label htmlFor="contact-job-title" className="block text-sm font-medium text-[var(--brand-ink)]">
            Job title
          </label>
          <input
            id="contact-job-title"
            name="jobTitle"
            type="text"
            autoComplete="organization-title"
            disabled={status === "sending"}
            className={inputClass}
            placeholder="Head of Product"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--brand-ink)]">
            How can we help?
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            disabled={status === "sending"}
            className={`${inputClass} resize-y`}
            placeholder="Tell us about your project, RFP, or question…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring btn-solid group mt-6 inline-flex w-full items-center justify-center gap-2 py-3.5 text-[0.9375rem] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Schedule now"}
        {status !== "sending" ? (
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-[var(--brand-muted)]">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--brand-ink)]">
          Privacy Policy
        </Link>
        . Or email{" "}
        <a href={`mailto:${INFO_EMAIL}`} className="underline underline-offset-2 hover:text-[var(--brand-ink)]">
          {INFO_EMAIL}
        </a>
        .
      </p>
    </form>
  );
}
