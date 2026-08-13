'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users, Utensils, Eye, CalendarCheck, ImageOff } from 'lucide-react';
import type { Hall } from '@/data/venue';

interface VenueHallCardProps {
  hall: Hall;
}

export default function VenueHallCard({ hall }: VenueHallCardProps) {
  const [imgError, setImgError] = useState(false);

  // Intentional bug #1: Himalayan Lawn (id: 4) has a broken image src for the candidate to fix
  const photoSrc = hall.photos[0]
    ? `${hall.photos[0].path}/${hall.id === 4 ? 'Himalayan_Lawn.jpeg' : hall.photos[0].filename}`
    : '/images/dusitthani.JPG';

  return (
    <div className="group relative h-full rounded-2xl bg-[#0b1324] border border-slate-800/80 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10 min-w-[300px] max-w-[330px]">
      {/* Image Section */}
      <div className="relative h-[190px] w-full overflow-hidden bg-slate-950/80 isolate cursor-pointer">
        {!imgError ? (
          <Image
            src={photoSrc}
            fill
            alt={hall.name || ''}
            onError={() => setImgError(true)}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 330px"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600 bg-slate-900/60 p-4">
            <ImageOff className="w-8 h-8 text-slate-600" />
            <span className="text-xs text-slate-500 font-mono text-center">Image failed to load</span>
          </div>
        )}

        {/* Subtle Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1324] via-transparent to-transparent pointer-events-none" />

        {/* Price Badge */}
        {hall.pricePerPax && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-700/60 shadow-lg z-10">
            <span className="text-xs font-semibold text-white">NPR {hall.pricePerPax} / Pax</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-3.5">
        <h3 className="text-lg font-bold text-white capitalize truncate transition-colors group-hover:text-amber-400 cursor-pointer">
          {hall.name}
        </h3>

        {/* Stats Row */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium">
              {hall.minPax} - {hall.maxPax} Pax
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
            <Utensils className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium">NPR {hall.pricePerPax}/Pax</span>
          </div>
        </div>

        {/* Facilities */}
        {hall.venueHallFacilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {hall.venueHallFacilities.slice(0, 3).map((item) => (
              <span
                key={item.facilityId}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/40"
              >
                {item.facilities.name}
              </span>
            ))}
            {hall.venueHallFacilities.length > 3 && (
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-500 border border-slate-700/40">
                +{hall.venueHallFacilities.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-700/80 bg-slate-900/50 text-slate-200 text-xs sm:text-sm font-semibold transition-all duration-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white">
            <Eye className="w-4 h-4 text-slate-400" />
            <span>View Details</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-amber-600/25">
            <CalendarCheck className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
