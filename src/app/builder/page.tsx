'use client';

import { useMemo, useState } from 'react';
import { CV_TEMPLATES, type CvTemplateId, getTemplateById } from '@/lib/cv-templates';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import {
  CvPreview,
  type CvData,
  type ExperienceItem,
  type EducationItem,
  type CertificationItem,
  type ProjectItem,
} from '@/components/cv/cv-preview';

type StepId =
  | 'personal'
  | 'experience'
  | 'education'
  | 'skills'
  | 'certifications'
  | 'projects'
  | 'references';

interface StepConfig {
  id: StepId;
  label: string;
  description: string;
}

const STEPS: StepConfig[] = [
  {
    id: 'personal',
    label: 'Personal information',
    description: 'Your contact details, professional title, and optional summary.',
  },
  {
    id: 'experience',
    label: 'Work experience',
    description: 'Roles, responsibilities, and achievements in reverse chronological order.',
  },
  {
    id: 'education',
    label: 'Education',
    description: 'Institutions, qualifications, and fields of study.',
  },
  {
    id: 'skills',
    label: 'Skills',
    description: 'Technical skills, soft skills, and languages.',
  },
  {
    id: 'certifications',
    label: 'Certifications',
    description: 'Professional certificates and issuing organisations.',
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'Projects or portfolios that demonstrate your skills.',
  },
  {
    id: 'references',
    label: 'References',
    description: 'Optional reference details or a short note about availability.',
  },
];

function createId() {
  return Math.random().toString(36).slice(2, 10);
}

function createInitialCv(): CvData {
  return {
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      title: '',
      summary: '',
    },
    experiences: [],
    education: [],
    certifications: [],
    projects: [],
    skills: {
      technical: '',
      soft: '',
      languages: '',
    },
    references: '',
  };
}

