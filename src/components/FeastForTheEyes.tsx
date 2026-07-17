/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Star, Shield, Smartphone, Heart, ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import { CASE_STUDIES } from "../data";
import InquiryModal from "./InquiryModal";
import TiltCard from "./TiltCard";

export default function FeastForTheEyes() {
  const [activeStudy, setActiveStudy] = useState("grechow");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const currentStudy = CASE_STUDIES.find((cs) => cs.id === activeStudy) || CASE_STUDIES[0];

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="feast-section">
      
      {/* Background ambient orbs */}
      <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Interactive Case Studies</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            ...and a{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              feast for the eyes
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            Beautiful layouts with solid business impact. Explore our recently delivered projects and check the live statistics.
          </p>
        </div>

        {/* Dynamic Portfolio Tabs Selector */}
        <div className="flex items-center justify-center gap-3 mb-12" id="portfolio-tabs">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(study.id)}
              className={`px-5 py-2 rounded-none text-xs font-mono tracking-wider uppercase border-2 border-black transition-all cursor-pointer ${
                activeStudy === study.id
                  ? "bg-black text-white shadow-[2px_2px_0px_0px_#7c3aed]"
                  : "bg-white text-black hover:bg-neutral-50"
              }`}
              id={`portfolio-tab-btn-${study.id}`}
            >
              {study.client}
            </button>
          ))}
        </div>

        {/* Case Study Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="portfolio-grid-content">
          
          {/* Left Column (Spans 5 cols): Client metrics and testimonial text */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left" id="portfolio-copy-container">
            <div className="space-y-6">
              
              {/* Category tag */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-none text-[10px] font-mono uppercase bg-white border-2 border-black text-purple-600 font-black">
                  {currentStudy.category}
                </span>
                <span className="text-black font-mono text-[10px]">•</span>
                <span className="text-black font-mono text-[10px] font-black uppercase">{currentStudy.client}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-black tracking-tighter uppercase leading-none">
                {currentStudy.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-xs sm:text-[13px] font-sans font-semibold leading-relaxed">
                {currentStudy.description}
              </p>

              {/* Metrics Display */}
              <div className="p-5 rounded-none border-4 border-black bg-white flex items-center gap-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" id="portfolio-metrics-pill">
                <div className="p-3.5 rounded-none bg-neutral-100 border-2 border-black text-black shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-mono font-black text-black">{currentStudy.metrics}</span>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-black mt-0.5">
                    {currentStudy.metricLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action trigger */}
            <div className="pt-6 border-t-2 border-black">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="px-6 py-3 rounded-none bg-black border-2 border-black text-white hover:bg-neutral-800 font-sans font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-[4px_4px_0px_0px_#7c3aed] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#7c3aed] transition-all cursor-pointer"
                id="portfolio-inquire-btn"
              >
                <span>Read case study & request draft</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Right Column (Spans 7 cols): Custom glass device frame + portrait overlays */}
          <div className="lg:col-span-7 relative" id="portfolio-mockup-container">
            {/* Browser container mock */}
            <TiltCard 
              className="relative rounded-none border-4 border-black bg-white p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-between" 
              id="portfolio-mockup-card"
              maxTilt={8}
            >
              
              {/* Browser window decoration bar */}
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <div className="flex items-center gap-1.5" id="browser-dots-mini">
                  <span className="w-2.5 h-2.5 rounded-full border border-black bg-black" />
                  <span className="w-2.5 h-2.5 rounded-full border border-black bg-black" />
                  <span className="w-2.5 h-2.5 rounded-full border border-black bg-black" />
                </div>
                <span className="text-[9px] font-mono text-black font-black uppercase tracking-wider">
                  {currentStudy.client.toLowerCase().replace(" ", "")}-draft.amphora.de
                </span>
                <div className="w-4" />
              </div>

              {/* Grid content inside mockup */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1" id="portfolio-mock-body">
                
                {/* Left: Client custom branding screen mockup */}
                <div className="p-4 rounded-none bg-white border-2 border-black text-left space-y-4 shadow-[4px_4px_0px_0px_#1a1a1a]" id="portfolio-mock-screen">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-none bg-black text-white border border-black font-sans font-black text-[9px] flex items-center justify-center">
                      {currentStudy.logoText}
                    </span>
                    <span className="text-xs font-sans font-black uppercase text-black">{currentStudy.client}</span>
                  </div>

                  <p className="text-sm font-sans font-black text-black leading-snug">
                    {currentStudy.mockupText}
                  </p>

                  <div className="space-y-1.5">
                    <span className="w-16 h-1.5 bg-neutral-200 border border-black rounded-none block" />
                    <span className="w-12 h-1.5 bg-neutral-200 border border-black rounded-none block" />
                  </div>

                  <button type="button" className="w-full py-1.5 bg-black text-[9px] text-white font-sans font-black uppercase rounded-none border border-black pointer-events-none">
                    Kostenlose Beratung
                  </button>
                </div>

                {/* Right: Customer portrait in container with custom overlay */}
                <div className="relative h-48 md:h-full min-h-[200px] rounded-none overflow-hidden border-2 border-black group" id="portfolio-mock-photo">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    id="portfolio-mock-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Micro customer rating bubble */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white border-2 border-black p-2 rounded-none flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <img
                      src={currentStudy.image}
                      alt="avatar"
                      className="w-6 h-6 rounded-none object-cover border border-black"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <span className="text-[9px] font-sans font-black text-black block uppercase">Larisa G.</span>
                      <span className="text-[8px] font-sans text-neutral-600 font-semibold block">"Die Buchungsquote hat sich verdoppelt."</span>
                    </div>
                  </div>
                </div>

              </div>

            </TiltCard>
          </div>

        </div>

      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </section>
  );
}
