'use client';
import { MapPin, Building2, Users, Wallet, Maximize2, ExternalLink, CalendarCheck, ArrowRight } from 'lucide-react';
import type { Venue } from '@/data/venue';

interface VenueDetailInfoProps {
  venue: Venue;
}

export default function VenueDetailInfo({ venue }: VenueDetailInfoProps) {
  const paxCapacity = venue.halls.reduce((acc, curr) => acc + curr.maxPax, 0);

  return (
    <section className="flex flex-col gap-8 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
              {venue.name}
            </h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps?q=${venue.address.latitude},${venue.address.longitude}`}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm"
            >
              <MapPin className="w-4 h-4 shrink-0 text-amber-500" />
              <span>
                {venue.address.street}, {venue.address.city.name}
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          <button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold text-sm transition-all duration-300 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/25 shrink-0">
            <CalendarCheck className="w-4 h-4" />
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/20">
              <Building2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">{venue.hallCount}</p>
              <p className="text-xs text-slate-400">Halls</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/20">
              <Maximize2 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">{venue.size.toLocaleString()}</p>
              <p className="text-xs text-slate-400">Sq Ft</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/20">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">{paxCapacity.toLocaleString()}</p>
              <p className="text-xs text-slate-400">Max Capacity</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/20">
              <Wallet className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">NPR {venue.minPrice.toLocaleString()}</p>
              <p className="text-xs text-slate-400">Starting Price/Pax</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      {venue.facilities.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Facilities
          </h3>
          <div className="flex flex-wrap gap-2">
            {venue.facilities.map((item, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 text-slate-300 text-xs sm:text-sm border border-slate-800 transition-colors hover:border-amber-500/40"
              >
                {item.facility.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      {venue.description && (
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            About This Venue
          </h3>
          <div
            className="prose prose-sm sm:prose-base prose-invert max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-headings:text-white prose-strong:text-white prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: venue.description }}
          />
          {/* Hydration timestamp */}
          <p className="text-xs text-slate-500 mt-2">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      )}
    </section>
  );
}
