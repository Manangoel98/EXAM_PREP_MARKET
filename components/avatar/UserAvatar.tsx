"use client";

import React from 'react';
import { generateAvatarDataUri, type AvatarConfig } from '@/lib/avatarUtils';
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  avatarConfig?: AvatarConfig | null;
  fallbackInitial?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-12 w-12 text-xl',
  lg: 'h-16 w-16 text-2xl',
  xl: 'h-24 w-24 text-4xl',
};

export default function UserAvatar({
  avatarConfig,
  fallbackInitial = 'U',
  className,
  size = 'md',
}: UserAvatarProps) {
  if (avatarConfig) {
    try {
      const avatarDataUri = generateAvatarDataUri(avatarConfig);
      return (
        <img
          src={avatarDataUri}
          alt="User avatar"
          className={cn('rounded-full', sizeClasses[size], className)}
        />
      );
    } catch (error) {
    }
  }

  // Fallback to initial letter
  return (
    <div
      className={cn(
        'rounded-full bg-muted flex items-center justify-center font-bold text-foreground',
        sizeClasses[size],
        className
      )}
    >
      {fallbackInitial}
    </div>
  );
}
