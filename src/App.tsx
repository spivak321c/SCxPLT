/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header";
import Hero from "./components/Hero";
import BuiltWithHeart from "./components/BuiltWithHeart";
import MarqueeSection from "./components/MarqueeSection";
import StepsSection from "./components/StepsSection";
import ProvenSystem from "./components/ProvenSystem";
import DreamWebsiteDo from "./components/DreamWebsiteDo";
import FeastForTheEyes from "./components/FeastForTheEyes";
import PricingSection from "./components/PricingSection";
import PromisesSection from "./components/PromisesSection";
import ComparisonSection from "./components/ComparisonSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Accessible fallback: Disable all 3D tilt, parallax, translations, simple 300ms opacity fade
      const allHeaders = document.querySelectorAll("h2");
      allHeaders.forEach((heading) => {
        gsap.fromTo(heading, 
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.3, 
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      const allElements = document.querySelectorAll('[id*="card"], [id*="item"], [id*="row"], section');
      allElements.forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 0.3, 
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
      return;
    }

    // 2. Initialize Lenis Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth expo decay mirroring cubic-bezier(0.65, 0, 0.35, 1)
      infinite: false,
    });

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Bind Lenis animation frame requests directly to GSAP Ticker
    const gsapTickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTickerCallback);
    gsap.ticker.lagSmoothing(0);

    // 3. Hero Entrance Animations on Load
    const heroLeftChildren = document.querySelectorAll("#hero-left-col > *");
    const heroRightMockup = document.querySelector("#browser-mockup");

    if (heroLeftChildren.length > 0) {
      gsap.fromTo(heroLeftChildren,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out", // cubic-bezier(0.16, 1, 0.3, 1) equivalent
          stagger: 0.07, // 70ms stagger
          delay: 0.1,
        }
      );
    }

    if (heroRightMockup) {
      gsap.fromTo(heroRightMockup,
        { opacity: 0, scale: 0.96, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    }

    // 4. Scroll-Triggered Headlines & Typography Reveals
    const splitNode = (node: Node, wordSpans: HTMLSpanElement[]) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        if (!text.trim()) return;

        const words = text.split(/(\s+)/);
        const fragment = document.createDocumentFragment();

        words.forEach((word) => {
          if (word.trim() === "") {
            fragment.appendChild(document.createTextNode(word));
          } else {
            const outerSpan = document.createElement("span");
            outerSpan.className = "reveal-word-outer";
            const innerSpan = document.createElement("span");
            innerSpan.className = "headline-reveal-span";
            innerSpan.textContent = word;
            outerSpan.appendChild(innerSpan);
            fragment.appendChild(outerSpan);
            wordSpans.push(innerSpan);
          }
        });

        node.parentNode?.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (el.classList.contains("headline-reveal-span") || el.classList.contains("reveal-word-outer")) {
          return;
        }
        const children = Array.from(node.childNodes);
        children.forEach((child) => splitNode(child, wordSpans));
      }
    };

    const allHeaders = document.querySelectorAll("h2");
    allHeaders.forEach((heading) => {
      if (!heading.textContent || !heading.textContent.trim()) return;

      const wordSpans: HTMLSpanElement[] = [];
      const children = Array.from(heading.childNodes);
      children.forEach((child) => splitNode(child, wordSpans));

      if (wordSpans.length === 0) return;

      gsap.fromTo(wordSpans,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.05, // 50ms typography line-by-line / word-by-word stagger
          scrollTrigger: {
            trigger: heading,
            start: "top 85%", // Fire forward when entering view
            toggleActions: "play none none none",
          }
        }
      );
    });

    // 5. Scroll-Triggered Layout Reveals
    const sectionsToAnimate = [
      {
        trigger: "#about-section",
        targets: "#about-section [id^='bento-card-']",
      },
      {
        trigger: "#process",
        targets: "#process [id^='step-card-']",
      },
      {
        trigger: "#system-section",
        targets: "#system-section [id^='tech-card-'], #code-snippet-box",
      },
      {
        trigger: "#work",
        targets: "#website-tabs-list > button, #website-showcase-content",
      },
      {
        trigger: "#feast-section",
        targets: "#portfolio-mockup-card",
      },
      {
        trigger: "#pricing",
        targets: "#pricing [id^='pricing-card-'], #pricing-security-badge",
      },
      {
        trigger: "#promises",
        targets: "#promises [id^='promise-card-']",
      },
      {
        trigger: "#comparison",
        targets: "#comparison [key], #comparison table, #comparison tr",
      },
      {
        trigger: "#faq",
        targets: "#faq [id^='faq-item-']",
      }
    ];

    const triggers: ScrollTrigger[] = [];

    sectionsToAnimate.forEach((sec) => {
      const triggerEl = document.querySelector(sec.trigger);
      if (!triggerEl) return;

      const elements = triggerEl.querySelectorAll(sec.targets);
      if (elements.length === 0) return;

      const st = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 82%", // exactly 15–20% of target entering viewport
        onEnter: () => {
          gsap.fromTo(elements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8, // 800ms
              ease: "power4.out", // cubic-bezier(0.16, 1, 0.3, 1) equivalent
              stagger: 0.08, // 80ms stagger
            }
          );
        },
        once: true,
      });
      triggers.push(st);
    });

    // Clean up function
    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTickerCallback);
      triggers.forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#1a1a1a] font-sans antialiased selection:bg-black selection:text-white" id="root-app-container">
      {/* Absolute top fixed header navigation */}
      <Header />

      {/* Main layout contents */}
      <main id="main-content-flow">
        {/* 1. Hero & Mockup Section */}
        <Hero />

        {/* 2. Client brand slider marquee */}
        <MarqueeSection />

        {/* 3. Built with Heart Bento details */}
        <BuiltWithHeart />

        {/* 4. Timeline process 4 steps */}
        <StepsSection />

        {/* 5. Proven system tech architecture */}
        <ProvenSystem />

        {/* 6. What should your dream website do interactive show tabs */}
        <DreamWebsiteDo />

        {/* 7. Portfolio feast for the eyes case studies */}
        <FeastForTheEyes />

        {/* 8. Pricing packages options */}
        <PricingSection />

        {/* 9. Five quality promises checks */}
        <PromisesSection />

        {/* 10. Industry comparison table */}
        <ComparisonSection />

        {/* 11. FAQ Accordions list */}
        <FaqSection />
      </main>

      {/* Footer copyright and contact block */}
      <Footer />
    </div>
  );
}
