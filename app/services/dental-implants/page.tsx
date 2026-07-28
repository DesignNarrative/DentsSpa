"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentalImplants() {
  const implantTypes = [
    {
      title: "Single Tooth Implant",
      desc: "Replace a single missing tooth with an implant-supported crown",
    },
    {
      title: "Multiple Teeth Implants",
      desc: "Restore several missing teeth using implant-supported bridges.",
    },
    {
      title: "Full Arch Dental Implants",
      desc: "A complete smile restoration using strategically placed implants to support an entire arch of teeth",
    },
    {
      title: "Implant-Supported Dentures",
      desc: "Enjoy greater stability and comfort with dentures securely attached to dental implants.",
    },
  ];

  const processSteps = [
    {
      step: "Step 1: Comprehensive Consultation",
      desc: "Replace a single missing tooth with an implant-supported crown",
    },
    {
      step: "Step 2: Implant Placement",
      desc: "The titanium implant is carefully placed into the jawbone under local anesthesia.",
    },
    {
      step: "Step 3: Healing & Osseointegration",
      desc: "Over the next few months, the implant naturally fuses with the jawbone to create a strong foundation.",
    },
    {
      step: "Step 4: Final Restoration",
      desc: "A custom-designed crown, bridge, or denture is securely attached to complete your smile.",
    },
  ];

  const whyChooseUs = [
    "Custom-designed restorations blend seamlessly with your natural smile.",
    "With proper care, dental implants can last for many years.",
    "Eat, speak, and smile with confidence without worrying about slipping dentures.",
    "Implants stimulate the jawbone, helping prevent bone loss after tooth extraction.",
    "Unlike removable dentures, implants become a permanent part of your smile.",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Banner Image */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/5974.jpg"
          alt="Dental Implant Treatment"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#411928]/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-caudex font-bold text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight"
          >
            Dental Implant Treatment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-instrument text-base md:text-lg text-cream/90 mt-4 max-w-xl italic"
          >
            Permanent solution for missing teeth
          </motion.p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 relative h-[300px] md:h-[380px] w-full rounded-[24px] overflow-hidden shadow-lg border border-border-neutral bg-white">
            <Image
              src="/images/28.jpg"
              alt="Dental implants restoration model"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              Dental Implant Treatment
            </span>
            <h2 className="font-caudex font-bold text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
              Designed to restore function, aesthetics, and confidence.
            </h2>
            <p className="font-instrument text-base md:text-lg text-text-dark leading-relaxed">
              Dental implants are titanium posts that are surgically placed into the jawbone to replace missing tooth roots. Once integrated with the bone, they provide a stable foundation for crowns, bridges, or dentures, offering the look, feel, and function of natural teeth.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Types of Dental Implant Treatments Section */}
      <section className="py-20 bg-[#FFF8EE]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              TREATMENTS AVAILABLE
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Types of Dental Implant Treatments
            </h2>
            <div className="w-16 h-1 bg-accent-green rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {implantTypes.map((item, i) => (
              <div
                key={i}
                className="bg-[#61826B] rounded-[24px] p-8 text-white shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <div>
                  <h3 className="font-caudex font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="font-instrument text-xs opacity-90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-white leading-tight">
              Why Choose Us?
            </h2>
            <div className="w-16 h-1 bg-cream rounded-full mb-8"></div>
            <ul className="space-y-4">
              {whyChooseUs.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <span className="text-cream font-bold text-lg select-none leading-none mt-0.5">•</span>
                  <span className="font-instrument text-sm md:text-base leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[300px] md:h-[380px] w-full rounded-[24px] overflow-hidden shadow-xl border border-white/10 bg-white/5">
            <Image
              src="/images/247.jpg"
              alt="Experienced implant specialists"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
            <span className="font-montserrat font-bold text-xs uppercase tracking-widest text-accent-green">
              STEP-BY-STEP JOURNEY
            </span>
            <h2 className="font-caudex font-bold text-3xl md:text-4xl text-primary leading-tight">
              Our Dental Implant Process
            </h2>
            <div className="w-16 h-1 bg-accent-green rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white border border-border-neutral rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-caudex font-bold text-base md:text-lg text-primary mb-2">
                  {step.step}
                </h4>
                <p className="font-instrument text-xs md:text-sm text-text-dark/85 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA section */}
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
