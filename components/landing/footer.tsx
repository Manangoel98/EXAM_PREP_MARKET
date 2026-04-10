"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-dark border-t border-white/10 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 col-span-2 space-y-2 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src="/logo-icon.png"
                alt="Nomoexam"
                width={36}
                height={36}
                className="h-8 w-8 rounded-lg object-cover md:h-9 md:w-9"
                unoptimized
              />
              <span className="font-barlow text-base font-semibold tracking-tight md:text-xl">Nomoexam</span>
            </div>
            <p className="max-w-sm font-barlow text-xs leading-relaxed text-white/70 md:text-sm">
              Serious prep for SAT, ACT, and more—practice, flashcards, paths, and unlimited AI help.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://discord.gg/shDzKd2TTN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-lime transition-colors"
                aria-label="Join our Discord community"
              >
                <svg className="w-6 h-6" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nomoexam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-lime transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="mb-2 font-barlow text-sm font-semibold md:mb-4 md:text-lg">Product</h4>
            <ul className="space-y-2 font-barlow text-xs text-white/70 md:space-y-3 md:text-sm">
              <li>
                <a href="/#capabilities" className="transition-colors hover:text-accent-lime">
                  What&apos;s included
                </a>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-accent-lime">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/features/nomo-ai" className="transition-colors hover:text-accent-lime">
                  Nomo AI Tutor
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 font-barlow text-xs text-white/70 md:space-y-3 md:text-sm">
              <li>
                <Link href="/how-it-works" className="hover:text-accent-lime transition-colors">How it Works</Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-accent-lime transition-colors">Compare</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-lime transition-colors">Contact</Link>
              </li>
              <li>
                <a href="mailto:support@nomoexam.com" className="hover:text-accent-lime transition-colors">
                  support@nomoexam.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm md:text-lg mb-2 md:mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 font-barlow text-xs text-white/70 md:space-y-3 md:text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent-lime transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-accent-lime transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-accent-lime transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-xs md:text-sm">
            © 2026 Nomoexam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};