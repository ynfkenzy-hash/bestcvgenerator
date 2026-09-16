import type { CvTemplateMeta } from '@/lib/cv-templates';

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  summary?: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string;
}

export interface CvSkills {
  technical: string;
  soft: string;
  languages: string;
}

export interface CvData {
  personal: PersonalInfo;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  skills: CvSkills;
  references: string;
}

interface CvPreviewProps {
  template: CvTemplateMeta;
  cv: CvData;
}

export function CvPreview({ template, cv }: CvPreviewProps) {
  return (
    <section className="h-full rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
      <header className="mb-3 flex items-center justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
            Live CV preview
          </p>
          <p className="text-[11px] text-slate-400">
            Layout: {template.name}
          </p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-medium text-slate-200">
          Sample layout – not a real CV
        </span>
      </header>

      <article className="grid max-h-[640px] gap-4 overflow-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-100 shadow-inner lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left column */}
        <div className="space-y-3 border-b border-slate-800 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
          <div>
            <p className="text-[11px] font-medium text-slate-400">Name</p>
            <p className="text-sm font-semibold text-white">{cv.personal.fullName || 'Your full name'}</p>
            <p className="text-[11px] text-slate-400">{cv.personal.title || 'Professional title'}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-200">Contact</p>
            <p className="text-[11px] text-slate-400">
              {cv.personal.email || 'email@example.com'}
            </p>
            <p className="text-[11px] text-slate-400">
              {cv.personal.phone || '+27 00 000 0000'}
              {cv.personal.location ? ` · ${cv.personal.location}` : ' · City, Country'}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-200">Technical skills</p>
            <p className="text-[11px] text-slate-400">
              {cv.skills.technical || 'Add your technical skills (e.g. tools, languages, platforms).'}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-200">Soft skills</p>
            <p className="text-[11px] text-slate-400">
              {cv.skills.soft || 'Add communication, leadership, and other transferable skills.'}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-200">Languages</p>
            <p className="text-[11px] text-slate-400">
              {cv.skills.languages || 'List languages and proficiency levels honestly.'}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-3 lg:pl-4">
          <section>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
              Professional summary
            </h3>
            <p className="mt-1 text-[11px] text-slate-400">
              {cv.personal.summary ||
                'Use this space to describe your actual experience, strengths, and the value you can bring to employers. Avoid exaggeration or invented achievements.'}
            </p>
          </section>

          <section>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
              Work experience
            </h3>
            {cv.experiences.length === 0 ? (
              <p className="mt-1 text-[11px] text-slate-400">
                Add your real roles, responsibilities, and results. You can include part-time and volunteer work where
                appropriate.
              </p>
            ) : (
              <ul className="mt-1 space-y-2">
                {cv.experiences.map((exp) => (
                  <li key={exp.id} className="text-[11px] text-slate-400">
                    <p>
                      <span className="font-semibold text-slate-200">{exp.jobTitle}</span>
                      {exp.company && ` · ${exp.company}`}
                    </p>
                    <p>
                      {[exp.location, exp.startDate, exp.endDate]
                        .filter(Boolean)
                        .join(' · ') || 'Add dates and location'}
                    </p>
                    {exp.description && <p className="mt-1">{exp.description}</p>}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
              Education
            </h3>
            {cv.education.length === 0 ? (
              <p className="mt-1 text-[11px] text-slate-400">
                Include your highest qualifications, institutions, and dates. Do not list courses you have not
                completed unless clearly marked as in progress.
              </p>
            ) : (
              <ul className="mt-1 space-y-2">
                {cv.education.map((edu) => (
                  <li key={edu.id} className="text-[11px] text-slate-400">
                    <p>
                      <span className="font-semibold text-slate-200">{edu.qualification}</span>
                      {edu.fieldOfStudy && ` · ${edu.fieldOfStudy}`}
                    </p>
                    <p>
                      {[edu.institution, edu.startDate, edu.endDate].filter(Boolean).join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {cv.projects.length > 0 && (
            <section>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                Projects
              </h3>
              <ul className="mt-1 space-y-2">
                {cv.projects.map((project) => (
                  <li key={project.id} className="text-[11px] text-slate-400">
                    <p className="font-semibold text-slate-200">{project.name}</p>
                    {project.description && <p className="mt-0.5">{project.description}</p>}
                    {project.technologies && (
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Technologies / skills: {project.technologies}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {cv.certifications.length > 0 && (
            <section>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                Certifications
              </h3>
              <ul className="mt-1 space-y-2">
                {cv.certifications.map((cert) => (
                  <li key={cert.id} className="text-[11px] text-slate-400">
                    <p className="font-semibold text-slate-200">{cert.name}</p>
                    <p>
                      {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {cv.references && (
            <section>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                References
              </h3>
              <p className="mt-1 text-[11px] text-slate-400">{cv.references}</p>
            </section>
          )}
        </div>
      </article>

      <p className="mt-3 text-[11px] text-slate-400">
        This preview is for layout only. BestCVGenerator will never fabricate employers, qualifications, or achievements
        for you.
      </p>
    </section>
  );
}
