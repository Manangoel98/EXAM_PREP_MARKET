"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

interface EmptyStateModalProps {
  message?: string;
  primaryButtonText?: string;
  onPrimaryAction?: () => void;
  primaryButtonProps?: React.ComponentProps<typeof Button>;
  secondaryButtonText?: string;
  onSecondaryAction?: () => void;
  secondaryButtonProps?: React.ComponentProps<typeof Button>;
  isPrimaryLoading?: boolean;
  isSecondaryLoading?: boolean;
}

export function EmptyStateModal({
  message = "No data available yet. Complete a practice exam to see your stats.",
  primaryButtonText = "Start Practicing",
  onPrimaryAction,
  primaryButtonProps,
  secondaryButtonText,
  onSecondaryAction,
  secondaryButtonProps,
  isPrimaryLoading = false,
  isSecondaryLoading = false,
}: EmptyStateModalProps) {
  const router = useRouter();

  const handlePrimaryClick = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
      return;
    }
    router.push('/practice-papers');
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center justify-center gap-4 text-center p-8">
        <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
          {message}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            onClick={handlePrimaryClick}
            size="lg"
            className="w-full sm:w-auto"
            disabled={isPrimaryLoading}
            {...primaryButtonProps}
          >
            {isPrimaryLoading ? 'Checking...' : primaryButtonText}
            {!isPrimaryLoading && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
          {secondaryButtonText && onSecondaryAction && (
            <Button
              onClick={onSecondaryAction}
              size="lg"
              data-loading={isSecondaryLoading ? 'true' : 'false'}
              className={`w-full sm:w-auto ${isSecondaryLoading ? 'pointer-events-none opacity-70' : ''}`}
              disabled={isSecondaryLoading}
              {...secondaryButtonProps}
            >
              {isSecondaryLoading ? 'Refreshing...' : secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}