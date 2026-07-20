/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Check, CalendarCheck, MapPin, ShoppingBag, Share2, Sparkles, Send, Flame, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export default function InquiryModal({ isOpen, onClose, initialType = "local" }: InquiryModalProps) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(initialType);
  const [businessType, setBusinessType] = useState("Cafe / Local Coffee Shop");
  const [customType, setCustomType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync dropdown when Step 1 selection changes
  React.useEffect(() => {
    if (selectedType === "local") setBusinessType("Cafe / Local Coffee Shop");
    else if (selectedType === "salon") setBusinessType("Beauty Salon / Spa");
    else if (selectedType === "shop") setBusinessType("E-Commerce / Online Retailer");
    else if (selectedType === "agency") setBusinessType("Marketing / Creative Agency");
    else if (selectedType === "custom") setBusinessType("other");
  }, [selectedType]);

  const businessTypeOptions = [
    { value: "Cafe / Local Coffee Shop", label: "Cafe / Local Coffee Shop" },
    { value: "Restaurant / Gastronomy", label: "Restaurant / Gastronomy" },
    { value: "Medical Practice / Clinic", label: "Medical Practice / Clinic" },
    { value: "Beauty Salon / Spa", label: "Beauty Salon / Spa" },
    { value: "E-Commerce / Online Retailer", label: "E-Commerce / Online Retailer" },
    { value: "Marketing / Creative Agency", label: "Marketing / Creative Agency" },
    { value: "Real Estate Agency", label: "Real Estate Agency" },
    { value: "SaaS / Software Company", label: "SaaS / Software Company" },
    { value: "Consulting / Professional Services", label: "Consulting / Professional Services" },
    { value: "other", label: "Other (Please specify below)" },
  ];

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !companyName) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setStep(1);
    setSelectedType("local");
    setBusinessType("Cafe / Local Coffee Shop");
    setCustomType("");
    setCompanyName("");
    setEmail("");
    setNotes("");
    setSubmitted(false);
    onClose();
  };

  const websiteTypes = [
    { id: "local", name: "Cafe & Local Business", icon: MapPin, desc: "To get locals into your shop" },
    { id: "salon", name: "Salon, Practice & Service", icon: CalendarCheck, desc: "For appointment bookings" },
    { id: "shop", name: "E-Commerce & Shop", icon: ShoppingBag, desc: "To sell products online" },
    { id: "agency", name: "Modern Social & Agency", icon: Share2, desc: "For inquiries & leads" },
    { id: "custom", name: "Other / Specify Type", icon: HelpCircle, desc: "Tell us what you're building" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl overflow-hidden rounded-none border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10"
            id="modal-card"
          >
            {/* Ambient glows inside card using optimized radial gradients */}
            <div 
              className="absolute -top-24 -left-24 w-48 h-48 pointer-events-none" 
              style={{
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0) 70%)"
              }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-black hover:bg-neutral-100 transition-colors p-1.5 rounded-none border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20 cursor-pointer"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" id="inquiry-form">
                {/* Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-mono font-black text-purple-600 bg-purple-50 border-2 border-black">
                    <Sparkles className="w-3.5 h-3.5 fill-purple-100" />
                    Free Draft Design
                  </div>
                  <h3 className="text-2xl font-sans font-black tracking-tighter uppercase text-black">
                    {step === 1 && "What type of website do you need?"}
                    {step === 2 && "Tell us about your business"}
                    {step === 3 && "Where should we send your draft?"}
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans font-semibold">
                    {step === 1 && "Select the blueprint that matches your business model."}
                    {step === 2 && "A few details to help our designers craft your bespoke homepage."}
                    {step === 3 && "Almost done! Give us your contact info to deliver your 7-day draft."}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-neutral-200 h-2.5 rounded-none overflow-hidden border-2 border-black">
                  <div
                    className="bg-black h-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                {/* Step 1 Content */}
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="step-1-options">
                    {websiteTypes.map((type) => {
                      const IconComp = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`flex flex-col items-start text-left p-4 rounded-none border-2 border-black transition-all duration-300 relative bg-white cursor-pointer ${
                            isSelected
                              ? "border-4 border-black bg-purple-50 shadow-[4px_4px_0px_0px_#7c3aed]"
                              : "border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          }`}
                          id={`option-${type.id}`}
                        >
                          <div className={`p-2 rounded-none mb-3 border-2 border-black ${isSelected ? "bg-purple-200 text-purple-900" : "bg-neutral-100 text-black"}`}>
                            <IconComp className="w-5 h-5 stroke-[2.5]" />
                          </div>
                          <span className="font-sans font-black uppercase text-black text-sm">{type.name}</span>
                          <span className="font-sans text-xs text-neutral-600 font-semibold mt-1">{type.desc}</span>
                          {isSelected && (
                            <div className="absolute top-3 right-3 bg-purple-600 text-white rounded-none border-2 border-black p-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Step 2 Content */}
                {step === 2 && (
                  <div className="space-y-4" id="step-2-fields">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-black font-black tracking-wider uppercase block">
                        What is your business name? *
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Rivers Tech Lab"
                        className="w-full px-4 py-3 bg-white border-2 border-black rounded-none text-black placeholder-neutral-400 focus:outline-none focus:bg-neutral-50 transition-all font-sans font-semibold"
                        id="input-company-name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-black font-black tracking-wider uppercase block">
                        Specify your type of business *
                      </label>
                      <select
                        required
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-4 py-3 bg-white border-2 border-black rounded-none text-black focus:outline-none focus:bg-neutral-50 transition-all font-sans font-semibold cursor-pointer"
                        id="select-business-type"
                      >
                        {businessTypeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="font-sans font-semibold">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {businessType === "other" && (
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-black font-black tracking-wider uppercase block">
                          Please specify your type of business *
                        </label>
                        <input
                          type="text"
                          required
                          value={customType}
                          onChange={(e) => setCustomType(e.target.value)}
                          placeholder="e.g. Fitness Coach, Real Estate Agent, Creator Studio"
                          className="w-full px-4 py-3 bg-white border-2 border-black rounded-none text-black placeholder-neutral-400 focus:outline-none focus:bg-neutral-50 transition-all font-sans font-semibold animate-fade-in"
                          id="input-custom-type"
                        />
                      </div>
                    )}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-black font-black tracking-wider uppercase block">
                        Any specific preferences or target audience? (Optional)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="e.g. Elegant pastel colors, target audience: women 25-50..."
                        className="w-full px-4 py-3 bg-white border-2 border-black rounded-none text-black placeholder-neutral-400 focus:outline-none focus:bg-neutral-50 transition-all font-sans font-semibold resize-none"
                        id="input-preferences"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3 Content */}
                {step === 3 && (
                  <div className="space-y-4" id="step-3-fields">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-black font-black tracking-wider uppercase block">
                        Where should we email your custom draft? *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-3 bg-white border-2 border-black rounded-none text-black placeholder-neutral-400 focus:outline-none focus:bg-neutral-50 transition-all font-sans font-semibold"
                        id="input-email"
                      />
                    </div>

                    <div className="p-4 rounded-none bg-neutral-50 border-2 border-black space-y-2">
                      <div className="flex gap-2 text-neutral-600 text-xs font-sans font-semibold">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                        <span><strong>No contract commitment</strong>: You will get a complete static Figma or interactive HTML draft. No obligations.</span>
                      </div>
                      <div className="flex gap-2 text-neutral-600 text-xs font-sans font-semibold">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                        <span><strong>7 Days response time</strong>: Our core designer in Nigeria builds your customized structure, starting now.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-none border-2 border-black bg-white text-black hover:bg-neutral-50 transition-colors text-sm font-sans font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                      id="modal-prev-btn"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={step === 2 && (!companyName || !businessType || (businessType === "other" && !customType.trim()))}
                      className="px-6 py-2.5 rounded-none border-2 border-black bg-black text-white hover:bg-neutral-800 font-sans font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      id="modal-next-btn"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="px-6 py-2.5 rounded-none border-2 border-black bg-black text-white hover:bg-neutral-800 font-sans font-black text-sm uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-[4px_4px_0px_0px_#7c3aed]"
                      id="modal-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Crafting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Request
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            ) : (
              /* Success view with custom high-quality interactive burst animation */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center py-8 space-y-6 overflow-hidden relative"
                id="modal-success-screen"
              >
                {/* Custom Confetti Explosion */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center" id="success-particles-container">
                  {Array.from({ length: 32 }).map((_, i) => {
                    const angle = (i / 32) * 360 + (Math.random() * 15 - 7.5);
                    const distance = 80 + Math.random() * 120;
                    const size = 6 + Math.random() * 10;
                    const colors = ["#7c3aed", "#a78bfa", "#000000", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];
                    const color = colors[i % colors.length];
                    const x = Math.cos((angle * Math.PI) / 180) * distance;
                    const y = Math.sin((angle * Math.PI) / 180) * distance;
                    const isCircle = Math.random() > 0.5;
                    const isTriangle = !isCircle && Math.random() > 0.5;

                    return (
                      <motion.div
                        key={i}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
                        animate={{
                          x,
                          y,
                          opacity: [1, 1, 0],
                          scale: [0, 1.2, 0.8],
                          rotate: Math.random() * 360 + 180,
                        }}
                        transition={{
                          duration: 1.4 + Math.random() * 0.6,
                          ease: [0.1, 0.8, 0.3, 1], // Decelerating curve
                          delay: Math.random() * 0.05,
                        }}
                        style={{
                          position: "absolute",
                          width: size,
                          height: size,
                          backgroundColor: color,
                          borderRadius: isCircle ? "50%" : isTriangle ? "0%" : "2px",
                          clipPath: isTriangle ? "polygon(50% 0%, 0% 100%, 100% 100%)" : undefined,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Central Icon Container with Pulsing Ripple Rings */}
                <div className="relative inline-flex items-center justify-center mb-2" id="success-icon-badge">
                  {/* Expanding Ripple Ring 1 */}
                  <motion.div
                    initial={{ opacity: 0.6, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 2.2 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-16 h-16 rounded-full border-4 border-purple-600/30"
                  />
                  {/* Expanding Ripple Ring 2 */}
                  <motion.div
                    initial={{ opacity: 0.4, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.7 }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-16 h-16 rounded-full border-4 border-black/20"
                  />
                  
                  {/* Sparkles visual triggers */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: [0, 1.2, 1], rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="relative p-5 rounded-none bg-purple-50 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
                  >
                    <Flame className="w-10 h-10 text-purple-600 animate-pulse" />
                    <Sparkles className="w-5 h-5 text-yellow-500 absolute -top-3.5 -right-3.5 animate-bounce stroke-[2.5]" />
                  </motion.div>
                </div>

                {/* Heading and text elements (staggered entrance) */}
                <div className="space-y-3 relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl font-sans font-black uppercase text-black tracking-tight"
                  >
                    Your Request is Received!
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                    className="text-neutral-600 font-semibold max-w-sm mx-auto text-xs sm:text-sm font-sans leading-relaxed"
                  >
                    Excellent choice! We have received your request to design a bespoke draft for <strong className="text-black font-black">{companyName}</strong>. 
                    Our team will reach out at <strong className="text-purple-600 underline decoration-2">{email}</strong> within 24 hours to confirm any specifics.
                  </motion.p>
                </div>

                {/* Simulated database locking checkmark line indicator */}
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
                  className="max-w-xs mx-auto h-1.5 bg-neutral-100 border border-black relative overflow-hidden"
                >
                  <div className="absolute top-0 bottom-0 left-0 bg-purple-600 w-full animate-pulse" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="pt-2"
                >
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-8 py-3 bg-black hover:bg-neutral-800 text-white border-2 border-black font-sans font-black text-xs uppercase tracking-widest rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    id="modal-done-btn"
                  >
                    Close Window
                  </button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
