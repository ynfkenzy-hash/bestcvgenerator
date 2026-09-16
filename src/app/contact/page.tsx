export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding">
        <div className="max-w-site max-w-3xl space-y-6">
          <h1 className="text-2xl font-semibold text-white">Contact BestCVGenerator</h1>
          <p className="text-sm text-slate-300">
            This page provides a starting point for your contact information. Replace the details below with your real
            company or individual contact channels before launching.
          </p>
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-slate-100">Email:</span> contact@example.com (placeholder)
            </p>
            <p>
              <span className="font-semibold text-slate-100">Business hours:</span> To be confirmed. Specify your
              normal response times here.
            </p>
            <p>
              <span className="font-semibold text-slate-100">Postal or registered address:</span> Add your registered
              business address here if required by local regulations.
            </p>
            <p className="text-xs text-slate-400">
              Important: Update this page with accurate contact information and, if applicable, your company registration
              number and VAT details before accepting real payments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
