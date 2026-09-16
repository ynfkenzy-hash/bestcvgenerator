export const dynamic = 'force-dynamic';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding">
        <div className="max-w-site max-w-3xl space-y-6 text-sm text-slate-300">
          <h1 className="text-2xl font-semibold text-white">Privacy Policy (Draft)</h1>
          <p>
            This is a draft privacy policy for BestCVGenerator. It is provided as a starting point and must be reviewed
            and adapted by a qualified professional to ensure compliance with applicable laws (such as POPIA in South
            Africa, GDPR where relevant, and any other local regulations).
          </p>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">1. Information we collect</h2>
            <p>
              BestCVGenerator processes the information you choose to provide when using the CV and cover-letter tools.
              This may include your name, contact details, work history, education, skills, projects, and other
              professional details that you enter into the forms.
            </p>
            <p>
              We may also collect limited technical data such as IP address, device information, and usage analytics in
              order to maintain and improve the service.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">2. How your information is used</h2>
            <p>
              Your CV and cover-letter information is used to generate documents that you can preview, edit, and
              download. Information is not used to make automated decisions about you beyond formatting and document
              generation.
            </p>
            <p>
              If you create an account in later stages, your CVs, cover letters, and related data will be stored in a
              database associated with your user profile. This allows you to access and update your documents over time.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">3. AI assistance</h2>
            <p>
              Optional AI features (such as wording suggestions or grammar improvements) may send the specific text you
              provide, and any job description you paste, to a third-party AI service. These tools are designed to help
              you improve clarity and tone only. They must not be used to invent work experience, qualifications,
              employers, or achievements.
            </p>
            <p>
              Any AI integration will be clearly labelled in the interface, and this policy must be updated with the
              names of the providers, processing locations, and relevant data-protection terms before launch.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">4. Payments</h2>
            <p>
              Card payments will be handled by a trusted third-party provider that supports South African Rand (ZAR),
              such as PayFast. BestCVGenerator will not store raw card numbers, CVV codes, or other highly sensitive
              payment data.
            </p>
            <p>
              Payment-related information stored by BestCVGenerator may include non-sensitive details such as transaction
              references, plan type, amount, currency, and timestamps so that we can provide receipts and manage
              subscriptions.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">5. Data retention and deletion</h2>
            <p>
              Draft documents and account data will be retained for as long as necessary to provide the service and
              comply with legal obligations. Users should be able to request deletion of their account and associated
              CVs, cover letters, and download history. Exact retention periods and procedures must be defined before
              going live.
            </p>
          </section>
          <section className="space-y-2 text-xs text-slate-400">
            <p>
              This draft is not legal advice. Please have a qualified professional review and complete this policy
              (including adding your legal entity name, contact details for privacy queries, and any required notices)
              before accepting real customers.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
