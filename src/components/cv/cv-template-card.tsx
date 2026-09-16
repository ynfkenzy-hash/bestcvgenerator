import Link from 'next/link';
import type { CvTemplateMeta } from '@/lib/cv-templates';

interface CvTemplateCardProps {
  template: CvTemplateMeta;
  onPreview?: () => void;
}

export function CvTemplateCard({ template, onPreview }: CvTemplateCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-white">{template.name}</h3>
          <p className="text-xs text-slate-400">{template.category}</p>
        </div>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] font-medium text-slate-200">
          {template.badge}
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-300">{template.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <button
          type="button"
          onClick={onPreview}
          className="rounded-full border border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-200 hover:bg-slate-900"
        >
          Preview layout
        </button>
        <Link
          href={`/builder?template=${template.id}`}
          className="rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-amber-300"
        >
          Use this template
        </Link>
        <span className="ml-auto text-[11px] text-slate-500">
          A4 · ATS-conscious formatting
        </span>
      </div>
    </article>
  );
}
