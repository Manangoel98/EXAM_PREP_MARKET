"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_EMAIL = "support@nomoexam.com";

export function ContactForm() {
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
    <section className="relative bg-white py-20 md:py-32">
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="liquid-glass-light mx-auto mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-medium text-neutral-700">
            Get in Touch
          </p>
          <h1 className="font-heading mb-4 text-3xl italic tracking-tight text-neutral-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium text-neutral-600 md:text-lg">
            Have a question or need help? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="liquid-glass rounded-2xl border border-black/10 p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-lime">
                  <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-barlow mb-2 text-2xl font-semibold text-neutral-900">Message sent!</h3>
                <p className="text-neutral-600">We'll get back to you shortly at {email}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" rows={6} placeholder="Tell us how we can help you..." value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full" disabled={!isValid}>
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="liquid-glass rounded-2xl border border-black/10 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-lime/20">
                <svg className="h-6 w-6 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-barlow mb-2 text-lg font-semibold text-neutral-900">Email Us</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-lime hover:underline">
                {CONTACT_EMAIL}
              </a>
              <p className="mt-2 text-sm text-neutral-600">We typically respond within 24 hours</p>
            </div>

            <div className="liquid-glass rounded-2xl border border-black/10 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-lime/20">
                <svg className="h-6 w-6 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-barlow mb-2 text-lg font-semibold text-neutral-900">Have Questions?</h3>
              <p className="text-sm text-neutral-600">Check out our comprehensive FAQ section for quick answers to common questions about pricing, features, and more.</p>
            </div>

            <div className="liquid-glass rounded-2xl border border-black/10 p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-lime/20">
                <svg className="h-6 w-6 text-accent-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-barlow mb-2 text-lg font-semibold text-neutral-900">Business Inquiries</h3>
              <p className="text-sm text-neutral-600">Interested in partnerships, bulk pricing for schools, or media inquiries? Reach out to us at {CONTACT_EMAIL}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
