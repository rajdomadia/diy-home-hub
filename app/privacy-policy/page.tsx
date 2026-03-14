import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-stone-800">Privacy Policy</h1>
      <p className="mt-2 text-sm text-stone-400">
        Last updated: January 1, 2026
      </p>

      <div className="prose mt-8 max-w-none">
        <p>
          At <strong>{SITE_NAME}</strong> (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), accessible from{" "}
          <a href={SITE_URL}>{SITE_URL}</a>, we are committed to protecting
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>
          We may collect personally identifiable information that you
          voluntarily provide to us when you subscribe to our newsletter, fill
          out a contact form, or interact with our website. This may include:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Any information you include in messages sent through our contact form</li>
        </ul>

        <h3>Automatically Collected Data</h3>
        <p>
          When you visit our website, we may automatically collect certain
          information about your device, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages viewed and time spent on pages</li>
          <li>Date and time of your visit</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate and maintain our website</li>
          <li>Improve and personalize your experience</li>
          <li>Send you newsletters and updates (if you have subscribed)</li>
          <li>Respond to your inquiries and requests</li>
          <li>Analyze website usage to improve our content</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to
          enhance your browsing experience. Cookies are small data files stored
          on your device. You can control cookie preferences through your
          browser settings.
        </p>
        <p>We use the following types of cookies:</p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for the website to
            function properly.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            interact with our website.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used by our advertising
            partners (such as Google AdSense) to display relevant ads.
          </li>
        </ul>

        <h2>Third-Party Advertising</h2>
        <p>
          We may use third-party advertising companies, including Google
          AdSense, to serve ads on our website. These companies may use cookies
          and web beacons to collect information (not including your name,
          address, email address, or telephone number) about your visits to
          this and other websites in order to provide advertisements about
          goods and services of interest to you.
        </p>
        <p>
          Google, as a third-party vendor, uses cookies to serve ads on our
          site. Google&apos;s use of the DART cookie enables it to serve ads
          based on your visit to our sites and other sites on the Internet.
          You may opt out of the use of the DART cookie by visiting the Google
          Ad and Content Network Privacy Policy.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these sites. We
          encourage you to read the privacy policies of any linked websites.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information. However, no method of transmission
          over the Internet or electronic storage is completely secure, and we
          cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website is not directed to children under the age of 13. We do
          not knowingly collect personal information from children under 13. If
          you believe we have collected information from a child under 13,
          please contact us immediately.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Last updated&quot; date. You are advised to review
          this Privacy Policy periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please{" "}
          <a href="/contact">contact us</a>.
        </p>
      </div>
    </div>
  );
}
