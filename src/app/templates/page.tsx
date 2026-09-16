'use client';

import { CV_TEMPLATES, type CvTemplateMeta } from '@/lib/cv-templates';
import { SectionHeading } from '@/components/ui/section-heading';
import { CvTemplateCard } from '@/components/cv/cv-template-card';
import { CvPreview, type CvData } from '@/components/cv/cv-preview';
import { useState } from 'react';

function createSampleCv(): CvData {
  return {
    personal: {
      fullName: 'Alex Sample',
      email: 'sample.email@example.com',
      phone: '+27 00 000 0000',
      location: 'Cape Town, South Africa',
      title: 'Example Job Title',
      summary:
        'This is sample content only. Use this area to summarise your real experience, strengths, and the value you bring to employers.',
    },
    experiences: [],
    education: [],
    certifications: [],
    projects: [],
    skills: {
      technical: 'Technical skills (sample): Microsoft Office · Email · Point-of-sale systems',
      soft: 'Soft skills (sample): Customer service · Communication · Teamwork',
      languages: 'Languages (sample): English · isiXhosa',
    },
    references: 'References available on request (sample placeholder text).',
  };
}

function TemplatesGallery() {
  const [activeTemplate, setActiveTemplate] = useState<CvTemplateMeta>(CV_TEMPLATES[0]!);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,1.1fr)]">
      <div className="space-y-4">
        <p className="text-sm text-slate-300">
          Choose a layout that matches the kind of roles you are applying for. All templates use simple, printable A4
          layouts with clear headings and real text to stay friendly to applicant tracking systems (ATS).
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {CV_TEMPLATES.map((template) => (
            <CvTemplateCard
              key={template.id}
              template={template}
              onPreview={() => setActiveTemplate(template)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-300">
          Template preview – sample content
        </p>
        <p className="text-xs text-slate-400">
          The preview below uses placeholder data to show the layout only. Your CV will use your own information.
        </p>
        <CvPreview template={activeTemplate} cv={createSampleCv()} />
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

export default function TemplatesPage() {
  return (
    <main className="bg-slate-950">
      <section className="section-y-padding border-b border-slate-800">
        <div className="max-w-site space-y-10">
          <SectionHeading
            eyebrow="CV templates"
            title="Pick a layout that works for your next role"
            subtitle="Browse original templates for corporate, creative, graduate, and service roles. Each one is designed to be printable, readable, and friendly to applicant tracking systems."
          />
          <TemplatesGallery />
        </div>
      </section>
    </main>
  );
}
