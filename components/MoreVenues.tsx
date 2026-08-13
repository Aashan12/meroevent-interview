'use client';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MoreVenueCard from './MoreVenueCard';
import type { Venue } from '@/data/venue';
import Link from 'next/link';

interface MoreVenuesProps {
  venues: Venue[];
}

export default function MoreVenues({ venues }: MoreVenuesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!venues || venues.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mt-16 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Explore More Featured Venues</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Discover similar venues you might like</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="rounded-full size-10 border border-slate-700 text-slate-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 transition-all bg-slate-900/60"
              aria-label="Scroll left"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="rounded-full size-10 border border-slate-700 text-slate-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 transition-all bg-slate-900/60"
              aria-label="Scroll right"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
          <Link
            href="/featured-venue"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-all hover:border-amber-500 hover:text-amber-400 bg-slate-900/60"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-6 scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* BUG #3: Using array index as key instead of venue.id */}
        {venues.map((venue, index) => (
          <div key={index} className="shrink-0">
            <MoreVenueCard venue={venue} />
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden flex-col items-center gap-3 mt-4">
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="rounded-full size-10 border border-slate-700 text-slate-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 transition-all bg-slate-900/60"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="rounded-full size-10 border border-slate-700 text-slate-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-400 transition-all bg-slate-900/60"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
        <Link
          href="/featured-venue"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-xs font-medium transition-all hover:border-amber-500 hover:text-amber-400 bg-slate-900/60"
        >
          View All Venues
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
