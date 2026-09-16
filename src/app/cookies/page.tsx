export const dynamic = 'force-dynamic';

export default function CookiesPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding">
        <div className="max-w-site max-w-3xl space-y-6 text-sm text-slate-300">
          <h1 className="text-2xl font-semibold text-white">Cookies & Tracking (Draft)</h1>
          <p>
            This page explains how cookies and similar technologies may be used on BestCVGenerator. Update it with your
            actual configuration (including analytics, session cookies, and consent mechanisms) before going live.
          </p>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">1. Essential cookies</h2>
            <p>
              Certain cookies may be necessary for security, authentication, and basic site functionality. These are
              typically required for the service to work and may not be optional.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">2. Analytics</h2>
            <p>
              You may choose to use privacy-conscious analytics tools to understand how the service is used (for
              example, which pages are most popular). This section should name the provider(s) and describe what data is
              collected and for how long.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">3. Consent and control</h2>
            <p>
              Depending on your jurisdiction, you may need to provide a cookie banner and allow users to opt in or out
              of non-essential cookies. The technical implementation of consent management is not included in this
              prototype and must be added before launch.
            </p>
          </section>
          <section className="space-y-2 text-xs text-slate-400">
            <p>
              This draft is for illustration only. Consult your legal and compliance advisors to determine the exact
              wording and consent mechanisms required.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
