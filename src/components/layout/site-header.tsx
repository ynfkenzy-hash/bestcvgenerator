'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/templates', label: 'Templates' },
  { href: '/builder', label: 'CV Builder' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors',
        isActive ? 'text-amber-300' : 'text-slate-200 hover:text-white'
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-site flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-amber-400 text-sm font-bold text-slate-950 shadow-lg">
              CV
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-white">BestCVGenerator</span>
              <span className="text-[11px] text-slate-400">Build a professional CV online</span>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-slate-200 hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/builder"
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300"
          >
            Create your CV
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 p-2 text-slate-200 hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="max-w-site flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <Link
                href="/auth/login"
                className="flex-1 rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-medium text-slate-200 hover:bg-slate-900"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/builder"
                className="flex-1 rounded-full bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-slate-950 shadow-sm hover:bg-amber-300"
                onClick={() => setIsOpen(false)}
              >
                Create your CV
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
