'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <nav className="hidden md:flex items-center gap-6 relative">
      {/* Timeline with dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setTimelineOpen(true)}
        onMouseLeave={() => setTimelineOpen(false)}
      >
        <button className="text-sm hover:text-[#5B6D87] transition font-medium flex items-center gap-1 py-2">
          Timeline
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {timelineOpen && (
          <div className="absolute top-full left-0 pt-2">
            <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="py-2">
              <Link
                href="/phase1"
                className="block px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="font-semibold text-sm text-gray-900">Phase I: 17th–19th Centuries</div>
                <div className="text-xs text-gray-600 mt-1">Early Migration within Southeast Asia</div>
              </Link>
              <Link
                href="/phase2"
                className="block px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="font-semibold text-sm text-gray-900">Phase II: 1840s–1940s</div>
                <div className="text-xs text-gray-600 mt-1">Building North America & The Pacific</div>
              </Link>
              <Link
                href="/phase3"
                className="block px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="font-semibold text-sm text-gray-900">Phase III: 1965–1997</div>
                <div className="text-xs text-gray-600 mt-1">Reforms, Refugees, and New Waves</div>
              </Link>
              <Link
                href="/phase4"
                className="block px-4 py-3 hover:bg-gray-100 transition"
              >
                <div className="font-semibold text-sm text-gray-900">Phase IV: 2000s–Present</div>
                <div className="text-xs text-gray-600 mt-1">Diversification and Cultural Resilience</div>
              </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Link href="/language" className="text-sm hover:text-[#5B6D87] transition font-medium">
        Language Power
      </Link>
      <Link href="/culture" className="text-sm hover:text-[#5B6D87] transition font-medium">
        Culture Symbols
      </Link>
      <Link href="/archives" className="text-sm hover:text-[#5B6D87] transition font-medium">
        Archives
      </Link>
      <Link href="/resources" className="text-sm hover:text-[#5B6D87] transition font-medium">
        Resources
      </Link>
    </nav>
  );
}