function moveItem<T>(items: T[], from: number, to: number): T[] {
  const copy = [...items];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

export const dynamic = 'force-dynamic';

export default function BuilderPage() {
  const [selectedTemplateId, setSelectedTemplateId] = useState<CvTemplateId>('classic-professional');
  const [activeStepId, setActiveStepId] = useState<StepId>('personal');
  const [cv, setCv] = useState<CvData>(() => createInitialCv());

  const template = useMemo(() => getTemplateById(selectedTemplateId), [selectedTemplateId]);
  const currentStepIndex = STEPS.findIndex((step) => step.id === activeStepId);

  const goToStep = (id: StepId) => setActiveStepId(id);

  const goNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setActiveStepId(STEPS[currentStepIndex + 1]!.id);
    }
  };

  const goPrev = () => {
    if (currentStepIndex > 0) {
      setActiveStepId(STEPS[currentStepIndex - 1]!.id);
    }
  };

  const handleAddExperience = () => {
    const item: ExperienceItem = {
      id: createId(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setCv((prev) => ({ ...prev, experiences: [...prev.experiences, item] }));
  };

  const handleUpdateExperience = (id: string, patch: Partial<ExperienceItem>) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, ...patch } : exp)),
    }));
  };

  const handleRemoveExperience = (id: string) => {
    setCv((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }));
  };

  const handleReorderExperience = (index: number, direction: 'up' | 'down') => {
    setCv((prev) => {
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.experiences.length) return prev;
      return {
        ...prev,
        experiences: moveItem(prev.experiences, index, targetIndex),
      };
    });
  };

  const handleAddEducation = () => {
    const item: EducationItem = {
      id: createId(),
      institution: '',
      qualification: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
    };
    setCv((prev) => ({ ...prev, education: [...prev.education, item] }));
  };

  const handleUpdateEducation = (id: string, patch: Partial<EducationItem>) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, ...patch } : edu)),
    }));
  };

  const handleRemoveEducation = (id: string) => {
    setCv((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const handleReorderEducation = (index: number, direction: 'up' | 'down') => {
    setCv((prev) => {
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.education.length) return prev;
      return {
        ...prev,
        education: moveItem(prev.education, index, targetIndex),
      };
    });
  };

  const handleAddCertification = () => {
    const item: CertificationItem = {
      id: createId(),
      name: '',
      issuer: '',
      date: '',
    };
    setCv((prev) => ({ ...prev, certifications: [...prev.certifications, item] }));
  };

  const handleUpdateCertification = (id: string, patch: Partial<CertificationItem>) => {
    setCv((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert) =>
        cert.id === id ? { ...cert, ...patch } : cert
      ),
    }));
  };

  const handleRemoveCertification = (id: string) => {
    setCv((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((cert) => cert.id !== id),
    }));
  };

  const handleAddProject = () => {
    const item: ProjectItem = {
      id: createId(),
      name: '',
      description: '',
      technologies: '',
    };
    setCv((prev) => ({ ...prev, projects: [...prev.projects, item] }));
  };

  const handleUpdateProject = (id: string, patch: Partial<ProjectItem>) => {
    setCv((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, ...patch } : project
      ),
    }));
  };

  const handleRemoveProject = (id: string) => {
    setCv((prev) => ({
      ...prev,
      projects: prev.projects.filter((project) => project.id !== id),
    }));
  };

  const handleUpdateSkills = (field: keyof CvData['skills'], value: string) => {
    setCv((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [field]: value,
      },
    }));
  };

  const handleUpdateReferences = (value: string) => {
    setCv((prev) => ({
      ...prev,
      references: value,
    }));
  };

  return (
    <main className="bg-slate-950">
      <section className="section-y-padding border-b border-slate-800">
        <div className="max-w-site space-y-8">
          <SectionHeading
            eyebrow="CV builder"
            title="Build your CV step by step"
            subtitle="Fill in each section with your real information. A live preview on the right shows how your CV will look in an ATS-conscious A4 layout. PDF export, autosave, and AI assistance will be added in later stages."
          />

          {/* Template selector */}
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber-300">
                Template
              </p>
              <p className="text-sm text-slate-200">
                {template.name}
              </p>
              <p className="text-xs text-slate-400">Switch templates at any time. Content stays the same.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {CV_TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTemplateId(t.id)}
                  className={
                    'rounded-full border px-3 py-1 text-xs font-medium transition ' +
                    (t.id === selectedTemplateId
                      ? 'border-amber-400 bg-amber-400/10 text-amber-200'
                      : 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800')
                  }
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            {/* Left: form steps */}
            <div className="space-y-4">
              <nav className="flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-2 text-xs">
                {STEPS.map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => goToStep(step.id)}
                    className={
                      'flex-1 rounded-full px-3 py-1.5 text-left transition ' +
                      (step.id === activeStepId
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-transparent text-slate-200 hover:bg-slate-800')
                    }
                  >
                    <span className="block text-[11px] font-semibold">{step.label}</span>
                    <span className="block text-[10px] text-slate-300/80">{step.description}</span>
                  </button>
                ))}
              </nav>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                {activeStepId === 'personal' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white">Personal information</h3>
                    <p className="text-xs text-slate-400">
                      Enter your real contact details. This information is never fabricated by the system.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-slate-200">
                          Full name
                          <input
                            type="text"
                            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                            value={cv.personal.fullName}
                            onChange={(e) =>
                              setCv((prev) => ({
                                ...prev,
                                personal: { ...prev.personal, fullName: e.target.value },
                              }))
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-200">
                          Email
                          <input
                            type="email"
                            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                            value={cv.personal.email}
                            onChange={(e) =>
                              setCv((prev) => ({
                                ...prev,
                                personal: { ...prev.personal, email: e.target.value },
                              }))
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-200">
                          Phone number
                          <input
                            type="tel"
                            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                            value={cv.personal.phone}
                            onChange={(e) =>
                              setCv((prev) => ({
                                ...prev,
                                personal: { ...prev.personal, phone: e.target.value },
                              }))
                            }
                          />
                        </label>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-slate-200">
                          City and country
                          <input
                            type="text"
                            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                            value={cv.personal.location}
                            onChange={(e) =>
                              setCv((prev) => ({
                                ...prev,
                                personal: { ...prev.personal, location: e.target.value },
                              }))
                            }
                          />
                        </label>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-slate-200">
                          Professional title
                          <input
                            type="text"
                            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                            value={cv.personal.title}
                            onChange={(e) =>
                              setCv((prev) => ({
                                ...prev,
                                personal: { ...prev.personal, title: e.target.value },
                              }))
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-200">
                        Professional summary (optional)
                        <textarea
                          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                          rows={4}
                          value={cv.personal.summary ?? ''}
                          onChange={(e) =>
                            setCv((prev) => ({
                              ...prev,
                              personal: { ...prev.personal, summary: e.target.value },
                            }))
                          }
                        />
                      </label>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Optional AI assistance for improving summaries will be added later. It will always work with the
                        information you provide and will not invent experience.
                      </p>
                    </div>
                  </div>
                )}

                {activeStepId === 'experience' && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-white">Work experience</h3>
                        <p className="text-xs text-slate-400">
                          List roles in reverse chronological order. Focus on responsibilities and achievements that are
                          accurate and relevant.
                        </p>
                      </div>
                      <Button size="sm" type="button" onClick={handleAddExperience}>
                        Add role
                      </Button>
                    </div>
                    {cv.experiences.length === 0 && (
                      <p className="text-xs text-slate-400">
                        Start by adding your current or most recent role. You can also include part-time, internship, or
                        volunteer work.
                      </p>
                    )}
                    <div className="space-y-3">
                      {cv.experiences.map((exp, index) => (
                        <div
                          key={exp.id}
                          className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-semibold text-slate-200">
                              Role {index + 1}
                            </p>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => handleReorderExperience(index, 'up')}
                                className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:bg-slate-800"
                              >
                                Up
                              </button>
                              <button
                                type="button"
                                onClick={() => handleReorderExperience(index, 'down')}
                                className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:bg-slate-800"
                              >
                                Down
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRemoveExperience(exp.id)}
                                className="rounded-full border border-red-500/60 px-2 py-1 text-[10px] text-red-300 hover:bg-red-500/10"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <label className="block text-xs font-medium text-slate-200">
                              Job title
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={exp.jobTitle}
                                onChange={(e) =>
                                  handleUpdateExperience(exp.id, { jobTitle: e.target.value })
                                }
                              />
                            </label>
                            <label className="block text-xs font-medium text-slate-200">
                              Company
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={exp.company}
                                onChange={(e) =>
                                  handleUpdateExperience(exp.id, { company: e.target.value })
                                }
                              />
                            </label>
                            <label className="block text-xs font-medium text-slate-200">
                              Location
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={exp.location}
                                onChange={(e) =>
                                  handleUpdateExperience(exp.id, { location: e.target.value })
                                }
                              />
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <label className="block text-xs font-medium text-slate-200">
                                Start date
                                <input
                                  type="text"
                                  placeholder="e.g. Jan 2022"
                                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                  value={exp.startDate}
                                  onChange={(e) =>
                                    handleUpdateExperience(exp.id, { startDate: e.target.value })
                                  }
                                />
                              </label>
                              <label className="block text-xs font-medium text-slate-200">
                                End date
                                <input
                                  type="text"
                                  placeholder="e.g. Present"
                                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                  value={exp.endDate}
                                  onChange={(e) =>
                                    handleUpdateExperience(exp.id, { endDate: e.target.value })
                                  }
                                />
                              </label>
                            </div>
                          </div>
                          <label className="block text-xs font-medium text-slate-200">
                            Responsibilities and achievements
                            <textarea
                              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                              rows={3}
                              value={exp.description}
                              onChange={(e) =>
                                handleUpdateExperience(exp.id, { description: e.target.value })
                              }
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStepId === 'education' && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-white">Education</h3>
                        <p className="text-xs text-slate-400">
                          List your most relevant qualifications. You can include short courses, but do not list
                          qualifications you have not actually completed unless clearly marked as in progress.
                        </p>
                      </div>
                      <Button size="sm" type="button" onClick={handleAddEducation}>
                        Add entry
                      </Button>
                    </div>
                    {cv.education.length === 0 && (
                      <p className="text-xs text-slate-400">Start with your highest or most recent qualification.</p>
                    )}
                    <div className="space-y-3">
                      {cv.education.map((edu, index) => (
                        <div
                          key={edu.id}
                          className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-semibold text-slate-200">
                              Entry {index + 1}
                            </p>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => handleReorderEducation(index, 'up')}
                                className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:bg-slate-800"
                              >
                                Up
                              </button>
                              <button
                                type="button"
                                onClick={() => handleReorderEducation(index, 'down')}
                                className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:bg-slate-800"
                              >
                                Down
                              </button>
                              <button
                                type="button"
                                onClick={() => handleRemoveEducation(edu.id)}
                                className="rounded-full border border-red-500/60 px-2 py-1 text-[10px] text-red-300 hover:bg-red-500/10"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <label className="block text-xs font-medium text-slate-200">
                              Institution
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={edu.institution}
                                onChange={(e) =>
                                  handleUpdateEducation(edu.id, { institution: e.target.value })
                                }
                              />
                            </label>
                            <label className="block text-xs font-medium text-slate-200">
                              Qualification
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={edu.qualification}
                                onChange={(e) =>
                                  handleUpdateEducation(edu.id, { qualification: e.target.value })
                                }
                              />
                            </label>
                            <label className="block text-xs font-medium text-slate-200">
                              Field of study
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={edu.fieldOfStudy}
                                onChange={(e) =>
                                  handleUpdateEducation(edu.id, { fieldOfStudy: e.target.value })
                                }
                              />
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <label className="block text-xs font-medium text-slate-200">
                                Start date
                                <input
                                  type="text"
                                  placeholder="e.g. 2020"
                                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                  value={edu.startDate}
                                  onChange={(e) =>
                                    handleUpdateEducation(edu.id, { startDate: e.target.value })
                                  }
                                />
                              </label>
                              <label className="block text-xs font-medium text-slate-200">
                                End date
                                <input
                                  type="text"
                                  placeholder="e.g. 2023 or Present"
                                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                  value={edu.endDate}
                                  onChange={(e) =>
                                    handleUpdateEducation(edu.id, { endDate: e.target.value })
                                  }
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStepId === 'skills' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white">Skills</h3>
                    <p className="text-xs text-slate-400">
                      List your skills honestly. Group them by type to make it easy for recruiters to scan.
                    </p>
                    <div className="space-y-3">
                      <label className="block text-xs font-medium text-slate-200">
                        Technical skills
                        <textarea
                          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                          rows={3}
                          value={cv.skills.technical}
                          onChange={(e) => handleUpdateSkills('technical', e.target.value)}
                        />
                        <p className="mt-1 text-[11px] text-slate-400">
                          Example: Programming languages, tools, platforms, or industry-specific software you actually
                          use.
                        </p>
                      </label>
                      <label className="block text-xs font-medium text-slate-200">
                        Soft skills
                        <textarea
                          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                          rows={3}
                          value={cv.skills.soft}
                          onChange={(e) => handleUpdateSkills('soft', e.target.value)}
                        />
                        <p className="mt-1 text-[11px] text-slate-400">
                          Example: Communication, teamwork, problem solving, leadership, adaptability.
                        </p>
                      </label>
                      <label className="block text-xs font-medium text-slate-200">
                        Languages
                        <textarea
                          className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                          rows={2}
                          value={cv.skills.languages}
                          onChange={(e) => handleUpdateSkills('languages', e.target.value)}
                        />
                        <p className="mt-1 text-[11px] text-slate-400">
                          List languages and proficiency levels accurately (for example, native, fluent, conversational).
                        </p>
                      </label>
                    </div>
                  </div>
                )}

                {activeStepId === 'certifications' && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-white">Certifications</h3>
                        <p className="text-xs text-slate-400">
                          Add certificates or short courses from recognised organisations. Only list certifications you
                          have actually completed.
                        </p>
                      </div>
                      <Button size="sm" type="button" onClick={handleAddCertification}>
                        Add certificate
                      </Button>
                    </div>
                    {cv.certifications.length === 0 && (
                      <p className="text-xs text-slate-400">You can leave this section blank if it does not apply.</p>
                    )}
                    <div className="space-y-3">
                      {cv.certifications.map((cert) => (
                        <div
                          key={cert.id}
                          className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-semibold text-slate-200">Certificate</p>
                            <button
                              type="button"
                              onClick={() => handleRemoveCertification(cert.id)}
                              className="rounded-full border border-red-500/60 px-2 py-1 text-[10px] text-red-300 hover:bg-red-500/10"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            <label className="block text-xs font-medium text-slate-200">
                              Certificate name
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={cert.name}
                                onChange={(e) =>
                                  handleUpdateCertification(cert.id, { name: e.target.value })
                                }
                              />
                            </label>
                            <label className="block text-xs font-medium text-slate-200">
                              Issuing organisation
                              <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                                value={cert.issuer}
                                onChange={(e) =>
                                  handleUpdateCertification(cert.id, { issuer: e.target.value })
                                }
                              />
                            </label>
                          </div>
                          <label className="block text-xs font-medium text-slate-200">
                            Date
                            <input
                              type="text"
                              placeholder="e.g. 2023"
                              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                              value={cert.date}
                              onChange={(e) =>
                                handleUpdateCertification(cert.id, { date: e.target.value })
                              }
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStepId === 'projects' && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-white">Projects</h3>
                        <p className="text-xs text-slate-400">
                          Highlight projects, case studies, or portfolios that demonstrate your skills. Include group or
                          academic projects where relevant.
                        </p>
                      </div>
                      <Button size="sm" type="button" onClick={handleAddProject}>
                        Add project
                      </Button>
                    </div>
                    {cv.projects.length === 0 && (
                      <p className="text-xs text-slate-400">
                        Projects are optional, but they are particularly useful for creative, technical, and graduate
                        roles.
                      </p>
                    )}
                    <div className="space-y-3">
                      {cv.projects.map((project) => (
                        <div
                          key={project.id}
                          className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-semibold text-slate-200">Project</p>
                            <button
                              type="button"
                              onClick={() => handleRemoveProject(project.id)}
                              className="rounded-full border border-red-500/60 px-2 py-1 text-[10px] text-red-300 hover:bg-red-500/10"
                            >
                              Remove
                            </button>
                          </div>
                          <label className="block text-xs font-medium text-slate-200">
                            Project name
                            <input
                              type="text"
                              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                              value={project.name}
                              onChange={(e) =>
                                handleUpdateProject(project.id, { name: e.target.value })
                              }
                            />
                          </label>
                          <label className="block text-xs font-medium text-slate-200">
                            Description
                            <textarea
                              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                              rows={3}
                              value={project.description}
                              onChange={(e) =>
                                handleUpdateProject(project.id, { description: e.target.value })
                              }
                            />
                          </label>
                          <label className="block text-xs font-medium text-slate-200">
                            Technologies or skills used
                            <input
                              type="text"
                              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                              value={project.technologies}
                              onChange={(e) =>
                                handleUpdateProject(project.id, { technologies: e.target.value })
                              }
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStepId === 'references' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white">References</h3>
                    <p className="text-xs text-slate-400">
                      You can either provide full reference details or use a short note such as “References available on
                      request”, depending on what is appropriate in your industry.
                    </p>
                    <label className="block text-xs font-medium text-slate-200">
                      References
                      <textarea
                        className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400/80"
                        rows={4}
                        value={cv.references}
                        onChange={(e) => handleUpdateReferences(e.target.value)}
                      />
                    </label>
                    <p className="text-[11px] text-slate-400">
                      In later stages you will be able to save drafts to your account, download PDFs, and optionally
                      request AI help to tidy language without inventing any information.
                    </p>
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={goPrev}
                    disabled={currentStepIndex === 0}
                  >
                    Previous
                  </Button>
                  <p className="flex-1 text-center text-[11px] text-slate-400">
                    Step {currentStepIndex + 1} of {STEPS.length}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    onClick={goNext}
                    disabled={currentStepIndex === STEPS.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: preview */}
            <div>
              <CvPreview template={template} cv={cv} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
