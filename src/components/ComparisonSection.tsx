/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, X, ShieldCheck, Flame, Scale, Minus } from "lucide-react";
import TiltCard from "./TiltCard";

export default function ComparisonSection() {
  const comparisonData = [
    {
      dimension: "Speed / Performance",
      siteBuilder: "Slow loading speeds due to heavy generic template codes & scripts.",
      agency: "Varies. Often relies on standard bloated CMS frameworks.",
      amphora: "Ultra-fast hand-coded React + Vite. Perfect 100/100 Google Lighthouse scores.",
      highlight: true,
    },
    {
      dimension: "Design Flexibility",
      siteBuilder: "Locked into rigid layout grids. Highly similar look-and-feel.",
      agency: "Fully customized, but additional layouts or pages cost premium hourly fees.",
      amphora: "Bespoke handcrafted mockups designed specifically for your brand. Unlimited iterations during draft phase.",
      highlight: true,
    },
    {
      dimension: "Upfront Cost Risk",
      siteBuilder: "Cheap subscription, but you must invest heavy hours trying to build it yourself.",
      agency: "High upfront down-payment required before seeing a single design slide.",
      amphora: "Zero financial risk. You get a fully customized homepage draft for free before you buy.",
      highlight: true,
    },
    {
      dimension: "SEO & Crawler Readability",
      siteBuilder: "Poor semantic tags. Slow mobile response and layout shifts.",
      agency: "Generally good standard tags, but separate custom copywriting fees apply.",
      amphora: "Pre-integrated Schema.org JSON-LD structured search metadata for high Google & Gemini listings.",
      highlight: true,
    },
    {
      dimension: "Support & Direct Collaboration",
      siteBuilder: "No personal developer. Generic support tickets with slow bots.",
      agency: "Complicated hierarchy with project managers instead of direct developers.",
      amphora: "Direct, personal line to your local developer in Nigeria. Fast responses.",
      highlight: true,
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="comparison">
      
      {/* Background spotlights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Transparent Market Analysis</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            Site builder, agency or{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              SCVLPT.STUDIO?
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            Every option has its price. And not just in Naira. See how we weigh up against standard industry templates and agencies.
          </p>
        </div>

        {/* Responsive Custom Comparison Matrix (Hidden on Mobile, replaced with scannable stack) */}
        <TiltCard 
          className="hidden lg:block border-4 border-black bg-white rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left" 
          id="comparison-matrix-desktop"
          maxTilt={3}
        >
          
          {/* Table Header */}
          <div className="grid grid-cols-4 border-b-4 border-black bg-neutral-100 p-6 items-center text-left text-xs font-mono tracking-widest uppercase text-black font-black">
            <span>Focus Dimension</span>
            <span>Site Builders (Wix/Squarespace)</span>
            <span>Classic Web Agency</span>
            <span className="text-purple-600 font-sans font-black flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-purple-600" />
              SCVLPT.STUDIO Solution
            </span>
          </div>

          {/* Table Rows */}
          <div className="divide-y-2 divide-black" id="comparison-matrix-rows">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-4 p-6 items-start text-left text-sm font-sans hover:bg-neutral-50 transition-colors">
                {/* Dimension label */}
                <span className="font-black text-black uppercase pr-4">{row.dimension}</span>
                
                {/* Site Builders */}
                <span className="text-neutral-500 font-semibold text-xs pr-4 flex gap-2">
                  <Minus className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  {row.siteBuilder}
                </span>
                
                {/* Classic Agency */}
                <span className="text-neutral-500 font-semibold text-xs pr-4 flex gap-2">
                  <Minus className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  {row.agency}
                </span>
                
                {/* Amphora */}
                <span className="text-black text-xs pl-3 border-l-2 border-black font-black flex gap-2 bg-purple-50 p-2 border-2 border-black rounded-none">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  {row.amphora}
                </span>
              </div>
            ))}
          </div>

        </TiltCard>

        {/* Mobile-Friendly Comparison Accordions (Shown only on small screens) */}
        <div className="lg:hidden space-y-4" id="comparison-matrix-mobile">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="rounded-none border-4 border-black bg-white p-5 space-y-4 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-xs font-mono text-purple-600 font-black tracking-wider uppercase block">
                {row.dimension}
              </span>
              
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3.5 rounded-none bg-neutral-50 border-2 border-black space-y-1">
                  <span className="text-neutral-500 block font-black uppercase font-mono">Site Builder (Wix/Squarespace)</span>
                  <p className="text-neutral-600 font-semibold">{row.siteBuilder}</p>
                </div>
                
                <div className="p-3.5 rounded-none bg-neutral-50 border-2 border-black space-y-1">
                  <span className="text-neutral-500 block font-black uppercase font-mono">Classic Web Agency</span>
                  <p className="text-neutral-600 font-semibold">{row.agency}</p>
                </div>

                <div className="p-3.5 rounded-none bg-purple-50 border-2 border-black space-y-1">
                  <span className="text-purple-600 block font-black uppercase font-mono flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    SCVLPT.STUDIO Solution
                  </span>
                  <p className="text-black font-black">{row.amphora}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
