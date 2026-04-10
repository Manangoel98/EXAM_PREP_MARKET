import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";

export const metadata: Metadata = generatePageMetadata({
  title: 'Cookie Policy',
  description: 'Learn about how NomoExam uses cookies and similar technologies. Understand your cookie preferences and how to control them.',
  path: '/cookie-policy',
  keywords: ['cookie policy', 'cookies', 'tracking', 'privacy', 'cookie consent', 'data collection', 'browser cookies'],
});

export default function CookiePolicyPage() {
  return (
    <MarketingPageShell>
      <main className={`${MKT.container} pt-24 md:pt-28 py-12 md:py-16`}>
        <article className="prose prose-neutral max-w-4xl mx-auto font-barlow prose-headings:font-heading prose-headings:italic prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:font-medium prose-a:font-semibold prose-a:text-neutral-900 prose-a:underline prose-a:decoration-accent-lime/70 prose-a:underline-offset-4 lg:prose-lg">
          <h1>Cookie Policy</h1>
          <p>This Cookie Policy explains how nomoexam ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at <a href="https://www.nomoexam.com">https://www.nomoexam.com</a> ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
          
          <h2>What are cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          
          <h2>Why do we use cookies?</h2>
          <p>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes.</p>
          
          <h2>How can I control cookies?</h2>
          <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
          
          <h2>Changes to this Cookie Policy</h2>
          <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about our use of cookies or other technologies, please email us at support@nomoexam.com.</p>
        </article>
      </main>
    </MarketingPageShell>
  );
}