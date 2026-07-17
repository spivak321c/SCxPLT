/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Sparkles, Star, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function BuiltWithHeart() {
  return (
    <section className="relative py-24 bg-[#f8f9fa] overflow-hidden" id="about-section">
      {/* Subtle background blur spots */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black">
            Built with{" "}
            <span className="text-red-600 inline-flex items-center gap-1.5 relative">
              heart
              <Heart className="w-5 h-5 text-red-600 fill-red-600 inline-block animate-pulse shrink-0" />
            </span>{" "}
            for your business
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            Our long-standing quality standards have proven themselves time and again. We merge cutting-edge visual design with solid engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch" id="about-grid">
          
          {/* Left Large Card: Image with text overlay (Spans 6 cols) */}
          <div className="md:col-span-6 relative overflow-hidden rounded-none border-4 border-black bg-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group flex flex-col justify-end min-h-[350px]" id="about-img-card">
            {/* Background image with lazy transition */}
            <img
              src="/src/assets/images/developer_at_desk_1784301816194.jpg"
              alt="Developer working on website in Bremen"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
              id="developer-office-img"
            />
            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            
            {/* Overlay label */}
            <div className="absolute top-5 left-5 bg-white border-2 border-black rounded-none px-3.5 py-1 text-[10px] font-mono uppercase text-black font-black">
              Bremen Headquarters
            </div>

            {/* Bottom Content overlay */}
            <div className="relative p-6 space-y-2 mt-auto text-left">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 font-black uppercase">Craftsmanship First</span>
              <h3 className="text-lg font-sans font-black uppercase text-white">Bespoke Design, No Templates</h3>
              <p className="text-zinc-200 text-xs font-sans max-w-md font-semibold leading-relaxed">
                We custom-write clean code instead of stacking heavy WordPress builders. This ensures your site loads instantly and scores 100% on performance metrics.
              </p>
            </div>
          </div>

          {/* Center Card: Local & Personal (Spans 3 cols) */}
          <div className="md:col-span-3 rounded-none border-4 border-black bg-white p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" id="about-local-card">
            <div className="space-y-4 text-left">
              <div className="p-3 rounded-none bg-neutral-100 border-2 border-black text-black w-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-sans font-black uppercase text-black">Local & personal</h3>
                <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">
                  A direct line to your dedicated developer. We collaborate locally in Bremen, ensuring you get transparent, fast communication and genuine consulting.
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t-2 border-black mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase tracking-wider font-black">
              <span>Made in Germany</span>
              <span className="w-2.5 h-2.5 bg-emerald-500 border border-black rounded-full" />
            </div>
          </div>

          {/* Right Card: More than just pretty (Spans 3 cols) */}
          <div className="md:col-span-3 rounded-none border-4 border-black bg-white p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" id="about-results-card">
            <div className="space-y-4 text-left">
              <div className="p-3 rounded-none bg-neutral-100 border-2 border-black text-black w-fit">
                <Star className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-sans font-black uppercase text-black">More than just pretty</h3>
                <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">
                  We design specifically to drive sales. Every button, outline, typography choice, and copy alignment is focused on transforming curious visitors into paying clients.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-black mt-6 flex items-center justify-between text-[10px] font-mono text-black uppercase tracking-wider font-black">
              <span>Conversion-focused</span>
              <Sparkles className="w-3.5 h-3.5 text-black" />
            </div>
          </div>

        </div>

        {/* Bottom Banner Row */}
        <div className="mt-8 p-6 md:p-8 rounded-none border-4 border-black bg-white flex flex-wrap items-center justify-between gap-6 shadow-[8px_8px_0px_0px_#7c3aed]" id="about-grid-footer">
          <p className="text-sm font-sans text-neutral-700 max-w-xl font-semibold leading-relaxed text-left">
            Our websites are tailor-engineered for businesses that demand high growth: local physical shops, cosmetics practices, physical/digital stores, and innovative B2B services.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-600 uppercase tracking-wider font-black">
            <span>Scroll down to see our process</span>
            <span className="inline-block animate-bounce font-sans text-sm">↓</span>
          </div>
        </div>

      </div>
    </section>
  );
}
