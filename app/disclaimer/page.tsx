import { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE_NAME}. Important information about our content, safety guidelines, and limitations of liability.`,
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-stone-800">Disclaimer</h1>
      <p className="mt-2 text-sm text-stone-400">
        Last updated: January 1, 2026
      </p>

      <div className="prose mt-8 max-w-none">
        <h2>General Information</h2>
        <p>
          The information provided on <strong>{SITE_NAME}</strong> is for
          general informational and educational purposes only. All content,
          including articles, tutorials, guides, tips, and recommendations, is
          published in good faith and is intended to help readers with their
          DIY projects.
        </p>

        <h2>Not Professional Advice</h2>
        <p>
          The content on this website does not constitute professional advice.
          While we strive to provide accurate and up-to-date information, we
          are not licensed contractors, electricians, plumbers, or certified
          professionals in any trade. For projects that involve electrical
          work, plumbing, structural modifications, or other specialized tasks,
          we strongly recommend consulting with a licensed professional.
        </p>

        <h2>Safety</h2>
        <p>
          DIY projects involve inherent risks. Always exercise caution and use
          appropriate safety equipment when undertaking any project described on
          this website. This includes but is not limited to:
        </p>
        <ul>
          <li>Wearing appropriate personal protective equipment (PPE)</li>
          <li>Following manufacturer instructions for all tools and materials</li>
          <li>Checking local building codes and regulations before starting projects</li>
          <li>Working in well-ventilated areas when using chemicals or adhesives</li>
          <li>Using proper lifting techniques and seeking help for heavy items</li>
        </ul>

        <h2>Accuracy of Information</h2>
        <p>
          We make every effort to ensure the accuracy of the information
          presented on our website. However, we make no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability of the
          information, products, services, or related graphics contained on
          the website. Measurements, material quantities, and specifications
          may vary based on your specific circumstances.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall {SITE_NAME}, its authors, or its contributors be
          liable for any loss or damage including without limitation, indirect
          or consequential loss or damage, or any loss or damage whatsoever
          arising from the use of information provided on this website. You
          undertake all projects at your own risk.
        </p>

        <h2>Affiliate Links and Advertising</h2>
        <p>
          Some articles on this website may contain affiliate links to products
          and services. If you click on these links and make a purchase, we may
          earn a small commission at no additional cost to you. This helps
          support the website and allows us to continue creating free content.
          Our editorial content is not influenced by affiliate partnerships,
          and we only recommend products that we genuinely believe will be
          helpful to our readers.
        </p>

        <h2>Third-Party Content</h2>
        <p>
          This website may include links to external websites and resources. We
          do not control and are not responsible for the content, privacy
          policies, or practices of any third-party websites. Including a link
          does not imply endorsement of the linked site.
        </p>

        <h2>Changes to This Disclaimer</h2>
        <p>
          We reserve the right to update or change this disclaimer at any time.
          Any changes will be posted on this page with an updated revision
          date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this disclaimer, please{" "}
          <a href="/contact">contact us</a>.
        </p>
      </div>
    </div>
  );
}
