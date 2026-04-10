"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { MKT } from "@/lib/marketing-ui";
import { LANDING_DURATION, LANDING_EASE, LANDING_VIEWPORT } from "@/lib/landing-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_EMAIL = "support@nomoexam.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMessage) return;

    const subject = encodeURIComponent(`Contact from ${trimmedName}`);
    const body = encodeURIComponent(`${trimmedMessage}\n\n---\nFrom: ${trimmedName}\nEmail: ${trimmedEmail}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isValid = name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0;

  return (
    <MarketingPageShell>
      <main className="pb-16 pt-24 md:pt-28">
        <section className={`${MKT.container} py-8 md:py-16`}>
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="mb-10 text-center md:mb-14"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={LANDING_VIEWPORT}
              transition={{ duration: LANDING_DURATION, ease: LANDING_EASE }}
            >
              <p className={`${MKT.badgeLight} mx-auto mb-5`}>Contact</p>
              <h1 className={MKT.h1OnLight}>Reach the team</h1>
              <p className={`${MKT.leadOnLight} mt-4`}>We read every message—billing, product, or partnerships.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={LANDING_VIEWPORT}
              transition={{ duration: LANDING_DURATION, delay: 0.06, ease: LANDING_EASE }}
            >
              {submitted ? (
                <div className={`${MKT.card} text-center`}>
                  <p className="font-barlow text-lg font-semibold text-neutral-900">Your email app should open</p>
                  <p className="mt-2 text-sm font-medium text-neutral-600">Send the draft to complete your note.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={`${MKT.card} space-y-6`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                        className="min-h-[44px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        className="min-h-[44px]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="min-h-[120px] resize-y"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full bg-neutral-900 font-barlow font-semibold hover:bg-neutral-800"
                    disabled={!isValid}
                  >
                    Open email draft
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}