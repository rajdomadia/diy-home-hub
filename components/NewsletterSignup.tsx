"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden rounded-3xl bg-zinc-900 p-10 text-center md:p-14"
    >
      {/* Subtle aurora orbs */}
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-zinc-500 opacity-[0.06] blur-3xl" />

      <div className="relative">
        <h2 className="text-2xl font-light text-white md:text-3xl">
          Join 10,000+ DIY Enthusiasts
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400">
          Get weekly tips, project ideas, and step-by-step tutorials delivered
          straight to your inbox. No spam, just pure DIY inspiration.
        </p>

        {submitted ? (
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white/[0.07] p-7 backdrop-blur-sm">
            <p className="text-lg font-medium text-white">Welcome aboard!</p>
            <p className="mt-2 text-sm text-zinc-400">
              Check your inbox for a confirmation email. Your first tip is on its
              way!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-2xl border-0 bg-white/[0.07] px-5 py-3.5 text-sm text-white placeholder-zinc-500 backdrop-blur-sm transition-all focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-2xl bg-[var(--color-accent)] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--color-accent-light)]"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="mt-5 text-xs text-zinc-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
