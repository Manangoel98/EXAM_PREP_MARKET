"use client";

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import PricingSection from '@/components/landing/PricingSection';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-7xl rounded-lg p-0">
        <div className="max-h-[90vh] overflow-y-auto">
          <PricingSection />
        </div>
      </DialogContent>
    </Dialog>
  );
}