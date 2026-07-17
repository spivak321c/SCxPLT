/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Check, CalendarCheck, MapPin, ShoppingBag, Share2, Sparkles, Send, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export default function InquiryModal({ isOpen, onClose, initialType = "local" }: InquiryModalProps) {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(initialType);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            {/* Ambient glows inside card */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

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
                        placeholder="e.g. Grechow's Beauty"
                        className="w-full px-4 py-3 bg-white border-2 border-black rounded-none text-black placeholder-neutral-400 focus:outline-none focus:bg-neutral-50 transition-all font-sans font-semibold"
                        id="input-company-name"
                      />
                    </div>
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
                        <span><strong>7 Days response time</strong>: Our core designer in Germany builds your customized structure, starting now.</span>
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
                      disabled={step === 2 && !companyName}
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
              /* Success view */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4 animate-fade-in"
                id="modal-success-screen"
              >
                <div className="inline-flex p-3 rounded-none bg-purple-50 border-2 border-black mb-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <Flame className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-sans font-black uppercase text-black">Your Request is Received!</h3>
                <p className="text-neutral-600 font-semibold max-w-sm mx-auto text-sm font-sans">
                  Excellent choice! We have received your request to design a bespoke draft for <strong>{companyName}</strong>. 
                  Our team will reach out at <strong>{email}</strong> within 24 hours to confirm any specifics.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white border-2 border-black font-sans font-black text-sm uppercase tracking-widest rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
                    id="modal-done-btn"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
