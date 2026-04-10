"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getExamTheme } from '@/lib/examThemes';

interface UniversalLoadingBarProps {
  isLoading: boolean;
  progress: number;
  hasError: boolean;
}

export function UniversalLoadingBar({ isLoading, progress, hasError }: UniversalLoadingBarProps) {
  const [displayProgress, setDisplayProgress] = useState(0);

  // Universal color - same for all exams
  const theme = getExamTheme();
  const barColor = hasError ? '#ef4444' : theme.accentColor;

  useEffect(() => {
    if (isLoading) {
      setDisplayProgress(progress);
    } else {
      // When loading completes, jump to 100% then fade out
      setDisplayProgress(100);
    }
  }, [isLoading, progress]);

  return (
    <AnimatePresence>
      {(isLoading || displayProgress === 100) && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[10000] h-[3px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-full relative"
            style={{
              backgroundColor: barColor,
              boxShadow: `0 0 10px ${barColor}, 0 0 5px ${barColor}`,
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${displayProgress}%` }}
            transition={{
              duration: displayProgress === 100 ? 0.2 : 0.5,
              ease: displayProgress === 100 ? 'easeOut' : 'linear',
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)`,
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
