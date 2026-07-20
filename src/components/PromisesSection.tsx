/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, HeartHandshake, Tag, RotateCcw, Lock } from "lucide-react";
import { PROMISES } from "../data";
import TiltCard from "./TiltCard";

export default function PromisesSection() {
  // Map icon names to Lucide elements
  const getPromiseIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-black" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-black" />;
      case "Tag":
        return <Tag className="w-5 h-5 text-black" />;
      case "RotateCcw":
        return <RotateCcw className="w-5 h-5 text-black" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-black" />;
      default:
        return <Sparkles className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="promises">
      
      {/* Background glowing central orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-purple-600 font-black uppercase">Risk-free Partnership</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase text-black leading-tight">
            Our five{" "}
            <span className="text-stroke-black text-transparent block mt-1">
              quality promises
            </span>
          </h2>
          <p className="text-neutral-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            We operate on confidence and clarity. Here are the five foundational pillars that guarantee an outstanding collaboration.
          </p>
        </div>

        {/* Central Hub with radiating Promise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch" id="promises-grid">
          {PROMISES.map((promise, index) => {
            return (
              <TiltCard
                key={promise.id}
                className="relative rounded-none border-4 border-black bg-white p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group text-left"
                id={`promise-card-${promise.id}`}
                maxTilt={10}
              >
                
                <div className="space-y-4">
                  {/* Promise icon */}
                  <div className="p-3 rounded-none bg-neutral-100 border-2 border-black w-fit group-hover:scale-105 transition-transform duration-300">
                    {getPromiseIcon(promise.icon)}
                  </div>
                  
                  {/* Promise text */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-widest block">
                      Promise 0{index + 1}
                    </span>
                    <h3 className="text-base font-sans font-black uppercase text-black group-hover:text-purple-600 transition-colors">
                      {promise.title}
                    </h3>
                    <p className="text-neutral-600 text-xs font-sans font-semibold leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                </div>

                {/* Micro visual accent lines bottom corner */}
                <div className="pt-4 mt-6 border-t-2 border-black text-right">
                  <span className="text-[9px] font-mono text-black font-black uppercase tracking-wider">SCVLPT CONFIRMED</span>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Five Promises bottom guarantee note */}
        <div className="mt-16 text-center text-xs font-sans text-neutral-500 max-w-md mx-auto font-semibold leading-relaxed">
          We back every single launch with our signature quality seal, ensuring absolute technical conformity with global data privacy and standard search specifications.
        </div>

      </div>
    </section>
  );
}
