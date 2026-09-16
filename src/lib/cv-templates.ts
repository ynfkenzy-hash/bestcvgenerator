export type CvTemplateId =
  | 'classic-professional'
  | 'modern-minimalist'
  | 'corporate-executive'
  | 'creative-portfolio'
  | 'graduate-starter'
  | 'hospitality-customer-service';

export interface CvTemplateMeta {
  id: CvTemplateId;
  name: string;
  description: string;
  category: string;
  accentClass: string;
  borderClass: string;
  badge: string;
}

export const CV_TEMPLATES: CvTemplateMeta[] = [
  {
    id: 'classic-professional',
    name: 'Classic Professional',
    description:
      'Clean, traditional layout ideal for corporate, finance, legal, and administrative roles.',
    category: 'Corporate / General',
    accentClass: 'text-sky-400',
    borderClass: 'border-sky-500/50',
    badge: 'Most popular',
  },
  {
    id: 'modern-minimalist',
    name: 'Modern Minimalist',
    description:
      'Subtle use of space and typography for design-conscious professionals and tech roles.',
    category: 'Tech / Design',
    accentClass: 'text-emerald-400',
    borderClass: 'border-emerald-500/50',
    badge: 'ATS-friendly',
  },
  {
    id: 'corporate-executive',
    name: 'Corporate Executive',
    description:
      'Structured profile section with strong emphasis on achievements and leadership impact.',
    category: 'Management / Leadership',
    accentClass: 'text-amber-300',
    borderClass: 'border-amber-400/60',
    badge: 'Leadership focus',
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    description:
      'Flexible sections for projects, case studies, and links without sacrificing ATS readability.',
    category: 'Marketing / Creative',
    accentClass: 'text-fuchsia-300',
    borderClass: 'border-fuchsia-400/60',
    badge: 'Showcase projects',
  },
  {
    id: 'graduate-starter',
    name: 'Graduate Starter',
    description:
      'Focus on education, projects, and transferable skills for students and recent graduates.',
    category: 'Students / Graduates',
    accentClass: 'text-sky-300',
    borderClass: 'border-sky-400/60',
    badge: 'Early careers',
  },
  {
    id: 'hospitality-customer-service',
    name: 'Hospitality & Customer Service',
    description:
      'Service-focused layout that highlights reliability, communication, and customer-facing skills.',
    category: 'Service / Retail / Hospitality',
    accentClass: 'text-lime-300',
    borderClass: 'border-lime-300/60',
    badge: 'Service-focused',
  },
];

export function getTemplateById(id: CvTemplateId): CvTemplateMeta {
  const template = CV_TEMPLATES.find((t) => t.id === id);
  if (!template) {
    return CV_TEMPLATES[0]!;
  }
  return template;
}
