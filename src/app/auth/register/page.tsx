import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function RegisterPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding">
        <div className="max-w-site flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h1 className="text-xl font-semibold text-white">Create an account</h1>
            <p className="mt-1 text-sm text-slate-300">
              In a later stage, accounts will let you save multiple CVs, track downloads, and manage subscriptions.
              This page currently serves as a design prototype.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Full name
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                  />
                </label>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Email
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                  />
                </label>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Password
                  <input
                    type="password"
                    className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-300"
              >
                Create account (UI only)
              </button>
            </form>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <Link href="/auth/login" className="hover:text-slate-200">
                Already have an account?
              </Link>
              <span>Email verification and password reset coming soon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
