/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Star, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import InquiryModal from "./InquiryModal";
import TiltCard from "./TiltCard";

export default function Hero() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [activeTabInMock, setActiveTabInMock] = useState<"home" | "stats" | "booking">("home");

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:py-36 overflow-hidden flex items-center bg-[#f8f9fa]" id="hero-section">
      
      {/* Background ambient glowing gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 hero-grid-pattern bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Content Column */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left" id="hero-content">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none text-[10px] font-mono font-black uppercase tracking-widest text-black bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-float">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Now delivering: Free bespoke draft in 7 days</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-black tracking-tighter text-black uppercase leading-[0.9]" id="hero-title">
            <span className="text-stroke-black text-transparent block">
              Dream website?
            </span>
            <span className="block mt-1">
              Consider it done.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl font-sans font-semibold leading-relaxed" id="hero-subtitle">
            Professional websites, stunning landing pages & robust online shops custom-coded in Port Harcourt. 
            Get your first draft designed and presented in just <strong className="text-black font-black">7 days</strong> – completely free, no strings attached.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2" id="hero-cta-group">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="px-8 py-4 rounded-none bg-black border-2 border-black text-white font-sans font-black text-xs uppercase tracking-widest shadow-[6px_6px_0px_0px_#7c3aed] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#7c3aed] active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              id="hero-primary-cta"
            >
              Get a free draft
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#process"
              className="px-8 py-4 rounded-none bg-white border-2 border-black text-black hover:bg-neutral-50 font-sans font-black text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-1.5"
              id="hero-secondary-cta"
            >
              Learn our 4 steps
            </a>
          </div>

          {/* Social Proof stacked avatars */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t-2 border-black" id="hero-social-proof">
            <div className="flex -space-x-3" id="avatar-stack">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Happy client ${idx + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-black object-cover"
                  referrerPolicy="no-referrer"
                  id={`social-avatar-${idx}`}
                />
              ))}
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1" id="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                ))}
                <span className="text-xs font-mono font-black text-black ml-1.5">5.0 Rating</span>
              </div>
              <p className="text-xs font-sans text-neutral-600 font-semibold">
                Trusted by <strong className="text-black font-black">50+ local businesses</strong> & clinics in Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Right: Mockup Column */}
        <div className="lg:col-span-5 relative" id="hero-mockup-col">
          {/* Outer glowing halo behind browser */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/5 rounded-none blur-2xl pointer-events-none" />

          {/* Browser frame */}
          <TiltCard className="relative overflow-hidden rounded-none border-4 border-black bg-white shadow-[10px_10px_0px_0px_#1a1a1a]" id="browser-mockup">
            
            {/* Browser top-bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b-2 border-black bg-neutral-100">
              <div className="flex items-center gap-1.5" id="browser-dots">
                <span className="w-3 h-3 rounded-full border-2 border-black bg-rose-500" />
                <span className="w-3 h-3 rounded-full border-2 border-black bg-amber-400" />
                <span className="w-3 h-3 rounded-full border-2 border-black bg-emerald-400" />
              </div>
              <div className="px-4 py-1 rounded-none bg-white border-2 border-black text-[9px] font-mono font-black text-black tracking-wide w-48 truncate text-center">
                your-domain.com
              </div>
              <div className="w-6" /> {/* balance */}
            </div>

            {/* Interactive Browser Sandbox Content */}
            <div className="p-6 space-y-6 select-none text-current" id="browser-body">
              
              {/* Header inside mock */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-none border-2 border-black bg-purple-500" />
                  <span className="text-xs font-sans font-black uppercase tracking-tight text-black">Grechow's</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-6 h-1 rounded-none bg-black" />
                  <span className="w-6 h-1 rounded-none bg-black" />
                  <span className="w-6 h-1 rounded-none bg-black" />
                </div>
              </div>

              {/* Dynamic Interactive tab inside browser */}
              <div className="flex bg-neutral-100 p-1 rounded-none gap-1 border-2 border-black">
                {(["home", "stats", "booking"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTabInMock(tab)}
                    className={`flex-1 py-1.5 text-[10px] font-mono font-black uppercase tracking-wider rounded-none capitalize transition-colors cursor-pointer ${
                      activeTabInMock === tab
                        ? "bg-black text-white"
                        : "text-neutral-500 hover:text-black"
                    }`}
                    id={`mock-tab-${tab}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Body inside mock based on selected tab */}
              <div className="min-h-[140px] flex flex-col justify-between" id="mock-inner-body">
                 {activeTabInMock === "home" && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <p className="text-sm font-sans font-black text-black uppercase leading-snug tracking-tight">
                      Permanent <span className="text-purple-600 underline decoration-2 decoration-purple-600">more you.</span>
                    </p>
                    <div className="w-full h-12 rounded-none bg-white border-2 border-black flex items-center justify-between px-3">
                      <span className="text-[10px] text-neutral-500 font-mono font-bold">Free Consultation</span>
                      <span className="px-2 py-1 bg-black text-white text-[9px] font-mono font-black uppercase tracking-wide">Book</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-none border-2 border-black bg-emerald-400 text-black flex items-center justify-center">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider">Certified & verified</span>
                    </div>
                  </div>
                )}

                {activeTabInMock === "stats" && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-none bg-white border-2 border-black text-center shadow-[3px_3px_0px_0px_#1a1a1a]">
                        <span className="text-lg font-mono font-black text-purple-600">+104%</span>
                        <p className="text-[9px] text-neutral-500 font-mono uppercase font-black mt-1">Bookings</p>
                      </div>
                      <div className="p-3 rounded-none bg-white border-2 border-black text-center shadow-[3px_3px_0px_0px_#1a1a1a]">
                        <span className="text-lg font-mono font-black text-orange-600">-12h</span>
                        <p className="text-[9px] text-neutral-500 font-mono uppercase font-black mt-1">Admin / Week</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-600 font-sans font-semibold text-center">
                      Real statistics validated after launching their new customized booking app.
                    </p>
                  </div>
                )}

                 {activeTabInMock === "booking" && (
                  <div className="space-y-3 animate-fade-in text-left">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-mono font-black">Select Service</span>
                    {[
                      { name: "Microblading Powder Brows", price: "₦45,000" },
                      { name: "Aquarell Lips Refinement", price: "₦39,000" },
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-none bg-white border-2 border-black">
                        <span className="text-[10px] text-neutral-800 font-sans font-bold">{s.name}</span>
                        <span className="text-[10px] text-black font-mono font-black">{s.price}</span>
                      </div>
                    ))}
                    <span className="text-[9px] text-emerald-600 font-mono font-black text-center block uppercase tracking-wider">✓ Multi-device synchronized</span>
                  </div>
                )}
              </div>

              {/* Status bar inside mock */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-black text-[9px] text-neutral-500 font-mono font-bold">
                <span className="flex items-center gap-1 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync Active
                </span>
                <span className="uppercase tracking-wider">Port Harcourt, NG</span>
              </div>
            </div>

          </TiltCard>
        </div>

      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </section>
  );
}
