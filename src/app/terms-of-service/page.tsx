export const dynamic = 'force-dynamic';

export default function TermsOfServicePage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding">
        <div className="max-w-site max-w-3xl space-y-6 text-sm text-slate-300">
          <h1 className="text-2xl font-semibold text-white">Terms of Service (Draft)</h1>
          <p>
            These draft terms outline how BestCVGenerator is intended to operate as an online CV and cover-letter
            builder. They must be customised and validated by a legal professional before you launch the service.
          </p>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">1. Service description</h2>
            <p>
              BestCVGenerator provides tools to help users structure and format CVs and cover letters. The service does
              not guarantee employment, interview invitations, or specific applicant tracking system (ATS) scores.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">2. User responsibilities</h2>
            <p>
              Users are responsible for ensuring that all information included in their CVs and cover letters is
              accurate, truthful, and up to date. Users must not provide misleading or fraudulent information about work
              history, qualifications, or achievements.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">3. Payments and subscriptions</h2>
            <p>
              Paid plans, including single-download purchases and recurring subscriptions, will be clearly described
              before checkout. Users will see the price, currency, and whether charges are one-time or recurring. No
              user will be subscribed without clear consent.
            </p>
            <p>
              Payment processing will be handled by a third-party provider that supports card payments in South Africa.
              Additional terms from that provider will apply to any transaction.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">4. Acceptable use</h2>
            <p>
              Users must not use BestCVGenerator to create documents that promote unlawful activity, discrimination,
              harassment, or any content that violates applicable laws or third-party rights.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">5. Changes and termination</h2>
            <p>
              The service, plans, and prices may change over time. Any material changes to paid plans or these terms
              should be communicated to existing subscribers with reasonable notice, in accordance with applicable law.
            </p>
          </section>
          <section className="space-y-2 text-xs text-slate-400">
            <p>
              This draft is not legal advice. Update the wording, add your legal entity name, jurisdiction, and dispute
              resolution clauses, and have it reviewed by a professional before using it in production.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
