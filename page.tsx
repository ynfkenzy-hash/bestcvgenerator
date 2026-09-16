import Link from "next/link";
import { PRICING_PLANS } from "@/lib/pricing";
import { CV_TEMPLATES } from "@/lib/cv-templates";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const singlePlan = PRICING_PLANS.find((p) => p.id === "single");
  const premiumPlan = PRICING_PLANS.find((p) => p.id === "premium");

  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-surface border-b border-slate-800/60">
        <div className="max-w-site section-y-padding grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-200">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Build an ATS-friendly CV in minutes
            </p>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Build a Professional CV. Open Doors to Your Future.
              </h1>
              <p className="text-sm text-slate-300 sm:text-base">
                BestCVGenerator helps students, graduates, and professionals create clear, modern CVs
                that recruiters can read quickly and applicant tracking systems can parse accurately.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/builder">Create your CV</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/templates">Explore templates</Link>
              </Button>
              <p className="text-xs text-slate-400">
                Free to start. Pay only when you need a professional PDF download.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium text-slate-400">Designed for South African job seekers</dt>
                <dd className="mt-1 text-lg font-semibold text-white">ZAR pricing first</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Clear, ATS-conscious layouts</dt>
                <dd className="mt-1 text-lg font-semibold text-white">6 starter templates</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">No fake guarantees</dt>
                <dd className="mt-1 text-lg font-semibold text-white">Honest, practical guidance</dd>
              </div>
            </dl>
          </div>

          {/* Hero CV preview */}
          <div className="relative">
            <div className="pointer-events-none absolute -left-8 -top-6 h-16 w-16 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-8 h-20 w-20 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                    Sample CV preview
                  </p>
                  <p className="text-xs text-slate-400">
                    Content shown here is example text only.
                  </p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-slate-200">
                  Classic Professional
                </span>
              </div>
              <div className="grid gap-4 rounded-xl bg-slate-950 p-4 text-xs text-slate-100 shadow-inner sm:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-3 border-r border-slate-800 pr-4">
                  <div>
                    <p className="text-[11px] font-medium text-slate-400">Sample name</p>
                    <p className="text-sm font-semibold text-white">Alex Sample</p>
                    <p className="text-[11px] text-slate-400">Software Developer</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-slate-200">Contact</p>
                    <p className="text-[11px] text-slate-400">sample.email@example.com</p>
                    <p className="text-[11px] text-slate-400">+27 00 000 0000 · Cape Town, South Africa</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-slate-200">Skills</p>
                    <p className="text-[11px] text-slate-400">JavaScript · TypeScript · SQL · Communication</p>
                  </div>
                </div>
                <div className="space-y-3 pl-0 sm:pl-4">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-200">Professional Summary</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Example summary only. Use this space to describe your real experience, strengths, and
                      the value you can bring to employers.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-200">Experience</p>
                    <ul className="mt-1 space-y-1 text-[11px] text-slate-400">
                      <li>
                        <span className="font-medium text-slate-200">Job Title · Company Name</span> – Key
                        responsibility or impact statement.
                      </li>
                      <li>
                        <span className="font-medium text-slate-200">Another Role · Employer</span> – Short
                        bullet focusing on real outcomes.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-200">Education</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Qualification · Institution · Dates (sample only).
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                The final PDF will use your actual information. BestCVGenerator never invents qualifications or
                work history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-y-padding border-b border-slate-800 bg-slate-950">
        <div className="max-w-site space-y-10">
          <SectionHeading
            eyebrow="Why BestCVGenerator"
            title="Professional CVs without complicated design tools"
            subtitle="Everything is built around clarity, structure, and real-world hiring practices. Templates avoid heavy graphics and text boxes so your CV is easy for recruiters and applicant tracking systems to process."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Professional CV templates',
                body: 'Choose from carefully structured layouts for corporate, creative, graduate, and service roles.',
              },
              {
                title: 'Easy, guided editing',
                body: 'A step-by-step builder breaks your CV into manageable sections so you never face a blank page.',
              },
              {
                title: 'ATS-conscious formatting',
                body: 'Layouts use clear headings, simple columns, and real text so screening systems can read every line.',
              },
              {
                title: 'Ready-to-download PDFs',
                body: 'Export a clean A4 PDF with selectable text. No screenshots, images, or locked documents.',
              },
              {
                title: 'Secure payments',
                body: 'When you are ready to download, payments will be handled by a trusted South African provider such as PayFast.',
              },
              {
                title: 'Designed for honest use',
                body: 'The builder helps you present your actual experience clearly. It never invents roles or qualifications.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-y-padding border-b border-slate-800 bg-slate-950">
        <div className="max-w-site space-y-10">
          <SectionHeading
            eyebrow="How it works"
            title="Create a strong CV in four clear steps"
            subtitle="No design background required. BestCVGenerator keeps you focused on content while we handle layout and structure."
          />
          <ol className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Choose a template',
                body: 'Pick an original layout that matches the type of roles you are targeting.',
              },
              {
                step: '02',
                title: 'Enter your information',
                body: 'Fill in personal details, work history, education, skills, and projects in short guided forms.',
              },
              {
                step: '03',
                title: 'Preview & refine',
                body: 'See a live preview as you edit. Optional AI tools can help tidy wording without changing facts.',
              },
              {
                step: '04',
                title: 'Download your CV',
                body: 'Once you are happy, download a professional PDF in A4 format. More formats may be added later.',
              },
            ].map((step) => (
              <li
                key={step.step}
                className="relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-xs font-semibold text-amber-300">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Templates teaser */}
      <section className="section-y-padding border-b border-slate-800 bg-slate-950">
        <div className="max-w-site space-y-8">
          <SectionHeading
            eyebrow="CV templates"
            title="Start with a layout that fits your next role"
            subtitle="Each template is built with readable fonts, consistent headings, and minimal graphics so your experience stands out clearly."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {CV_TEMPLATES.slice(0, 3).map((template) => (
              <div
                key={template.id}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-white">{template.name}</p>
                    <p className="text-xs text-slate-400">{template.category}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] font-medium text-slate-200">
                    {template.badge}
                  </span>
                </div>
                <p className="mb-4 line-clamp-3 text-sm text-slate-300">{template.description}</p>
                <div className="mt-auto flex items-center justify-between gap-2 text-xs text-slate-400">
                  <span>Printable A4 · ATS-aware layout</span>
                  <Link
                    href={`/builder?template=${template.id}`}
                    className="font-medium text-sky-300 hover:text-sky-200"
                  >
                    Use this template
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              Explore all templates, including options for corporate, creative, graduate, and service roles.
            </p>
            <Link
              href="/templates"
              className="text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              View full template gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section id="pricing" className="section-y-padding border-b border-slate-800 bg-slate-950">
        <div className="max-w-site space-y-10">
          <SectionHeading
            eyebrow="Transparent pricing"
            title="Only pay when you are ready to download"
            subtitle="You can create and edit your CV for free. Paid options unlock professional PDF downloads and premium tools. Prices below are examples and will be configurable from the backend."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <p className="text-sm font-semibold text-white">{plan.name}</p>
                <p className="mt-1 text-xs text-slate-400">{plan.billingLabel}</p>
                <p className="mt-3 text-2xl font-semibold text-amber-300">
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
                <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
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
                <div className="mt-5 flex-1" />
                <div className="mt-4">
                  {plan.id === 'free' ? (
                    <Button variant="secondary" className="w-full" size="md" asChild>
                      <Link href="/builder">Start for free</Link>
                    </Button>
                  ) : (
                    <Button className="w-full" size="md" asChild>
                      <Link href="/pricing">View payment options</Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400">
            Card payments and subscription management will be integrated via a secure provider that supports South African
            Rand (ZAR), such as PayFast, in a later stage. No card details are handled directly by BestCVGenerator.
          </p>
        </div>
      </section>

      {/* Testimonials (sample content) */}
      <section className="section-y-padding border-b border-slate-800 bg-slate-950">
        <div className="max-w-site space-y-8">
          <SectionHeading
            eyebrow="Sample testimonials"
            title="What users might say about BestCVGenerator"
            subtitle="The quotes below are placeholder text only and do not represent real customer statements. Replace them with genuine feedback once the product is live."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {["Student", "Career switcher", "Hiring manager"].map((persona, index) => (
              <figure
                key={persona}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <p className="text-sm text-slate-300">
                  
                  "BestCVGenerator made it easy to turn my scattered notes into a structured CV without overpromising or
                  using buzzwords I am not comfortable with. The preview helped me focus on what recruiters actually
                  need to see."
                </p>
                <figcaption className="mt-4 text-sm text-slate-400">
                  <span className="font-semibold text-slate-200">Sample {persona}</span>
                  <span className="block text-xs text-slate-500">
                    Placeholder testimonial #{index + 1} – replace with real feedback.
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y-padding border-b border-slate-800 bg-slate-950">
        <div className="max-w-site space-y-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Answers to common questions"
            subtitle="These answers describe how BestCVGenerator is intended to work. Please review them and adapt to your final product and legal guidance."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Is the Free plan really free?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Yes. You can create and edit a CV, explore templates, and see live previews without entering card
                  details. Payment is only required if you decide to download a professional PDF or use premium
                  features.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Do you guarantee job offers or ATS scores?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  No. BestCVGenerator focuses on clear formatting and helpful guidance, but hiring decisions and
                  screening outcomes depend on many external factors. We do not provide guarantees of employment or
                  specific ATS scores.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Will AI change or invent my work history?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  No. Optional AI tools will only help you rephrase or tidy wording you provide. They are not allowed
                  to invent experience, employers, qualifications, or achievements.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  How will payments and subscriptions be handled?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Payments will be processed via a secure third-party provider that supports card payments in South
                  Africa. BestCVGenerator will not store raw card numbers or CVV codes. You will be able to see prices,
                  whether a purchase is one-time or recurring, and manage your subscription from your account area.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Where is my CV data stored?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  During early stages, drafts may be stored locally in your browser. In later stages, you will be able
                  to create an account so your CVs and cover letters can be stored securely in a database with proper
                  access controls. You can request deletion of your account and associated documents.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Can I export a cover letter?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  A cover-letter generator and matching templates are planned. The first version will support PDF
                  exports, with DOCX exports considered once the backend supports them reliably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-y-padding bg-slate-950">
        <div className="max-w-site flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-6 py-10 sm:px-10 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-3">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Start your next application with a clear, confident CV.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Open the builder, choose a template, and start filling in your details. You can refine your CV as many
              times as you like before deciding whether to download a paid PDF.
            </p>
            {singlePlan && premiumPlan && (
              <p className="text-xs text-slate-400">
                Example pricing today: a single CV download for approximately R{singlePlan.priceZar} or a premium plan
                from R{premiumPlan.priceZar} per month. Final prices will be configurable from your admin panel.
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/builder">Create your CV</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/pricing">View full pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
