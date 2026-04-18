"use client";
import { logger } from '@/lib/logger';

import React, { useState } from 'react';
import { getAppUrl } from '@/lib/config';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface LogoutConfirmationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => Promise<void>;
  isLoading?: boolean;
}

export function LogoutConfirmationDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  isLoading = false,
}: LogoutConfirmationDialogProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = async () => {
    setIsProcessing(true);
    try {
      // Call the logout function
      await onConfirm();

      // Small delay to ensure Firebase signout completes
      await new Promise(resolve => setTimeout(resolve, 200));

      // Navigate to auth page using window.location for clean slate
      // This ensures no React state artifacts remain and forces a full page reload
      window.location.href = getAppUrl('/auth');
    } catch (error) {
      logger.error('Logout error:', error);
      setIsProcessing(false);
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    if (!isProcessing) {
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-background">
        <AlertDialogHeader>
          <AlertDialogTitle>Sign Out?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to sign out? You'll need to log in again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel 
            disabled={isProcessing}
            onClick={handleCancel}
          >
            Cancel
          </AlertDialogCancel>
          <Button
            onClick={handleConfirm}
            disabled={isProcessing}
            variant="destructive"
            className="min-w-[100px]"
          >
            {isProcessing ? 'Signing out...' : 'Sign Out'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}