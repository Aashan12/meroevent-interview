'use client';

import Image from 'next/image';
import { LayoutGrid } from 'lucide-react';
import { useState } from 'react';
import type { VenuePhoto } from '@/data/venue';

interface ImagePreviewGridProps {
  photos: VenuePhoto[];
}

export default function ImagePreviewGrid({ photos }: ImagePreviewGridProps) {
  const [showGallery, setShowGallery] = useState(false);
  const primaryPhoto = photos[0];
  const thumbnails = photos.slice(1, 5);

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-4 h-auto lg:h-[480px]">
          {/* Primary Hero Image (Left) */}
          <div
            className="relative h-[260px] sm:h-[340px] lg:h-full rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
            onClick={() => setShowGallery(true)}
          >
            <Image
              src={`${primaryPhoto.path}/${primaryPhoto.filename}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              alt={primaryPhoto.name}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnail 2x2 Grid (Right) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-[260px] sm:h-[340px] lg:h-full">
            {thumbnails.map((photo, index) => {
              const isLastThumbnail = index === 3;
              return (
                <div
                  key={photo.id}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                  onClick={() => setShowGallery(true)}
                >
                  <Image
                    src={`${photo.path}/${photo.filename}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={photo.name || ''}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />

                  {/* 'More images' button on 4th thumbnail */}
                  {isLastThumbnail && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowGallery(true);
                      }}
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-white text-xs font-semibold shadow-xl hover:bg-slate-900 transition-all cursor-pointer z-10"
                    >
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>More images</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox / Gallery Modal */}
      {showGallery && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGallery(false)}
        >
          <div
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900"
              >
                <Image
                  src={`${photo.path}/${photo.filename}`}
                  fill
                  className="object-cover"
                  alt={photo.name}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
