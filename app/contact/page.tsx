import { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${SITE_NAME} team. We welcome questions, feedback, and collaboration inquiries.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Get in touch
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-zinc-400">
          Have a question, feedback, or a project idea to share? We would love to
          hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-zinc-100 bg-white p-7">
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">
              Other Ways to Reach Us
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-600">Email</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  hello@diyhomehub.app
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-600">
                  Response Time
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  We typically respond within 24-48 hours on business days.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-white p-7">
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">
              Content Suggestions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Have an idea for a project or article you would like us to cover?
              We welcome suggestions from our readers. Let us know what DIY
              topics interest you and we will consider them for future content.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-white p-7">
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">
              Report an Issue
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Found an error in one of our guides? Let us know so we can correct
              it and keep our content accurate for all readers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
