import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';
import { openPeeps } from '@dicebear/collection';
import { adventurer } from '@dicebear/collection';

export type AvatarStyle = 'micah' | 'open-peeps' | 'adventurer';

export interface AvatarConfig {
  style: AvatarStyle;
  seed: string;
}

const AVATAR_STYLES: AvatarStyle[] = ['micah', 'open-peeps', 'adventurer'];

/**
 * Generate a random avatar configuration
 */
export function generateRandomAvatar(): AvatarConfig {
  const randomStyle = AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)];
  const randomSeed = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  return {
    style: randomStyle,
    seed: randomSeed,
  };
}

/**
 * Generate avatar SVG data URI from config
 */
export function generateAvatarDataUri(config: AvatarConfig): string {
  const styleMap = {
    'micah': micah,
    'open-peeps': openPeeps,
    'adventurer': adventurer,
  };

  const avatar = createAvatar(styleMap[config.style], {
    seed: config.seed,
  });

  return avatar.toDataUri();
}

/**
 * Get all available avatar styles
 */
export function getAvatarStyles(): AvatarStyle[] {
  return [...AVATAR_STYLES];
}
