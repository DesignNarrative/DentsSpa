"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function InvisalignTreatment() {
  const steps = [
    {
      step: "Step 1",
      title: "Digital Consultation",
      desc: "We evaluate your teeth and discuss your smile goals.",
    },
    {
      step: "Step 2",
      title: "Digital Smile Simulation",
      desc: "See a 3D simulation of your future straight smile before you start.",
    },
    {
      step: "Step 3",
      title: "Custom Aligner Creation",
      desc: "Your aligners are custom-made for comfort and precision.",
    },
    {
      step: "Step 4",
      title: "Wear & Adjust",
      desc: "Wear each set for 1-2 weeks, removing them to eat and brush.",
    },
    {
      step: "Step 5",
      title: "Progress Check-ups",
      desc: "Visit us every 6-8 weeks to monitor progress and receive new aligners.",
    },
    {
      step: "Step 6",
      title: "Retainers",
      desc: "Maintain your beautiful new smile with custom retainers.",
    },
  ];

  const faqs = [
    {
      q: "How does Invisalign work?",
      a: "Invisalign uses a series of clear, custom-fit, BPA-free plastic aligners that apply gentle force to gradually shift your teeth into position.",
    },
    {
      q: "How long do I need to wear aligners daily?",
      a: "For best results, aligners must be worn for 20 to 22 hours per day, removing them only to eat, drink, brush, and floss.",
    },
    {
      q: "Is Invisalign treatment painful?",
      a: "You may feel mild pressure or discomfort for the first few days of wearing a new set of aligners, which shows they are working.",
    },
    {
      q: "Can I eat or drink with aligners on?",
      a: "No, you must remove your aligners before eating or drinking anything other than plain water to prevent staining and damage.",
    },
    {
      q: "How do I clean my Invisalign aligners?",
      a: "Clean your aligners daily by brushing them gently with a soft toothbrush and lukewarm water, or using Invisalign cleaning crystals.",
    },
    {
      q: "Is Invisalign faster than traditional braces?",
      a: "Treatment time varies, but many cases are completed in 6 to 18 months, which is often comparable to or faster than braces.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero / Top Banner */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/2151053287.jpg"
          alt="Orthodontic Treatment - Invisalign Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#411928]/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-caudex font-bold text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight"
          >
            Orthodontic Treatment - Invisalign
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-instrument text-base md:text-lg text-cream/90 mt-4 max-w-xl italic"
          >
            Straighten Your Teeth - Virtually Invisible.
          </motion.p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 relative h-[300px] md:h-[380px] w-full rounded-[24px] overflow-hidden shadow-lg border border-border-neutral bg-white">
            <Image
              src="/images/2151053313.jpg"
              alt="Every Great Smile Begins with the Right Alignment"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              Invisalign Treatment
            </span>
            <h2 className="font-caudex font-bold text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
              Every Great Smile Begins with the Right Alignment.
            </h2>
            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              Invisalign offers a modern, discreet alternative to traditional braces. Utilizing a series of custom-made, clear, and removable aligners, Invisalign gently shifts your teeth into alignment without the use of metal brackets or wires. It is the perfect choice for adults and teens seeking a virtually invisible way to improve their smile.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Invisalign Treatment Process Section */}
      <section className="py-20 bg-[#61826B] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <h2 className="font-caudex font-bold text-3xl md:text-4xl leading-tight">
              Our Invisalign Treatment Process
            </h2>
            <div className="w-16 h-1 bg-white/40 rounded-full"></div>
          </div>

          {/* Steps list with arrows */}
          <div className="space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Step 1 */}
              <div className="md:col-span-1 space-y-2 text-center md:text-left">
                <span className="font-montserrat font-bold text-xs text-white/60 block">{steps[0].step}</span>
                <h4 className="font-caudex font-bold text-base md:text-lg">{steps[0].title}</h4>
                <p className="font-instrument text-xs text-white/80 leading-relaxed">{steps[0].desc}</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:flex justify-center text-white/40 md:col-span-1">
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Step 2 */}
              <div className="md:col-span-1 space-y-2 text-center md:text-left">
                <span className="font-montserrat font-bold text-xs text-white/60 block">{steps[1].step}</span>
                <h4 className="font-caudex font-bold text-base md:text-lg">{steps[1].title}</h4>
                <p className="font-instrument text-xs text-white/80 leading-relaxed">{steps[1].desc}</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:flex justify-center text-white/40 md:col-span-1">
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Step 3 */}
              <div className="md:col-span-1 space-y-2 text-center md:text-left">
                <span className="font-montserrat font-bold text-xs text-white/60 block">{steps[2].step}</span>
                <h4 className="font-caudex font-bold text-base md:text-lg">{steps[2].title}</h4>
                <p className="font-instrument text-xs text-white/80 leading-relaxed">{steps[2].desc}</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center pt-4 border-t border-white/10">
              {/* Step 4 */}
              <div className="md:col-span-1 space-y-2 text-center md:text-left">
                <span className="font-montserrat font-bold text-xs text-white/60 block">{steps[3].step}</span>
                <h4 className="font-caudex font-bold text-base md:text-lg">{steps[3].title}</h4>
                <p className="font-instrument text-xs text-white/80 leading-relaxed">{steps[3].desc}</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:flex justify-center text-white/40 md:col-span-1">
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Step 5 */}
              <div className="md:col-span-1 space-y-2 text-center md:text-left">
                <span className="font-montserrat font-bold text-xs text-white/60 block">{steps[4].step}</span>
                <h4 className="font-caudex font-bold text-base md:text-lg">{steps[4].title}</h4>
                <p className="font-instrument text-xs text-white/80 leading-relaxed">{steps[4].desc}</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:flex justify-center text-white/40 md:col-span-1">
                <ArrowRight className="w-6 h-6" />
              </div>

              {/* Step 6 */}
              <div className="md:col-span-1 space-y-2 text-center md:text-left">
                <span className="font-montserrat font-bold text-xs text-white/60 block">{steps[5].step}</span>
                <h4 className="font-caudex font-bold text-base md:text-lg">{steps[5].title}</h4>
                <p className="font-instrument text-xs text-white/80 leading-relaxed">{steps[5].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GIF / Video Section */}
      <section className="py-12 bg-white flex justify-center border-b border-border-neutral/30">
        <div className="max-w-4xl w-full px-6">
          <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-lg border border-border-neutral bg-[#FFF8EE]">
            <Image
              src="/images/download_3.gif"
              alt="Animated Invisalign treatment demonstration"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 bg-[#FFF8EE]/40 border-t border-b border-border-neutral/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              COMMON QUESTIONS
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              FAQs
            </h2>
            <div className="w-16 h-1 bg-accent-green rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-border-neutral overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 font-caudex font-bold text-sm md:text-base text-primary hover:bg-[#FFF8EE]/20 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-accent-green transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-border-neutral/30 font-instrument text-xs md:text-sm text-text-dark/80 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-16 bg-[#FFF8EE] border-t border-border-neutral/30">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-caudex font-bold text-xl md:text-2xl text-primary">
              Ready to Book Your Appointment?
            </h3>
            <p className="font-instrument text-xs md:text-sm text-text-dark/80 max-w-xl leading-relaxed">
              Contact us today to schedule your visit and take the first step toward a healthier smile.
            </p>
          </div>
          <Link
            href="/book"
            className="px-6 py-3 bg-white text-primary border border-primary font-bold text-sm rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap font-semibold"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
