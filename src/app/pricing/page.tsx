import { PRICING_PLANS } from '@/lib/pricing';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export default function PricingPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding border-b border-slate-800">
        <div className="max-w-site space-y-10">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing in South African Rand (ZAR)"
            subtitle="You can create and edit your CV for free. Paid options unlock export and premium tools. All prices shown here are examples for development and will be configurable from the backend in production."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <article
                key={plan.id}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <header className="space-y-1">
                  <p className="text-sm font-semibold text-white">{plan.name}</p>
                  <p className="text-xs text-slate-400">{plan.billingLabel}</p>
                  <p className="mt-2 text-2xl font-semibold text-amber-300">
                    {plan.priceZar === 0 ? (
                      'Free'
                    ) : (
                      <>
                        R{plan.priceZar}
                        {plan.billingType === 'subscription' && (
                          <span className="text-sm font-normal text-slate-300"> / month</span>
                        )}
                      </>
                    )}
                  </p>
                </header>
                <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <p className="mt-3 text-xs text-slate-400">{plan.note}</p>
                )}
                <div className="mt-auto pt-4">
                  {plan.id === 'free' && (
                    <Button variant="secondary" className="w-full" size="md">
                      Start for free
                    </Button>
                  )}
                  {plan.id === 'single' && (
                    <Button className="w-full" size="md">
                      Continue to secure checkout (coming soon)
                    </Button>
                  )}
                  {plan.id === 'premium' && (
                    <Button className="w-full" size="md">
                      View subscription options (coming soon)
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              Card payments will be integrated with a provider that supports South African Rand (ZAR), such as PayFast,
              in a later stage. BestCVGenerator will rely on provider-hosted payment pages where appropriate and will not
              store raw card numbers, CVV codes, or other sensitive payment details.
            </p>
            <p className="text-xs text-slate-400">
              This page is for demonstration only and does not process real payments. Once payments are implemented,
              customers will see the exact price, currency, and whether a purchase is one-time or recurring before
              confirming checkout.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
