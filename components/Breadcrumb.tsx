'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbProps {
  venueName: string;
}

export default function Breadcrumb({ venueName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center" aria-label="breadcrumbs">
      <ol className="flex items-center gap-2 text-xs sm:text-sm">
        <li>
          <Link href="/" className="text-slate-400 hover:text-amber-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        </li>
        <li>
          <Link href="/featured-venue" className="text-slate-400 hover:text-amber-400 transition-colors">
            Featured Venue
          </Link>
        </li>
        <li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        </li>
        <li>
          <span className="text-slate-100 font-medium truncate max-w-[200px] sm:max-w-none inline-block">
            {venueName}
          </span>
        </li>
      </ol>
    </nav>
  );
}
