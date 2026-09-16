export const dynamic = 'force-dynamic';

export default function RefundPolicyPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding">
        <div className="max-w-site max-w-3xl space-y-6 text-sm text-slate-300">
          <h1 className="text-2xl font-semibold text-white">Refund Policy (Draft)</h1>
          <p>
            This draft refund policy explains how refunds for BestCVGenerator purchases might work. It must be adapted
            to your actual business model, payment provider rules, and local consumer-protection laws.
          </p>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">1. One-time CV downloads</h2>
            <p>
              For single CV download purchases, you may choose to offer refunds within a short period (for example,
              7 days) if the customer experiences technical issues that prevent successful download or if the document is
              materially different from what was described.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">2. Subscriptions</h2>
            <p>
              Subscription plans (for example, a monthly premium plan) should make it clear that charges recur until
              cancelled. You may choose to offer pro-rated or partial refunds depending on your policies and the rules of
              your payment provider.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">3. How to request a refund</h2>
            <p>
              Customers should be able to contact support through a clearly published channel (such as email) to request
              a refund. The process, response times, and any documentation required should be described here.
            </p>
          </section>
          <section className="space-y-2 text-xs text-slate-400">
            <p>
              This text is provided for illustration only and does not replace professional legal guidance. Adjust it to
              match your actual refund practices and local regulations before accepting real payments.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
