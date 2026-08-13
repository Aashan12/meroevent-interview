'use client';

import Image from 'next/image';
import { Building2, MapPin, Users } from 'lucide-react';
import type { Venue } from '@/data/venue';

interface MoreVenueCardProps {
  venue: Venue;
}

export default function MoreVenueCard({ venue }: MoreVenueCardProps) {
  const paxCapacity = venue.halls.reduce((acc, curr) => acc + curr.maxPax, 0);
  const photoSrc = venue.photos[0]
    ? `${venue.photos[0].path}/${venue.photos[0].filename}`
    : '/images/dusitthani.JPG';

  return (
    <div className="group relative h-full rounded-2xl bg-[#0b1324] border border-slate-800/80 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10 min-w-[280px] max-w-[300px]">
      {/* Image Section */}
      <div className="block relative h-[190px] overflow-hidden bg-slate-950 isolate cursor-pointer">
        <Image
          src={photoSrc}
          fill
          alt={venue.name || ''}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1324] via-transparent to-transparent pointer-events-none" />

        {venue.minPrice && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/60 shadow-lg">
            <span className="text-xs font-semibold text-white drop-shadow-sm">
              From NPR {venue.minPrice.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-bold text-white capitalize truncate transition-colors group-hover:text-amber-400 cursor-pointer">
            {venue.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-500" />
            <span className="text-xs sm:text-sm truncate">
              {[venue.address.street, venue.address.city.name].filter(Boolean).join(', ')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap mt-1">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium">{venue.hallCount} Halls</span>
          </div>
          {paxCapacity > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-medium">{paxCapacity} Guests</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
