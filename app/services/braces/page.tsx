"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function BracesTreatment() {
  const problems = [
    "Crowded Teeth",
    "Gaps Between Teeth",
    "Crooked or Misaligned Teeth",
    "Overbite",
    "Underbite",
    "Crossbite",
    "Open Bite",
    "Jaw Alignment Issues",
  ];

  const processSteps = [
    {
      title: "Consultation & Smile Assessment",
      desc: "A comprehensive evaluation of your teeth, bite, and smile goals to create a personalized treatment plan.",
    },
    {
      title: "Digital X-rays & 3D Scan",
      desc: "Advanced digital imaging provides precise diagnostics for accurate orthodontic planning.",
    },
    {
      title: "Customized Treatment Planning",
      desc: "A tailored braces plan is designed to achieve optimal alignment and long-lasting results.",
    },
    {
      title: "Braces Placement",
      desc: "Your braces are carefully fitted for comfort, precision, and effective tooth movement",
    },
    {
      title: "Regular Progress Visits",
      desc: "Routine adjustment appointments ensure your treatment stays on track and progresses smoothly.",
    },
    {
      title: "Braces Removal & Retainers",
      desc: "Once your smile is perfectly aligned, retainers help maintain your beautiful results for years to come.",
    },
  ];

  const bracesTypes = [
    {
      title: "Metal Braces",
      desc: "Strong, reliable, and highly effective for treating simple to complex orthodontic cases.",
      image: "/images/metal.jpg",
    },
    {
      title: "Ceramic Braces",
      desc: "Tooth-colored brackets that blend naturally with your smile for a more discreet appearance.",
      image: "/images/ceramic-braces.webp",
    },
    {
      title: "Self-Ligating Braces",
      desc: "Modern braces with specialized brackets that reduce friction, improve comfort, and may shorten treatment time.",
      image: "/images/self-ligating-braces.webp",
    },
  ];

  const faqs = [
    {
      q: "How long does orthodontic treatment take?",
      a: "On average, treatment takes 12 to 24 months, depending on the complexity of the alignment and patient compliance.",
    },
    {
      q: "What is the best age for orthodontic checkups?",
      a: "We recommend a child's first orthodontic evaluation around age 7 to detect any developmental issues early.",
    },
    {
      q: "How often do I need adjustment visits?",
      a: "Adjustment appointments are typically scheduled every 4 to 6 weeks to monitor progress and adjust tension.",
    },
    {
      q: "Does getting braces or aligners hurt?",
      a: "You may experience mild soreness or pressure for a few days after placement or adjustments, which is easily managed.",
    },
    {
      q: "What can I eat while wearing metal braces?",
      a: "Avoid sticky, hard, or overly chewy foods like caramel, popcorn, and whole apples to prevent bracket damage.",
    },
    {
      q: "How do I clean my teeth with braces on?",
      a: "Use a soft-bristled brush, interdental brushes, and floss threaders to clean carefully around all brackets and wires.",
    },
  ];

  // Accordion active state trackers
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero / Top Banner */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/9159.jpg"
          alt="Orthodontic Treatment - Braces Banner"
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
            Orthodontic Treatment - Braces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-instrument text-base md:text-lg text-cream/90 mt-4 max-w-xl italic"
          >
            Straighten Your Smile with Modern Braces
          </motion.p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 relative h-[300px] md:h-[380px] w-full rounded-[24px] overflow-hidden shadow-lg border border-border-neutral bg-white">
            <Image
              src="/images/13103.jpg"
              alt="Precision Braces"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              Braces Treatment
            </span>
            <h2 className="font-caudex font-bold text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
              Precision Braces. Lasting Confidence.
            </h2>
            <div className="font-instrument text-base md:text-lg text-text-dark leading-relaxed space-y-4">
              <p>
                Braces are fixed orthodontic appliances that gradually move teeth into their ideal position using gentle, controlled pressure. They help improve both the appearance of your smile and the overall function of your bite.
              </p>
              <p>
                Whether your concern is crowded teeth, spacing, or bite correction, braces provide predictable and long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problems We Treat Section */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          {/* Left Column (Burgundy Background) */}
          <div className="md:col-span-6 bg-[#411928] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6">
            <h3 className="font-caudex font-bold text-2xl md:text-3xl leading-snug">
              Common Orthodontic Problems We Treat
            </h3>
            <ul className="space-y-2.5">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base font-instrument text-cream/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green flex-shrink-0" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Image) */}
          <div className="md:col-span-6 relative min-h-[350px] md:min-h-full w-full">
            <Image
              src="/images/54356.jpg"
              alt="Orthodontic Patient Examination"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Our Braces Treatment Process Section */}
      <section className="py-20 bg-[#FFF8EE]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              STEPS TO PERFECTION
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Our Braces Treatment Process
            </h2>
            <div className="w-16 h-1 bg-accent-green rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-[#61826B] rounded-[24px] p-8 text-white shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <div>
                  <h3 className="font-caudex font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="font-instrument text-xs opacity-90 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Types of Braces Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              BRACES VARIETIES
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Types of Braces
            </h2>
            <div className="w-16 h-1 bg-accent-green rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bracesTypes.map((type, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden shadow-sm border border-border-neutral bg-[#FFF8EE]">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-caudex font-bold text-lg md:text-xl text-primary pt-2">
                  {type.title}
                </h3>
                <p className="font-instrument text-xs md:text-sm text-text-dark/85 max-w-sm leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
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

      {/* 7. GIF / Video Section */}
      <section className="py-12 bg-white flex justify-center border-b border-border-neutral/30">
        <div className="max-w-4xl w-full px-6">
          <div className="relative aspect-video rounded-[24px] overflow-hidden shadow-lg border border-border-neutral bg-[#FFF8EE]">
            <Image
              src="/images/untitled_design.gif"
              alt="Animated Braces treatment demonstration"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
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
