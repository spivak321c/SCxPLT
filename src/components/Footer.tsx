/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Instagram, ArrowUp, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f8f9fa] border-t-4 border-black pt-16 pb-12 relative overflow-hidden" id="app-footer">
      
      {/* Background radial spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Top footer row: Brand & navigation list */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left" id="footer-top-row">
          
          {/* Logo Column (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleScrollToTop} id="footer-logo">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-none bg-black p-0.5 border-2 border-black">
                <span className="text-[10px] font-sans font-black text-white uppercase">a</span>
              </div>
              <span className="text-base font-sans font-black tracking-wider text-black uppercase">amphora</span>
            </div>
            
            <p className="text-neutral-500 text-xs font-sans font-semibold max-w-sm leading-relaxed">
              Bespoke, hand-coded single-page websites, custom application frameworks, and automated online booking integrations. 
              Meticulously engineered in Bremen, Germany.
            </p>

            {/* Socials stack */}
            <div className="flex items-center gap-3 pt-2" id="footer-socials">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    aria-label={s.label}
                    className="p-2 rounded-none bg-white border-2 border-black text-black hover:bg-neutral-100 transition-colors"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation links (Spans 3 cols) */}
          <div className="md:col-span-3 space-y-4" id="footer-nav-col">
            <h4 className="text-xs font-mono font-black tracking-widest text-black uppercase">Agency</h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans">
              <button onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                Our 4 Steps
              </button>
              <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                Interactive Showcase
              </button>
              <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                Pricing Packages
              </button>
              <button onClick={() => document.getElementById("promises")?.scrollIntoView({ behavior: "smooth" })} className="text-neutral-500 hover:text-black font-semibold transition-colors cursor-pointer text-left">
                Our Quality Guarantees
              </button>
            </div>
          </div>

          {/* Contact Details (Spans 4 cols) */}
          <div className="md:col-span-4 space-y-4" id="footer-contact-col">
            <h4 className="text-xs font-mono font-black tracking-widest text-black uppercase">Contact Headquarters</h4>
            <div className="space-y-3 text-xs text-neutral-500 font-semibold font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Bremen, Germany • Available local & remote</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                <a href="mailto:hello@amphora.de" className="hover:text-black transition-colors">
                  hello@amphora.de
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500 font-bold" id="footer-bottom-row">
          
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Amphora. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <a href="#" className="hover:text-black transition-colors">Impressum</a>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <a href="#" className="hover:text-black transition-colors">Datenschutz</a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white border-2 border-black text-black hover:bg-neutral-100 font-mono font-black uppercase transition-colors cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            id="scroll-to-top-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
