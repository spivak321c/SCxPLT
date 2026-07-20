/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import TiltCard from "./TiltCard";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "How does the free homepage draft upfront work?",
      answer: "It's simple: you tell us about your business, and our designers build a bespoke homepage design draft tailored to your exact brand colors and target audience within 7 days. We present it to you over a short video call. There is zero contract, zero downpayment, and zero commitment. If you are thrilled with the result, we proceed to code the complete site. If not, you walk away paying absolutely nothing."
    },
    {
      question: "Why do you code in React + Tailwind instead of using WordPress or Wix?",
      answer: "WordPress and builders like Wix inject massive amounts of bloated code, heavy tracking libraries, and insecure plugins. This leads to slow mobile loading speeds, poor conversion rates, and constant security vulnerabilities. We hand-write custom React code styled with Tailwind CSS, delivering pages that load in under 400ms, rank perfect 100/100 on Google Lighthouse, and are infinitely scalable as your business grows."
    },
    {
      question: "Do you support online booking systems, search filters, and custom forms?",
      answer: "Absolutely! Adding multi-service appointment scheduling with automated email alerts, secure customer payment portals, advanced product search databases, and custom lead-capture funnels is what we specialize in. Everything is hand-coded to work seamlessly and load instantly."
    },
    {
      question: "How is privacy compliance and cookie banner setups handled?",
      answer: "We take privacy very seriously. We host all sites on secure cloud environments and configure clean, cookie-free analytics. This means you get detailed user metrics without needing to display intrusive, conversion-killing cookie consent banners to your customers, unless you decide to add third-party marketing pixels."
    },
    {
      question: "How long does it take to build and launch the full website?",
      answer: "Once you approve the initial free homepage design draft, a standard 'Website Start' project takes about 2 to 3 weeks to fully code, test, and launch. A heavier 'Website Pro' or online shop with dynamic database tools takes about 4 to 6 weeks. You are kept in a direct line of communication with your developer throughout."
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="faq">
      
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Frequently Asked Questions</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            Got questions? We've got{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              answers
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-xs sm:text-sm max-w-lg mx-auto font-semibold">
            Everything you need to know about our custom upfront drafting process, performance specifications, and launches.
          </p>
        </div>

        {/* FAQ Accordions Stack */}
        <div className="space-y-4 text-left" id="faq-accordions-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <TiltCard
                key={idx}
                className="rounded-none border-4 border-black bg-white overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                id={`faq-item-${idx}`}
                maxTilt={4}
              >
                {/* Accordion Trigger header */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-neutral-50"
                  id={`faq-trigger-${idx}`}
                >
                  <span className="font-sans font-black uppercase text-sm sm:text-base text-black hover:text-purple-600 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Toggle Icon */}
                  <div className="p-1.5 rounded-none border-2 border-black text-black bg-white">
                    {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>

                {/* Expanded Answer body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-4 text-xs sm:text-sm text-neutral-600 font-sans font-semibold leading-relaxed border-t-2 border-black" id={`faq-answer-${idx}`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
