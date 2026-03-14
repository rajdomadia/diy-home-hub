import { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_NAME} — our mission, team, and passion for empowering DIY enthusiasts with expert guides and tutorials.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Our story
        </p>
        <h1 className="mt-3 text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl">
          About {SITE_NAME}
        </h1>
      </div>

      <div className="prose max-w-none">
        <p>
          Welcome to <strong>{SITE_NAME}</strong> — your go-to destination for
          practical, hands-on DIY knowledge. We are a team of passionate home
          improvement enthusiasts, craft lovers, and gardening experts dedicated
          to helping you tackle projects with confidence.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe that everyone has the ability to transform their living
          space, create beautiful handmade items, and grow thriving gardens.
          Our mission is to provide clear, detailed, and beginner-friendly
          guides that break down complex projects into manageable steps. Whether
          you are picking up a hammer for the first time or looking for advanced
          woodworking techniques, we have something for you.
        </p>

        <h2>What We Cover</h2>
        <p>
          {SITE_NAME} focuses on three core areas to help you improve your home
          and lifestyle:
        </p>
        <ul>
          <li>
            <strong>Home Projects:</strong> From building custom furniture to
            installing fixtures, our home improvement guides walk you through
            every step with detailed instructions, materials lists, and expert
            tips.
          </li>
          <li>
            <strong>Crafts:</strong> Discover your creative side with tutorials
            on macrame, candle making, resin art, woodworking, fabric dyeing,
            and much more. Each guide includes supply lists and clear
            instructions for all skill levels.
          </li>
          <li>
            <strong>Gardening:</strong> Whether you have a sprawling backyard or
            a tiny balcony, our gardening guides cover everything from raised
            bed construction to composting, indoor herb growing, and seasonal
            maintenance.
          </li>
        </ul>

        <h2>Our Team</h2>
        <p>
          Our content is created by a dedicated team of writers and DIY
          practitioners with years of hands-on experience. Every article is
          thoroughly researched, tested, and reviewed to ensure accuracy and
          practicality. We do not publish theoretical guides — our team actually
          completes each project before writing about it.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Accuracy:</strong> Every measurement, material, and
            instruction is verified through real-world testing.
          </li>
          <li>
            <strong>Accessibility:</strong> We write for all skill levels, from
            complete beginners to experienced DIYers.
          </li>
          <li>
            <strong>Sustainability:</strong> We prioritize eco-friendly
            materials and methods whenever possible.
          </li>
          <li>
            <strong>Community:</strong> We encourage readers to share their
            results, ask questions, and help fellow DIY enthusiasts.
          </li>
        </ul>

        <h2>Get in Touch</h2>
        <p>
          Have a question, suggestion, or want to share your completed project?
          We would love to hear from you! Visit our{" "}
          <a href="/contact">Contact page</a> to reach out. You can also
          subscribe to our newsletter to get the latest project ideas delivered
          to your inbox.
        </p>
      </div>
    </div>
  );
}
