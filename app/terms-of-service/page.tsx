import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NomoExam",
  description: "Read the terms of service for NomoExam, an AI-powered exam preparation platform for SAT, ACT, GRE, GMAT, MCAT, LSAT, and JEE.",
  alternates: { canonical: "https://nomoexam.com/terms-of-service" },
  openGraph: {
    title: "Terms of Service | NomoExam",
    description: "Terms and conditions for using NomoExam exam preparation platform.",
    url: "https://nomoexam.com/terms-of-service",
    siteName: "NomoExam",
    type: "website",
    images: [{ url: "https://nomoexam.com/og-image.svg", width: 1200, height: 630, alt: "NomoExam Terms" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | NomoExam",
    description: "Terms and conditions for using NomoExam exam preparation platform.",
    images: ["https://nomoexam.com/og-image.svg"],
  },
  keywords: ["terms of service", "terms and conditions", "user agreement", "NomoExam terms"],
};

// Static page - can be cached
// export const dynamic = 'force-dynamic'; // REMOVED - this page is static

export default function TermsOfServicePage() {
  return (
    <MarketingPageShell>
        <main className={`${MKT.container} pt-24 md:pt-28 py-12 md:py-16`}>
          <article className="prose prose-neutral max-w-4xl mx-auto font-barlow prose-headings:font-heading prose-headings:italic prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:font-medium prose-a:font-semibold prose-a:text-neutral-900 prose-a:underline prose-a:decoration-accent-lime/70 prose-a:underline-offset-4 lg:prose-lg">
            <p>Welcome to nomoexam!</p>
            <p>These Terms of Service ("Terms") govern your use of the nomoexam website and the services provided by nomoexam. By using our services, you agree to these Terms.</p>
          
          <h2>1. Description of nomoexam</h2>
          <p>Nomoexam is a gamified learning platform designed to make exam preparation more engaging and effective. We use interactive quizzes, progress tracking, and competitive elements to help students learn and retain information.</p>

          <h2>2. User Accounts</h2>
          <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

          <h2>3. User Data and Privacy</h2>
          <p>We collect and store user data, including name, email, and progress data, as necessary to provide our services. For details on how we handle your data, please refer to our Privacy Policy.</p>

          <h2>4. Disclaimer of Warranties</h2>
          <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

          <h2>5. Limitation of Liability</h2>
          <p>In no event shall nomoexam, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

          <h2>6. Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>

          <h2>7. Updates to the Terms</h2>
          <p>We may update these Terms from time to time. Users will be notified of any changes via email.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of Virginia, United States, without regard to its conflict of law provisions.</p>

          <h2>9. Contact Information</h2>
          <p>For any questions or concerns regarding these Terms of Service, please contact us at support@nomoexam.com.</p>
        </article>
      </main>
    </MarketingPageShell>
  );
}