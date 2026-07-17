/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Code, Copy, Check, Terminal, Sliders, Layers, Globe, Monitor, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TiltShowcase() {
  const [activeTab, setActiveTab] = useState<"vanilla" | "react">("vanilla");
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({
    mouseX: 0,
    mouseY: 0,
    rotateX: 0,
    rotateY: 0,
    isHovering: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  // Dynamic calculations for the 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !containerRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Get center of the card
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Define maximum rotation degree
    const maxTilt = 14;

    // Normalize mouse position relative to card boundaries
    // We add a padding factor so the tilt begins when mouse is "near" the card
    const rangeX = rect.width / 2 + 120;
    const rangeY = rect.height / 2 + 120;

    const percentX = Math.min(Math.max(mouseX / rangeX, -1), 1);
    const percentY = Math.min(Math.max(mouseY / rangeY, -1), 1);

    // rotateX responds to vertical movement (mouseY), rotateY to horizontal (mouseX)
    const rotX = -percentY * maxTilt;
    const rotY = percentX * maxTilt;

    // Real-time state update for debugging displays
    setStats({
      mouseX: Math.round(mouseX),
      mouseY: Math.round(mouseY),
      rotateX: Number(rotX.toFixed(1)),
      rotateY: Number(rotY.toFixed(1)),
      isHovering: true,
    });

    // Directly animate DOM element styles for high-frequency 60fps performance
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03, 1.03, 1.03)`;
    card.style.transition = "transform 0.08s ease-out";

    // Update dynamic inner spotlight shine / glare layer
    if (glowRef.current) {
      const glowX = ((e.clientX - rect.left) / rect.width) * 100;
      const glowY = ((e.clientY - rect.top) / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(circle 250px at ${glowX}% ${glowY}%, rgba(139, 92, 246, 0.22), transparent 75%)`;
    }

    // Offset the back glowing ambient shadow for advanced 3D Parallax layering
    if (shadowRef.current) {
      const shadowX = percentX * 25;
      const shadowY = percentY * 25;
      shadowRef.current.style.transform = `translate3d(${shadowX}px, ${shadowY}px, -20px)`;
      shadowRef.current.style.opacity = "0.7";
      shadowRef.current.style.filter = "blur(35px)";
    }
  };

  // Smooth resting reset on mouse leave
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      cardRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    }

    if (glowRef.current) {
      glowRef.current.style.background = "radial-gradient(circle 250px at 50% 50%, rgba(139, 92, 246, 0.05), transparent 75%)";
      glowRef.current.style.transition = "background 0.6s ease-out";
    }

    if (shadowRef.current) {
      shadowRef.current.style.transform = "translate3d(0px, 0px, -10px)";
      shadowRef.current.style.opacity = "0.4";
      shadowRef.current.style.filter = "blur(20px)";
      shadowRef.current.style.transition = "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    }

    setStats({
      mouseX: 0,
      mouseY: 0,
      rotateX: 0,
      rotateY: 0,
      isHovering: false,
    });
  };

  const vanillaCode = `<!-- 1. HTML Container Structure -->
<div class="tilt-container" id="tiltContainer">
  <!-- Glowing back shadow for 3D depth -->
  <div class="tilt-shadow" id="tiltShadow"></div>
  
  <!-- Interactive Browser Card -->
  <div class="browser-card" id="tiltCard">
    <!-- Spotlight Shine Glare Overlay -->
    <div class="card-glow" id="cardGlow"></div>
    
    <!-- Window Control Header -->
    <div class="browser-header">
      <div class="window-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <div class="url-bar">deine-domain.de</div>
      <div class="header-spacer"></div>
    </div>
    
    <!-- Card Inner Content -->
    <div class="card-content">
      <h3>bespoke engineering</h3>
      <p>3D mouse-tracking physics simulation active.</p>
    </div>
  </div>
</div>

<!-- 2. Minimal High-End Styles -->
<style>
.tilt-container {
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 2rem auto;
  padding: 40px; /* triggers hover when cursor gets near */
  cursor: pointer;
  perspective: 1000px;
}

/* Moving background glow (parallax depth) */
.tilt-shadow {
  position: absolute;
  inset: 50px;
  background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%);
  filter: blur(20px);
  opacity: 0.4;
  z-index: 1;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.browser-card {
  position: relative;
  background: #111116;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  z-index: 2;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
}

/* Interactive spotlight reflect glaze overlay */
.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 250px at 50% 50%, rgba(139,92,246,0.05), transparent 75%);
  pointer-events: none;
  z-index: 3;
}

.browser-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  background: #16161f;
  border-b: 1px solid rgba(255, 255, 255, 0.06);
}

.window-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.url-bar {
  background: #0d0d12;
  border: 1px solid rgba(255,255,255,0.05);
  color: #8e8ea0;
  font-family: monospace;
  font-size: 10px;
  padding: 4px 20px;
  border-radius: 6px;
  max-width: 180px;
  text-align: center;
}

.card-content {
  padding: 40px 30px;
  color: #ffffff;
  font-family: sans-serif;
}
</style>

<!-- 3. Mathematical Tracking Logic -->
<script>
const container = document.getElementById('tiltContainer');
const card = document.getElementById('tiltCard');
const glow = document.getElementById('cardGlow');
const shadow = document.getElementById('tiltShadow');

container.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const cardX = rect.left + rect.width / 2;
  const cardY = rect.top + rect.height / 2;
  
  // Calculate cursor distance from center
  const mouseX = e.clientX - cardX;
  const mouseY = e.clientY - cardY;
  
  const maxTilt = 12; // degrees max
  const rangeX = rect.width / 2 + 100;
  const rangeY = rect.height / 2 + 100;
  
  const percentX = Math.min(Math.max(mouseX / rangeX, -1), 1);
  const percentY = Math.min(Math.max(mouseY / rangeY, -1), 1);
  
  const rotX = -percentY * maxTilt;
  const rotY = percentX * maxTilt;
  
  // Smoothly rotate browser window
  card.style.transform = \`perspective(1000px) rotateX(\${rotX}deg) rotateY(\${rotY}deg) scale3d(1.03, 1.03, 1.03)\`;
  card.style.transition = 'transform 0.08s ease-out';
  
  // Reposition inner shine glaze
  const glowX = ((e.clientX - rect.left) / rect.width) * 100;
  const glowY = ((e.clientY - rect.top) / rect.height) * 100;
  glow.style.background = \`radial-gradient(circle 250px at \${glowX}% \${glowY}%, rgba(139,92,246,0.2), transparent 75%)\`;
  
  // Parallax the backing shadow glow
  shadow.style.transform = \`translate3d(\${percentX * 20}px, \${percentY * 20}px, -20px)\`;
  shadow.style.opacity = '0.6';
  shadow.style.filter = 'blur(30px)';
});

// Clean resting recovery
container.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
  
  glow.style.background = 'radial-gradient(circle 250px at 50% 50%, rgba(139,92,246,0.05), transparent 75%)';
  glow.style.transition = 'background 0.6s ease-out';
  
  shadow.style.transform = 'translate3d(0px, 0px, -10px)';
  shadow.style.opacity = '0.3';
  shadow.style.filter = 'blur(20px)';
  shadow.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
});
</script>`;

  const reactCode = `import React, { useRef, useState } from "react";

export default function SmoothTiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxTilt = 12;
    const rangeX = rect.width / 2 + 100;
    const rangeY = rect.height / 2 + 100;

    const percentX = Math.min(Math.max(mouseX / rangeX, -1), 1);
    const percentY = Math.min(Math.max(mouseY / rangeY, -1), 1);

    const rotX = -percentY * maxTilt;
    const rotY = percentX * maxTilt;

    // Apply high-performance instant transforms bypassing state cycles
    cardRef.current.style.transform = \`perspective(1000px) rotateX(\${rotX}deg) rotateY(\${rotY}deg) scale3d(1.03, 1.03, 1.03)\`;
    cardRef.current.style.transition = "transform 0.08s ease-out";

    if (glowRef.current) {
      const glowX = ((e.clientX - rect.left) / rect.width) * 100;
      const glowY = ((e.clientY - rect.top) / rect.height) * 100;
      glowRef.current.style.background = \`radial-gradient(circle 250px at \${glowX}% \${glowY}%, rgba(139, 92, 246, 0.22), transparent 75%)\`;
    }

    if (shadowRef.current) {
      shadowRef.current.style.transform = \`translate3d(\${percentX * 25}px, \${percentY * 25}px, -20px)\`;
      shadowRef.current.style.opacity = "0.7";
      shadowRef.current.style.filter = "blur(30px)";
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      cardRef.current.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    }
    if (glowRef.current) {
      glowRef.current.style.background = "radial-gradient(circle 250px at 50% 50%, rgba(139, 92, 246, 0.05), transparent 75%)";
      glowRef.current.style.transition = "background 0.6s ease-out";
    }
    if (shadowRef.current) {
      shadowRef.current.style.transform = "translate3d(0px, 0px, -10px)";
      shadowRef.current.style.opacity = "0.4";
      shadowRef.current.style.filter = "blur(20px)";
      shadowRef.current.style.transition = "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    }
  };

  return (
    <div 
      className="relative p-12 cursor-pointer" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Background shadow glow */}
      <div 
        ref={shadowRef}
        className="absolute inset-12 bg-purple-600/30 rounded-2xl blur-xl opacity-30 z-10 transition-all duration-500 ease-out" 
      />

      {/* Browser mockup card */}
      <div 
        ref={cardRef}
        className="relative bg-[#111116] border border-white/5 rounded-2xl overflow-hidden shadow-2xl z-20 transform-gpu"
      >
        {/* Shine glare overlay */}
        <div 
          ref={glowRef}
          className="absolute inset-0 bg-[radial-gradient(circle_250px_at_50%_50%,rgba(139,92,246,0.05),transparent_75%)] pointer-events-none z-30" 
        />

        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#16161f] border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="px-5 py-1 bg-black/50 border border-white/5 text-[9px] font-mono text-neutral-400 rounded-md">
            your-domain.de
          </div>
          <div className="w-8" />
        </div>

        {/* Content body */}
        <div className="p-8 text-white text-left">
          <h3 className="text-lg font-bold font-sans uppercase tracking-tight">Your Title</h3>
          <p className="text-xs text-neutral-400 mt-2">Smooth mouse-hover tilt and lighting glaze.</p>
        </div>
      </div>
    </div>
  );
}`;

  const copyToClipboard = () => {
    const codeToCopy = activeTab === "vanilla" ? vanillaCode : reactCode;
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden border-y-4 border-black text-white" id="tilt-showcase-section">
      
      {/* Radial grid spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Dynamic Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-purple-400 font-black uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            Interactive Animation Lab
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter uppercase leading-tight">
            3D mouse tilt{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 block mt-1">
              physics simulator
            </span>
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Drag your cursor across the showcase card or hover near it to feel the smooth, low-latency 3D transform calculations. Real physical metrics calculated in real-time.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12" id="tilt-interactive-container">
          
          {/* Left Column (Spans 6 cols): The Interactive 3D Card Stage */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative" id="tilt-card-arena-col">
            
            {/* Hover Active Zone (Slightly larger than card to trigger near-hover tilt) */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[460px] p-12 md:p-16 cursor-pointer select-none rounded-3xl"
              id="tilt-physics-stage"
            >
              {/* BACK SHADOW GLOW (Z-layered with depth and motion) */}
              <div 
                ref={shadowRef}
                id="card-shadow-glow"
                className="absolute inset-12 md:inset-16 bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-500 rounded-3xl opacity-35 blur-[25px] transition-all duration-500 ease-out"
                style={{ transform: "translate3d(0px, 0px, -10px)" }}
              />

              {/* BROWSER WINDOW CONTAINER CARD */}
              <div 
                ref={cardRef}
                id="tilt-card-element"
                className="relative bg-[#0d0d12] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 transform-gpu"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                }}
              >
                {/* INNER SPOTLIGHT SHINE GLARE OVERLAY */}
                <div 
                  ref={glowRef}
                  id="card-glow-layer"
                  className="absolute inset-0 pointer-events-none z-30 transition-all duration-300"
                  style={{
                    background: "radial-gradient(circle 250px at 50% 50%, rgba(139, 92, 246, 0.05), transparent 75%)"
                  }}
                />

                {/* Browser top action bar */}
                <div className="flex items-center justify-between px-5 py-4 bg-[#14141c] border-b border-white/5 select-none">
                  <div className="flex items-center gap-1.5" id="mock-dots">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 border border-white/5" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 border border-white/5" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 border border-white/5" />
                  </div>
                  
                  {/* Active URL */}
                  <div className="px-5 py-1 bg-black/60 border border-white/5 text-[10px] font-mono text-neutral-400 rounded-lg tracking-wide w-48 truncate text-center">
                    deine-domain.de
                  </div>
                  
                  <div className="w-8" /> {/* offset balance */}
                </div>

                {/* Card Main Body Content */}
                <div className="p-8 md:p-10 space-y-6 text-left" id="tilt-card-body">
                  
                  {/* Small tag */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none text-[9px] font-mono font-black uppercase bg-purple-950/40 border border-purple-800/40 text-purple-400 tracking-wider">
                    <Sliders className="w-3 h-3 text-purple-400" />
                    Interactive physics
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-sans font-black uppercase text-white leading-tight">
                      Bespoke web <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">craftsmanship.</span>
                    </h3>
                    <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                      Move your mouse anywhere around this card to tilt it. The ambient background spotlight and reflective sheen recalculate on every microframe.
                    </p>
                  </div>

                  {/* Micro dashboard preview mock */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3.5" id="tilt-card-inner-widget">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[9px] font-mono">01</span>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">Physics Engine</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-black flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        60fps active
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                        <span>Interpolation damping</span>
                        <span>0.08s</span>
                      </div>
                      <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-11/12" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] text-neutral-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-neutral-400" />
                      Perspective 3D Layering
                    </span>
                    <span className="uppercase">Amphora Tech</span>
                  </div>

                </div>

              </div>
            </div>

            {/* Micro Hint Tag */}
            <div className="mt-2 text-center flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-wider">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>{stats.isHovering ? "Simulating inertia..." : "Hover mouse over container to test"}</span>
            </div>
          </div>

          {/* Right Column (Spans 6 cols): Code Exporter & Live Debugger */}
          <div className="lg:col-span-6 space-y-6 text-left" id="tilt-metrics-code-col">
            
            {/* Live Stats Console Panel */}
            <div className="p-6 rounded-none border-4 border-black bg-[#0d0d12] shadow-[6px_6px_0px_0px_#7c3aed] space-y-4" id="live-debugger-panel">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <h4 className="text-xs font-mono font-black tracking-widest uppercase text-white">Live Physics Debugger</h4>
                </div>
                <span className="px-2 py-0.5 rounded-none bg-purple-950/50 border border-purple-800/50 text-purple-400 text-[9px] font-mono font-black uppercase">
                  Telemetric Stream
                </span>
              </div>

              {/* Grid of calculations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="debugger-grid">
                
                <div className="p-3 bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider block">Relative X</span>
                  <span className="text-sm font-mono font-black text-white">{stats.mouseX}px</span>
                </div>

                <div className="p-3 bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider block">Relative Y</span>
                  <span className="text-sm font-mono font-black text-white">{stats.mouseY}px</span>
                </div>

                <div className="p-3 bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider block">rotateX (Pitch)</span>
                  <span className="text-sm font-mono font-black text-purple-400">{stats.rotateY}°</span>
                </div>

                <div className="p-3 bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider block">rotateY (Yaw)</span>
                  <span className="text-sm font-mono font-black text-pink-400">{stats.rotateX}°</span>
                </div>

              </div>

              {/* Virtual tilt gyroscope */}
              <div className="flex items-center gap-4 p-3 bg-black/20 border border-white/5 rounded-xl text-xs font-mono text-neutral-400">
                <div className="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <div 
                    className="w-2.5 h-2.5 rounded-full bg-purple-500 transition-all duration-75"
                    style={{
                      transform: `translate(${stats.rotateY * 1.5}px, ${-stats.rotateX * 1.5}px)`
                    }}
                  />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-300 block font-bold">Mathematical Gyroscope Mapping</span>
                  <span className="text-[9px] text-neutral-500">Angle coordinates capped at max range parameters automatically.</span>
                </div>
              </div>
            </div>

            {/* Code Exporter Panel */}
            <div className="rounded-none border-4 border-black bg-[#0d0d12] overflow-hidden shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]" id="code-exporter-panel">
              
              {/* Header Tab Selector */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#14141c] p-3">
                <div className="flex items-center gap-1 border border-white/5 bg-black/40 p-1 rounded-lg">
                  <button
                    onClick={() => { setActiveTab("vanilla"); setCopied(false); }}
                    className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "vanilla"
                        ? "bg-white text-black font-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Vanilla HTML + JS
                  </button>
                  <button
                    onClick={() => { setActiveTab("react"); setCopied(false); }}
                    className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "react"
                        ? "bg-white text-black font-black"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    React (Tailwind)
                  </button>
                </div>

                {/* Copy button */}
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-1.5 rounded-none bg-purple-600 hover:bg-purple-700 text-white font-mono font-black text-[9px] uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer border-2 border-black"
                  id="copy-code-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>

              {/* Code display screen */}
              <div className="relative p-5 h-64 overflow-y-auto font-mono text-xs text-neutral-300 bg-black/60 scrollbar-thin scrollbar-thumb-white/10" id="code-screen-body">
                <pre className="text-left leading-relaxed text-[11px] select-all">
                  <code>{activeTab === "vanilla" ? vanillaCode : reactCode}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
