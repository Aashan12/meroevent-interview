'use client';
import { Heart, MapPin, Share2 } from 'lucide-react';
import { useState } from 'react';

interface NavActionsProps {
  latitude: number;
  longitude: number;
}

export default function NavActions({ latitude, longitude }: NavActionsProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://maps.google.com/maps?q=${latitude},${longitude}&z=14`}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-medium transition-all hover:border-slate-500 hover:text-white"
      >
        <MapPin className="w-4 h-4 text-slate-400" />
        <span className="hidden sm:inline">Directions</span>
      </a>
      <button
        onClick={() => console.log('Share clicked')}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-medium transition-all hover:border-slate-500 hover:text-white"
      >
        <Share2 className="w-4 h-4 text-slate-400" />
        <span className="hidden sm:inline">Share</span>
      </button>
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
          isLiked
            ? 'bg-red-500/10 border-red-500/50 text-red-400'
            : 'bg-slate-900/80 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white'
        }`}
      >
        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-400 text-red-400' : 'text-slate-400'}`} />
        <span className="hidden sm:inline">{isLiked ? 'Saved' : 'Save'}</span>
      </button>
    </div>
  );
}
