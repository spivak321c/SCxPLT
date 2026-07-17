/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Shield, Cpu, Activity, Search, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import TiltCard from "./TiltCard";

export default function ProvenSystem() {
  return (
    <section className="relative py-24 bg-[#f8f9fa] overflow-hidden" id="system-section">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Engineered Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-snug">
            You get a{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              proven system
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            We don't build standard online brochures. We compile lightweight web structures optimized for high conversion, search crawlers, and future expansion.
          </p>
        </div>

        {/* System Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" id="system-grid">
          
          {/* Left Column (Spans 5 cols): Performance Gauge Card */}
          <TiltCard 
            className="lg:col-span-5 rounded-none border-4 border-black bg-white p-6 md:p-8 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left" 
            id="performance-metric-card"
            maxTilt={6}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-black">Core Web Vitals</span>
              <h3 className="text-lg font-sans font-black uppercase text-black">Google Lighthouse: 100/100</h3>
              <p className="text-neutral-600 text-xs sm:text-[13px] font-sans font-semibold leading-relaxed">
                Speed is a critical ranking factor. Our custom React stack contains no heavy page builders, meaning your pages load in under 400ms.
              </p>
            </div>

            {/* Circular Gauge Visualization */}
            <div className="relative py-8 flex items-center justify-center" id="gauge-container">
              <div className="w-36 h-36 rounded-full border-4 border-black bg-neutral-50 flex items-center justify-center relative">
                {/* Active animated stroke */}
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent animate-slow-spin" />
                
                <div className="text-center space-y-0.5">
                  <span className="text-3.5xl font-mono font-black text-emerald-600">100</span>
                  <p className="text-[9px] text-black uppercase font-mono font-black tracking-wider">Performance</p>
                </div>
              </div>
              
              {/* Outer floating status capsules */}
              <div className="absolute top-4 left-4 bg-white border-2 border-black rounded-none px-2.5 py-1 text-[9px] font-mono text-black font-black flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                LCP 0.6s
              </div>
              <div className="absolute bottom-6 right-4 bg-white border-2 border-black rounded-none px-2.5 py-1 text-[9px] font-mono text-black font-black flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                CLS 0.01
              </div>
            </div>
          </TiltCard>

          {/* Right Column (Spans 7 cols): Crawler & Multi-device Dashboard */}
          <TiltCard 
            className="lg:col-span-7 rounded-none border-4 border-black bg-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left" 
            id="dashboard-architecture-card"
            maxTilt={6}
          >
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-600 font-black">Indexability & SEO</span>
              <h3 className="text-lg font-sans font-black uppercase text-black">Built for humans and bots</h3>
              <p className="text-neutral-600 text-xs sm:text-[13px] font-sans font-semibold leading-relaxed">
                We integrate rich Schema.org metadata and structured JSON-LD into your core code. This makes your business services instantly legible to search engines (Google) and AI-guided recommendation models (Gemini, ChatGPT).
              </p>
            </div>

            {/* Simulated Structured Code Editor inside dashboard */}
            <div className="mt-8 rounded-none border-2 border-black bg-[#f8f9fa] p-4 font-mono text-[11px] text-neutral-800 space-y-3 shadow-none" id="code-snippet-box">
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2 text-[10px] text-black font-black">
                <span className="flex items-center gap-1.5 uppercase">
                  <span className="w-2.5 h-2.5 bg-black rotate-45" />
                  ld+json metadata
                </span>
                <span>schema.json</span>
              </div>
              
              <div className="space-y-1 text-left overflow-x-auto select-none font-bold">
                <div><span className="text-purple-600">"{"@context"}"</span>: <span className="text-emerald-600">"https://schema.org"</span>,</div>
                <div><span className="text-purple-600">"{"@type"}"</span>: <span className="text-emerald-600">"LocalBusiness"</span>,</div>
                <div><span className="text-purple-600">"name"</span>: <span className="text-emerald-600">"Grechow's Beauty"</span>,</div>
                <div><span className="text-purple-600">"address"</span>: {"{"}</div>
                <div className="pl-4"><span className="text-purple-600">"addressLocality"</span>: <span className="text-emerald-600">"Bremen"</span>,</div>
                <div className="pl-4"><span className="text-purple-600">"postalCode"</span>: <span className="text-emerald-600">"28195"</span></div>
                <div>{"}"},</div>
                <div><span className="text-purple-600">"geo"</span>: {"{"} <span className="text-neutral-500">latitude: 53.0793, longitude: 8.8017</span> {"}"}</div>
              </div>
            </div>

            {/* Small stats pill features */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t-2 border-black" id="stats-pill-features">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-black shrink-0" />
                <span className="text-[11px] text-neutral-800 font-sans font-black uppercase">Semantic search</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-black shrink-0" />
                <span className="text-[11px] text-neutral-800 font-sans font-black uppercase">Responsive layouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-black shrink-0" />
                <span className="text-[11px] text-neutral-800 font-sans font-black uppercase">Automated sitemaps</span>
              </div>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}
