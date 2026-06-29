"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, FileText, MessageSquare, Lock, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsLocked } from '@/hooks/usePaywall';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home, requiresSubscription: true },
  { href: '/flashcards', label: 'Flashcards', icon: Layers, requiresSubscription: false },
  { href: '/study-plan', label: 'Study Plan', icon: BookOpen, requiresSubscription: true },
  { href: '/practice-papers', label: 'Papers', icon: FileText, requiresSubscription: true },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const isLocked = useIsLocked();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-dark border-t border-neutral-700/60 md:hidden z-50">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ href, label, icon: Icon, requiresSubscription }) => {
          const isActive = pathname.startsWith(href);
          const isItemLocked = requiresSubscription && isLocked;
          
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center h-16 flex-1 gap-1 transition-colors duration-200 relative",
                isActive
                  ? 'text-accent-lime bg-neutral-dark/50'
                  : 'text-neutral-400 hover:text-accent-lime',
                isItemLocked && !isActive && 'opacity-60'
              )}
              title={isItemLocked ? `${label} (Premium)` : label}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {isItemLocked && (
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Lock className="h-1.5 w-1.5 text-neutral-dark" />
                  </div>
                )}
              </div>
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}