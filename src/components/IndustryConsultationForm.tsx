"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface IndustryConsultationFormProps {
    industries: string[];
    defaultIndustry?: string;
    formTitle?: string;
    formDescription?: string;
    className?: string;
}

export default function IndustryConsultationForm({
    industries,
    defaultIndustry,
    formTitle = "Initiate Your Project Brief",
    formDescription = "Share a few details about your business and requirements. Our team will connect with you to discuss the next steps.",
    className = "",
}: IndustryConsultationFormProps) {
    const [inquiryIndustry, setInquiryIndustry] = useState(defaultIndustry || industries[0] || "");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (defaultIndustry) {
            setInquiryIndustry(defaultIndustry);
        }
    }, [defaultIndustry]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    service: `${inquiryIndustry} — ${formData.service || "General"}`,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    message: formData.message || "Project brief submitted from Industries page.",
                    source: "Industries Page",
                    source_page: "/industries",
                    collection: "industry_inquiries",
                }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
                console.warn("Industry form submit warning:", data.error);
            }
            setFormSubmitted(true);
        } catch (err) {
            console.error("Industry form submit error:", err);
            setFormSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`industry-consult-right ${className}`}>
            {formSubmitted ? (
                <div className="p-8 bg-black/60 border border-[#FFD400]/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#FFD400]/20 border border-[#FFD400] text-[#FFD400] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                        Enquiry Received
                    </h3>
                    <p className="text-xs text-neutral-300 font-mono max-w-md mx-auto">
                        Thank you. Our team will review your requirements and get in touch to discuss the next steps.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Form header */}
                    <div className="pb-3 border-b border-white/10">
                        <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white uppercase tracking-tight">
                            {formTitle}
                        </h3>
                        <p className="text-xs text-neutral-400 font-light mt-0.5">
                            {formDescription}
                        </p>
                    </div>

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                Your Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                Business Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="your@business.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 2: Industry + Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                Select Your Industry <span className="text-red-400">*</span>
                            </label>
                            <select
                                required
                                value={inquiryIndustry}
                                onChange={(e) => setInquiryIndustry(e.target.value)}
                                className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                            >
                                {!industries.includes(inquiryIndustry) && inquiryIndustry && (
                                    <option value={inquiryIndustry}>{inquiryIndustry}</option>
                                )}
                                {industries.map((industry) => (
                                    <option key={industry} value={industry}>
                                        {industry}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                Service You&apos;re Interested In
                            </label>
                            <select
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                            >
                                <option value="">Select a service</option>
                                <option value="Technology Solutions">Technology Solutions</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Branding & Design">Branding &amp; Design</option>
                                <option value="Media Production">Media Production</option>
                                <option value="All / Integrated Solution">All / Integrated Solution</option>
                            </select>
                        </div>
                    </div>

                    {/* Row 3: Budget */}
                    <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                            Expected Budget
                        </label>
                        <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                        >
                            <option value="">Select budget range</option>
                            <option value="Below ₹25,000">Below ₹25,000</option>
                            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                            <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                            <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000</option>
                            <option value="₹3,00,000 – ₹5,00,000">₹3,00,000 – ₹5,00,000</option>
                            <option value="₹5,00,000+">₹5,00,000+</option>
                            <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                        </select>
                    </div>

                    {/* Row 4: Project Brief */}
                    <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                            Tell Us About Your Project
                        </label>
                        <textarea
                            rows={3}
                            placeholder="Describe your business, objectives, challenges and what you're looking to achieve..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full p-3 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <span>Submit Project Brief</span>
                                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
