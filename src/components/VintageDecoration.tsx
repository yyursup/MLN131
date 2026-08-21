import React from 'react';

export const VintageSeal: React.FC<{ title?: string; subtitle?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  title = "MLN131",
  subtitle = "TRIẾT HỌC"
}) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 font-sans text-xs font-semibold">
      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
      <span>{subtitle}: {title}</span>
    </div>
  );
};

export const VintageDivider: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className="flex items-center justify-center my-6 w-full opacity-60">
      <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1"></div>
      {label && (
        <div className="px-3 text-slate-500 dark:text-slate-400 font-sans text-xs font-medium uppercase tracking-wider">
          {label}
        </div>
      )}
      <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1"></div>
    </div>
  );
};

export const VintageCornerDecor: React.FC = () => {
  return null; // Clean minimal look, no heavy corners needed
};
