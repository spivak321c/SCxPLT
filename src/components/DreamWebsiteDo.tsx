/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MapPin, CalendarCheck, ShoppingBag, Share2, Check, ArrowRight, Sparkles } from "lucide-react";
import { WEBSITE_TYPES } from "../data";
import InquiryModal from "./InquiryModal";
import TiltCard from "./TiltCard";

export default function DreamWebsiteDo() {
  const [activeType, setActiveType] = useState("local");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const selectedData = WEBSITE_TYPES.find((w) => w.id === activeType) || WEBSITE_TYPES[0];

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-5 h-5" />;
      case "CalendarCheck":
        return <CalendarCheck className="w-5 h-5" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5" />;
      case "Share2":
        return <Share2 className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="work">
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Interactive Showcase</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            What should your{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              dream website
            </span>{" "}
            do?
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            Pick the business blueprint that matches your needs. Each format is meticulously engineered to achieve maximum conversions.
          </p>
        </div>

        {/* Tab Selection + Content Grid */}
        {/* Desktop Showcase: Grid layout (visible on lg screens and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch" id="dream-website-showcase-desktop">
          
          {/* Left: Tab selectors (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-col gap-3 pb-4 lg:pb-0" id="website-tabs-list">
            {WEBSITE_TYPES.map((type) => {
              const isActive = type.id === activeType;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`flex items-center gap-4 p-4 rounded-none border-4 border-black text-left transition-all cursor-pointer select-none ${
                    isActive
                      ? "bg-black text-white shadow-[4px_4px_0px_0px_var(--shadow-color,rgba(0,0,0,1))]"
                      : "bg-white text-neutral-600 hover:bg-neutral-50"
                  }`}
                  id={`tab-select-${type.id}`}
                >
                  <div className={`p-3 rounded-none border-2 border-black shrink-0 ${isActive ? "bg-neutral-800 text-purple-400" : "bg-neutral-100 text-neutral-500"}`}>
                    {getIcon(type.icon)}
                  </div>
                  <div>
                    <h3 className={`font-sans font-black text-xs md:text-sm lg:text-base uppercase leading-tight ${isActive ? "text-white" : "text-black"}`}>{type.title}</h3>
                    <p className={`text-[9px] font-mono mt-0.5 tracking-wider uppercase font-black ${isActive ? "text-purple-300" : "text-neutral-400"}`}>
                      {type.id === "local" ? "Physical Bridge" : type.id === "salon" ? "Appointments" : type.id === "shop" ? "E-Commerce" : "Lead Gen"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Bespoke Active Panel (8 cols) */}
          <TiltCard 
            className="lg:col-span-8 rounded-none border-4 border-black bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
            id="showcase-active-panel"
            maxTilt={6}
          >
            
            {/* Left Column: Image with gradient cover */}
            <div className="relative min-h-[250px] md:min-h-full font-bold" id="showcase-panel-img-col">
              <img
                src={selectedData.image}
                alt={selectedData.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
                id="showcase-preview-img"
              />
              {/* Subtle visual gradient to blend image */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent" />
              
              <div className="absolute top-5 left-5 bg-white border-2 border-black rounded-none px-3 py-1 text-[9px] font-mono font-black uppercase text-black">
                Live Customer Blueprint
              </div>
            </div>

            {/* Right Column: Copy & features details */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6 text-left" id="showcase-panel-copy-col">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-black tracking-widest text-purple-600 uppercase">
                    {selectedData.tagline}
                  </span>
                  <h3 className="text-xl font-sans font-black uppercase text-black">
                    {selectedData.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 text-xs sm:text-[13px] font-sans font-semibold leading-relaxed">
                  {selectedData.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2" id="showcase-panel-features">
                  {selectedData.features.map((feature, i) => (
                    <div key={i} className="flex gap-2.5 text-xs text-neutral-700 font-sans font-semibold items-start">
                      <div className="p-0.5 rounded-none bg-emerald-100 text-emerald-800 border-2 border-black mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button inside active panel */}
              <div className="pt-4 border-t-2 border-black">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="w-full py-3 px-5 rounded-none bg-black border-2 border-black text-white font-sans font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all shadow-[4px_4px_0px_0px_#7c3aed] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#7c3aed] cursor-pointer"
                  id="showcase-cta-btn"
                >
                  <span>{selectedData.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </button>
              </div>
            </div>

          </TiltCard>

        </div>

        {/* Mobile Showcase: Vertical Accordion (visible below lg screens) */}
        <div className="block lg:hidden space-y-4" id="dream-website-showcase-mobile">
          {WEBSITE_TYPES.map((type) => {
            const isActive = type.id === activeType;
            return (
              <div 
                key={type.id} 
                className="border-4 border-black bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                id={`mobile-accordion-wrapper-${type.id}`}
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => setActiveType(isActive ? "" : type.id)}
                  className={`w-full flex items-center justify-between p-4 text-left select-none transition-colors cursor-pointer ${
                    isActive ? "bg-black text-white" : "bg-white text-black hover:bg-neutral-50"
                  }`}
                  id={`mobile-accordion-header-${type.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-none border-2 border-black shrink-0 ${
                      isActive ? "bg-neutral-800 text-purple-400" : "bg-neutral-100 text-neutral-500"
                    }`}>
                      {getIcon(type.icon)}
                    </div>
                    <div>
                      <h3 className="font-sans font-black text-xs sm:text-sm uppercase leading-tight">{type.title}</h3>
                      <p className={`text-[8px] sm:text-[9px] font-mono mt-0.5 tracking-wider uppercase font-black ${
                        isActive ? "text-purple-300" : "text-neutral-400"
                      }`}>
                        {type.id === "local" ? "Physical Bridge" : type.id === "salon" ? "Appointments" : type.id === "shop" ? "E-Commerce" : "Lead Gen"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`w-6 h-6 border-2 border-black flex items-center justify-center font-black text-xs shrink-0 ${
                    isActive ? "bg-purple-600 text-white" : "bg-neutral-100 text-black"
                  }`}>
                    {isActive ? "−" : "+"}
                  </div>
                </button>

                {/* Accordion Content Panel (Rendered only when active) */}
                {isActive && (
                  <div className="border-t-4 border-black bg-white" id={`mobile-accordion-content-${type.id}`}>
                    {/* Visual image banner */}
                    <div className="relative h-44 w-full">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
                      <div className="absolute top-3 left-3 bg-white border-2 border-black px-2 py-0.5 text-[8px] font-mono font-black uppercase text-black">
                        Live Customer Blueprint
                      </div>
                    </div>

                    {/* Copy details */}
                    <div className="p-4 space-y-4 text-left">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono font-black tracking-widest text-purple-600 uppercase block">
                          {type.tagline}
                        </span>
                        <h4 className="text-base font-sans font-black uppercase text-black">
                          {type.title}
                        </h4>
                      </div>

                      <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">
                        {type.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2 pt-1">
                        {type.features.map((feature, i) => (
                          <div key={i} className="flex gap-2 text-xs text-neutral-700 font-sans font-semibold items-start">
                            <div className="p-0.5 rounded-none bg-emerald-100 text-emerald-800 border-2 border-black mt-0.5 shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action CTA button */}
                      <div className="pt-3 border-t-2 border-black">
                        <button
                          onClick={() => setIsInquiryOpen(true)}
                          className="w-full py-2.5 px-4 rounded-none bg-black border-2 border-black text-white font-sans font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all shadow-[4px_4px_0px_0px_#7c3aed] cursor-pointer"
                        >
                          <span>{type.ctaText}</span>
                          <ArrowRight className="w-4 h-4 text-purple-400" />
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialType={activeType} />
    </section>
  );
}
