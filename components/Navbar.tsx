'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutGrid, CalendarDays } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Default Top Header (Scrolls naturally with page) */}
      <header className="w-full bg-[#070b14] border-b border-slate-800/60 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 h-20 flex items-center justify-between">
          {/* Left: App Grid + Nav Links */}
          <div className="flex items-center gap-8">
            <button className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800/60">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Explore
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Packages
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Custom Booking
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Center: MeroEvent Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="relative flex items-center justify-center group">
              <Image
                src="/images/logo.svg"
                alt="MeroEvent Logo"
                width={50}
                height={50}
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Right: Planner & Profile Avatar */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900/90 text-white font-medium text-xs sm:text-sm rounded-full border border-slate-700/80 hover:border-slate-500 transition-all">
              <CalendarDays className="w-4 h-4 text-amber-400" />
              <span>Planner</span>
              <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-amber-500 text-white rounded-full text-[10px] font-bold">
                1
              </span>
            </button>

            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/80 cursor-pointer shadow-md">
              <Image
                src="/images/Avatar.png"
                alt="User Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Floating Scrolled Header Pill (Appears on scroll) */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 pointer-events-auto ${
          isScrolled
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-12 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-4 sm:gap-6 px-3 py-1.5 rounded-full bg-white/20 sm:bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl shadow-black/50">
          {/* Circular Logo */}
          <Link href="/" className="relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/logo.svg"
              alt="MeroEvent Logo"
              width={38}
              height={38}
              className="h-9 w-9 object-contain rounded-full shadow-md"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-5">
            <button className="text-white hover:text-amber-300 transition-colors p-1">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-white drop-shadow-sm">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Explore
              </Link>
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Packages
              </Link>
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Custom Booking
              </Link>
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Planner & Avatar */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-1.5 bg-[#172238]/90 text-white font-medium text-xs sm:text-sm rounded-full border border-slate-600/60 hover:bg-[#1f2d48] transition-all shadow-md">
              <CalendarDays className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">Planner</span>
              <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-amber-500 text-white rounded-full text-[10px] font-bold">
                1
              </span>
            </button>

            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-amber-400 cursor-pointer shadow-md">
              <Image
                src="/images/Avatar.png"
                alt="User Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
