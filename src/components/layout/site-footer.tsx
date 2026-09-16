import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-site flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 text-sm text-slate-400">
          <p className="font-medium text-slate-200">BestCVGenerator</p>
          <p>Professional CV builder for students and professionals.</p>
          <p className="text-xs text-slate-500">
            Sample content only. Please review legal pages and policies before
            launching a production service.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </Link>
          <Link href="/refund-policy" className="hover:text-white">
            Refund Policy
          </Link>
          <Link href="/cookies" className="hover:text-white">
            Cookies
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
