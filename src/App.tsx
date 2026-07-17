/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
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

