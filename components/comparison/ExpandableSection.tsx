"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  BookText,
  Bot,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  DraftingCompass,
  DollarSign,
  FileText,
  GraduationCap,
  HelpCircle,
  Landmark,
  MessageSquare,
  Microscope,
  RefreshCw,
  School,
  Target,
  Timer,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_ICONS = {
  book: BookOpen,
  help: HelpCircle,
  school: School,
  check: CheckCircle2,
  target: Target,
  chart: BarChart3,
  refresh: RefreshCw,
  calculator: Calculator,
  timer: Timer,
  microscope: Microscope,
  drafting: DraftingCompass,
  landmark: Landmark,
  alert: AlertTriangle,
  calendar: Calendar,
  graduation: GraduationCap,
  bot: Bot,
  dollar: DollarSign,
  file: FileText,
  message: MessageSquare,
  bookText: BookText,
} as const satisfies Record<string, LucideIcon>;

export type ExpandableSectionIcon = keyof typeof SECTION_ICONS;

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Icon key (rendered client-side; safe from Server Components). */
  icon?: ExpandableSectionIcon;
}

export function ExpandableSection({
  title,
  children,
  defaultOpen = false,
  icon = "book",
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const Icon = SECTION_ICONS[icon] ?? BookOpen;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white/90 shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-zinc-50 md:px-6"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 shrink-0 text-neutral-700" aria-hidden />
          <h3 className="font-barlow text-base font-semibold text-neutral-900 md:text-lg">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-neutral-500" aria-hidden />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-neutral-500" aria-hidden />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-black/[0.06] px-4 py-4 font-barlow text-sm font-medium text-neutral-600 md:px-6 md:text-base md:leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
