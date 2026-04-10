import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
      {icon && (
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
          {icon}
        </div>
      )}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
