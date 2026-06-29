"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';
import { generateRandomAvatar, generateAvatarDataUri, getAvatarStyles, type AvatarConfig, type AvatarStyle } from '@/lib/avatarUtils';
import { cn } from '@/lib/utils';

interface AvatarCustomizerProps {
  currentAvatar?: AvatarConfig | null;
  onSave: (avatar: AvatarConfig) => void;
  isSaving?: boolean;
}

export default function AvatarCustomizer({ currentAvatar, onSave, isSaving }: AvatarCustomizerProps) {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarConfig>(
    currentAvatar || generateRandomAvatar()
  );

  const availableStyles = getAvatarStyles();

  const handleStyleChange = (style: AvatarStyle) => {
    const newAvatar: AvatarConfig = {
      style,
      seed: selectedAvatar.seed,
    };
    setSelectedAvatar(newAvatar);
  };

  const handleRandomize = () => {
    const newAvatar = generateRandomAvatar();
    setSelectedAvatar(newAvatar);
  };

  const handleSave = () => {
    onSave(selectedAvatar);
  };

  const hasChanges = JSON.stringify(selectedAvatar) !== JSON.stringify(currentAvatar);

  return (
    <Card className="bg-card shadow-sm rounded-md">
      <CardHeader>
        <CardTitle className="text-lg">Customize Avatar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Preview */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <img
              src={generateAvatarDataUri(selectedAvatar)}
              alt="Avatar preview"
              className="h-24 w-24 rounded-full border-4 border-primary/20"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRandomize}
            className="gap-2"
          >
            <Shuffle className="h-4 w-4" />
            Randomize
          </Button>
        </div>

        {/* Style Selection */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Avatar Style</h4>
          <div className="grid grid-cols-3 gap-3">
            {availableStyles.map((style) => {
              const previewAvatar: AvatarConfig = {
                style,
                seed: selectedAvatar.seed,
              };
              const isSelected = selectedAvatar.style === style;

              return (
                <button
                  key={style}
                  onClick={() => handleStyleChange(style)}
                  className={cn(
                    'p-3 rounded-lg border-2 transition-all hover:scale-105',
                    isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  <img
                    src={generateAvatarDataUri(previewAvatar)}
                    alt={style}
                    className="h-16 w-16 mx-auto rounded-full"
                  />
                  <p className="text-xs mt-2 font-medium capitalize">
                    {style.replace('-', ' ')}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Save Button */}
        {hasChanges && (
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full"
          >
            {isSaving ? 'Saving...' : 'Save Avatar'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
