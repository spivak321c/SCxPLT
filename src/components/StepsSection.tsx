/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PhoneCall, Sparkles, CodeXml, Rocket, ArrowUpRight } from "lucide-react";
import { STEPS } from "../data";
import InquiryModal from "./InquiryModal";
import TiltCard from "./TiltCard";

export default function StepsSection() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Helper to render step-specific icon
  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case "PhoneCall":
        return <PhoneCall className="w-5 h-5 text-black" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-black" />;
      case "CodeXml":
        return <CodeXml className="w-5 h-5 text-black" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-black" />;
      default:
        return <Sparkles className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#f8f9fa] overflow-hidden" id="process">
      
      {/* Background ambient orbs along path */}
      <div className="absolute top-[20%] left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Interactive Timeline</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            It's this simple,{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              in 4 steps
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            This is how your business idea transforms into a fully deployed, customer-converting masterpiece.
          </p>
        </div>

        {/* Steps Layout Grid / Line Connector */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-start" id="steps-container">
          
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-10 right-10 h-[3px] bg-black z-0" />

          {STEPS.map((step) => {
            return (
              <TiltCard
                key={step.number}
                className="relative flex flex-col items-start space-y-4 z-10 group bg-white border-4 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                id={`step-card-${step.number}`}
                maxTilt={10}
              >
                {/* Header Icon + Number bubble */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-3.5 rounded-none border-2 border-black bg-neutral-100 shadow-[2px_2px_0px_0px_#1a1a1a]"
                    id={`step-icon-container-${step.number}`}
                  >
                    {renderStepIcon(step.icon)}
                  </div>

                  {/* Badge & Number label */}
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-black text-black uppercase px-2 py-0.5 rounded-none bg-white border-2 border-black">
                      {step.badge}
                    </span>
                    <span className="text-2xl font-mono font-black text-black group-hover:text-purple-600 transition-colors">
                      0{step.number}
                    </span>
                  </div>
                </div>

                {/* Body details */}
                <div className="space-y-2 pt-2 text-left">
                  <h3 className="text-base font-sans font-black uppercase text-black group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-[13px] font-sans font-semibold leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-20 text-center space-y-6 relative" id="steps-cta-wrapper">
          
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-black border-2 border-black text-white font-sans font-black text-xs uppercase tracking-widest shadow-[6px_6px_0px_0px_#7c3aed] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#7c3aed] transition-all cursor-pointer"
            id="steps-action-btn"
          >
            <span>Get your free draft upfront</span>
            <ArrowUpRight className="w-4 h-4 text-purple-400" />
          </button>
          
          <p className="text-xs font-mono text-neutral-500 font-black tracking-widest uppercase">
            ✓ NO RISK • 7-DAY DELIVERY • MADE IN NIGERIA
          </p>
        </div>

      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </section>
  );
}
