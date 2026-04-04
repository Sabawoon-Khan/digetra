"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        className="flex flex-col items-center rounded-lg border border-neutral-200 bg-white p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-neutral-950 bg-neutral-950 text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 text-lg font-bold text-neutral-950">Message sent</p>
        <p className="mt-2 text-sm text-neutral-600">
          We&apos;ll respond within one business day. You can also email{" "}
          <a className="font-semibold text-neutral-950 underline underline-offset-2 hover:text-neutral-600" href="mailto:hello@digetra.com">
            hello@digetra.com
          </a>
        </p>
      </div>
    );
  }

  const inputClass =
    "focus-ring mt-1.5 w-full rounded-md border border-neutral-200 bg-white px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-950/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-700">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-700">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-700">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your project or question…"
        />
      </div>
      <button
        type="submit"
        className="focus-ring btn-primary w-full rounded-md py-3.5 text-[0.9375rem] font-semibold transition sm:w-auto sm:px-10"
      >
        Send message
      </button>
    </form>
  );
}
