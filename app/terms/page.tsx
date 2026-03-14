import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}. Please read these terms carefully before using our website.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-stone-800">Terms of Service</h1>
      <p className="mt-2 text-sm text-stone-400">
        Last updated: January 1, 2026
      </p>

      <div className="prose mt-8 max-w-none">
        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using <strong>{SITE_NAME}</strong> ({SITE_URL}),
          you agree to be bound by these Terms of Service. If you do not agree
          with any part of these terms, you should not use our website.
        </p>

        <h2>Use of Our Website</h2>
        <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
        <ul>
          <li>Infringe the rights of, restrict, or inhibit anyone else&apos;s use of the website</li>
          <li>Violate any applicable local, state, national, or international law</li>
          <li>Transmit any harmful, threatening, abusive, or otherwise objectionable material</li>
          <li>Attempt to interfere with the proper functioning of the website</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text,
          graphics, logos, images, and the compilation thereof, is the property
          of {SITE_NAME} and is protected by copyright and intellectual
          property laws. You may not reproduce, distribute, modify, or create
          derivative works from any content without our prior written consent.
        </p>
        <p>
          You are welcome to share links to our articles and reference our
          content with proper attribution.
        </p>

        <h2>User-Submitted Content</h2>
        <p>
          When you submit content through our contact form, comments, or
          newsletter subscription, you grant us the right to use your
          submission in connection with the operation of our website. You
          represent that you own or have the necessary permissions for any
          content you submit.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Our website and its content are provided on an &quot;as is&quot; and
          &quot;as available&quot; basis. We make no warranties, expressed or
          implied, regarding the operation of the website or the information,
          content, or materials included on the website. To the full extent
          permissible by law, we disclaim all warranties, expressed or implied.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          {SITE_NAME} shall not be liable for any damages of any kind arising
          from the use of this website, including but not limited to direct,
          indirect, incidental, punitive, and consequential damages. This
          includes damages arising from the use or attempted use of any DIY
          instructions, techniques, or recommendations found on this website.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. These links
          are provided for your convenience only. We have no control over the
          content of those sites and accept no responsibility for them or for
          any loss or damage that may arise from your use of them.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time.
          Changes will be effective immediately upon posting on this page. Your
          continued use of the website after any changes constitutes acceptance
          of the new terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service are governed by and construed in accordance
          with applicable laws, without regard to conflict of law principles.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please{" "}
          <a href="/contact">contact us</a>.
        </p>
      </div>
    </div>
  );
}
