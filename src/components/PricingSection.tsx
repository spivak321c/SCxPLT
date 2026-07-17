/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Check, HelpCircle, ArrowRight, Sparkles, MessageSquare, ShoppingBag, ShieldAlert } from "lucide-react";
import { PRICING_PLANS } from "../data";
import InquiryModal from "./InquiryModal";
import TiltCard from "./TiltCard";

export default function PricingSection() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPlanContext, setSelectedPlanContext] = useState("local");

  const triggerInquiry = (planId: string) => {
    setSelectedPlanContext(planId);
    setIsInquiryOpen(true);
  };

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="pricing">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Transparent Packages</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            Where's the{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              catch?
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            There isn't one. Pick the right package for your business. We design and deliver a homepage draft for you <strong>first</strong>. You only buy if you love the result.
          </p>
        </div>

        {/* Pricing Cards Grid (2 main packages + extra CTAs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="pricing-grid">
          
          {/* Main packages mapping (Starts at col-span-8 total for the two) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" id="pricing-core-plans">
            {PRICING_PLANS.map((plan) => {
              const isPro = plan.popular;
              return (
                <TiltCard
                  key={plan.id}
                  className={`relative rounded-none p-6 md:p-8 flex flex-col justify-between border-4 border-black text-left transition-all ${
                    isPro
                      ? "bg-white shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(124,58,237,1)]"
                      : "bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                  id={`pricing-card-${plan.id}`}
                  maxTilt={8}
                >
                  {/* Pro/Popular tag */}
                  {isPro && (
                    <div className="absolute top-5 right-5 bg-purple-600 text-white text-[9px] font-mono font-black uppercase px-2.5 py-1 rounded-none border-2 border-black flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-white" />
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-sans font-black uppercase text-black">{plan.name}</h3>
                      <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price indicator */}
                    <div className="space-y-1">
                      <span className="text-3xl font-mono font-black text-black">{plan.price}</span>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-black">All-inclusive fixed price</p>
                    </div>

                    {/* Features separator line */}
                    <div className="h-[2px] bg-black" />

                    {/* Features bullets */}
                    <div className="space-y-3.5" id={`pricing-features-${plan.id}`}>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-2.5 text-xs text-neutral-700 font-sans font-semibold items-start">
                          <div className="p-0.5 rounded-none bg-purple-100 text-purple-800 border-2 border-black mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing action button */}
                  <div className="pt-8 mt-auto">
                    <button
                      onClick={() => triggerInquiry(plan.id === "pro" ? "salon" : "local")}
                      className={`w-full py-3.5 rounded-none font-sans font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all border-2 border-black cursor-pointer ${
                        isPro
                          ? "bg-black hover:bg-neutral-800 text-white shadow-[4px_4px_0px_0px_#7c3aed]"
                          : "bg-neutral-100 hover:bg-neutral-200 text-black"
                      }`}
                      id={`pricing-action-btn-${plan.id}`}
                    >
                      <span>{plan.ctaText}</span>
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          {/* Right Column (Spans 4 cols): Extra Custom plan triggers */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6" id="pricing-custom-col">
            
            {/* Custom Retail Shop card */}
            <TiltCard 
              className="rounded-none border-4 border-black bg-white p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-left flex-1" 
              id="pricing-shop-card"
              maxTilt={8}
            >
              <div className="space-y-4">
                <div className="p-3 rounded-none bg-neutral-100 border-2 border-black text-black w-fit">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-sans font-black uppercase text-black">Need an Online Shop?</h3>
                  <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">
                    Custom Stripe integrations, headless checkouts, lightweight catalog scaling, and automatic shipment triggers.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black">
                <button
                  onClick={() => triggerInquiry("shop")}
                  className="w-full py-3 rounded-none border-2 border-black bg-white text-black hover:bg-neutral-50 text-xs font-sans font-black uppercase tracking-widest flex items-center justify-between transition-all cursor-pointer"
                  id="pricing-custom-shop-btn"
                >
                  <span>Get an online shop draft</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </TiltCard>

            {/* Custom Web App card */}
            <TiltCard 
              className="rounded-none border-4 border-black bg-white p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-left flex-1" 
              id="pricing-app-card"
              maxTilt={8}
            >
              <div className="space-y-4">
                <div className="p-3 rounded-none bg-neutral-100 border-2 border-black text-black w-fit">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-sans font-black uppercase text-black">Custom Web Application?</h3>
                  <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">
                    Tailored dashboards, API gateway setups, custom database architectures, and heavy cloud deployment scaling.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black">
                <button
                  onClick={() => triggerInquiry("agency")}
                  className="w-full py-3 rounded-none border-2 border-black bg-white text-black hover:bg-neutral-50 text-xs font-sans font-black uppercase tracking-widest flex items-center justify-between transition-all cursor-pointer"
                  id="pricing-custom-app-btn"
                >
                  <span>Request custom web app</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </TiltCard>

          </div>

        </div>

        {/* Pricing Trust Badge */}
        <div className="mt-12 p-4 rounded-none bg-white border-2 border-black flex items-center gap-3.5 max-w-xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" id="pricing-security-badge">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
          <p className="text-left text-xs font-sans text-neutral-600 font-semibold leading-relaxed">
            <strong>Honest pricing policy:</strong> No upfront payment or binding contract is required to get your first custom homepage draft designed.
          </p>
        </div>

      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} initialType={selectedPlanContext} />
    </section>
  );
}
