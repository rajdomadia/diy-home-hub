"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-zinc-100 bg-white p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <svg className="h-7 w-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-lg font-medium text-zinc-800">Message Sent</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Thank you for reaching out. We will get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-light)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-600">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-zinc-100 bg-white px-5 py-3.5 text-sm text-zinc-800 transition-all duration-300 focus:border-[var(--color-accent)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-600">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full rounded-2xl border border-zinc-100 bg-white px-5 py-3.5 text-sm text-zinc-800 transition-all duration-300 focus:border-[var(--color-accent)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-600">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="mt-2 w-full rounded-2xl border border-zinc-100 bg-white px-5 py-3.5 text-sm text-zinc-800 transition-all duration-300 focus:border-[var(--color-accent)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
        >
          <option value="general">General Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="collaboration">Collaboration</option>
          <option value="correction">Article Correction</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-zinc-100 bg-white px-5 py-3.5 text-sm text-zinc-800 transition-all duration-300 focus:border-[var(--color-accent)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15"
          placeholder="How can we help you?"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-2xl bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/10 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
