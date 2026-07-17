/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CLIENT_LOGOS } from "../data";

export default function MarqueeSection() {
  return (
    <section className="py-10 bg-[#f8f9fa] border-y-4 border-black overflow-hidden relative select-none" id="marquee-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
        <p className="text-center text-[10px] font-mono tracking-widest text-black uppercase font-black">
          Together we've built great things for local leaders
        </p>
      </div>

      {/* Marquee track wrapper */}
      <div className="relative flex w-full overflow-x-hidden">
        {/* Subtle gradients to fade marquee edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Dynamic sliding tracks */}
        <div className="flex gap-12 py-3 animate-marquee whitespace-nowrap min-w-full justify-around items-center" id="marquee-track">
          {/* First loop of logos */}
          {CLIENT_LOGOS.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-black transition-colors duration-300 font-sans font-black uppercase tracking-wider text-sm md:text-base cursor-default"
              id={`marquee-logo-a-${idx}`}
            >
              <span className="w-2 h-2 bg-black rotate-45" />
              {logo.name}
            </div>
          ))}

          {/* Duplicated loop of logos to achieve seamless scroll */}
          {CLIENT_LOGOS.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-black transition-colors duration-300 font-sans font-black uppercase tracking-wider text-sm md:text-base cursor-default"
              id={`marquee-logo-b-${idx}`}
            >
              <span className="w-2 h-2 bg-black rotate-45" />
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
