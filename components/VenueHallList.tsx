'use client';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import VenueHallCard from './VenueHallCard';
import type { Hall } from '@/data/venue';

interface VenueHallListProps {
  halls: Hall[];
}

export default function VenueHallList({ halls }: VenueHallListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!halls || halls.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mt-14 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Available Halls</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {halls.length} {halls.length === 1 ? 'hall' : 'halls'} available for booking
          </p>
        </div>
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
      </div>

      {/* Cards Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-6 scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {halls.map((hall) => (
          <div key={hall.id} className="shrink-0">
            <VenueHallCard hall={hall} />
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden gap-3 justify-center mt-3">
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
    </div>
  );
}
