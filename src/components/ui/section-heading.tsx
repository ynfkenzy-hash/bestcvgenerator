import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-slate-300 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
