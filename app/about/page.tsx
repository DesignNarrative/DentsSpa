"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SmallBookingCTA from "@/components/sections/SmallBookingCTA";

export default function AboutPage() {

  const chooseUsItems = [
    {
      icon: "/images/soothing_environment_1.svg",
      title: "Soothing Environment",
    },
    {
      icon: "/images/care_after_treatment_1.svg",
      title: "Care After Treatment",
    },
    {
      icon: "/images/experts_team_1.svg",
      title: "Experts Team",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Banner Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/about_us_banner.jpg"
          alt="DDS Dental Clinic Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#411928]/45" />
      </section>

      {/* 2. Intro Text / Standards Section */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center space-y-8">
          <p className="font-caudex font-bold text-lg md:text-xl text-[#411928] leading-relaxed italic">
            Experience the new age spa dentistry which offer fear free dental treatments, astonishing makeover to facial aesthetics, the innovative preventive dental programs for every individual for having healthy, painless & cost effective dental health all life.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 pt-4">
            {chooseUsItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                    style={{
                      filter: "invert(10%) sepia(43%) saturate(2206%) hue-rotate(313deg) brightness(85%) contrast(100%)" // #380920 filter color
                    }}
                  />
                </div>
                <span className="font-caudex font-bold text-sm text-[#411928] text-left leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dr. Priti Munde Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-[360px] md:h-[420px] w-full rounded-[24px] overflow-hidden shadow-lg border border-border-neutral"
          >
            <Image
              src="/images/priti_munde.jpg"
              alt="Dr. Priti Munde"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-1">
              <h2 className="font-caudex font-bold text-2xl md:text-3xl text-primary">
                Dr. Priti Munde
              </h2>
              <p className="font-instrument text-xs md:text-sm text-text-dark leading-relaxed font-semibold">
                BDS , PGDMLS <br />
                Registration No : A - 17135 <br />
                Certified Implantologist & Cosmetic Dental Surgeon
              </p>
            </div>

            <div className="text-xs md:text-sm font-instrument text-text-dark space-y-3 leading-relaxed">
              <p>
                Dr. Priti Munde is showered with awards and recognition for her strenuous and gleeful work. Nominated as best clinic interior in 2015, esthetic centre of the year in 2016 at Famdent Awards, Dr. Priti Munde has also been nominated as Outstanding Dentist of the year in 2016 and bagged an award as Jury of Esthetic Practice at Year 2016 at Indian Health Professional awards.
              </p>
              <p>
                Marking her way in every field, Dr. Priti Munde has organised 25+ camps in Infosys, TCS, Vodafone etc. Dr. Priti also performed a role of Dental Consultants to the renowned star icons as well.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Pricing Plans Section */}
      <section className="relative py-24 overflow-hidden bg-cream-light">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/7026.jpg"
            alt="Dental Pricing Plans Background"
            fill
            className="object-cover object-center opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-light/30 via-cream-light/45 to-cream-light/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
          {/* Tag/Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-white/65 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
            Price Packages
          </div>

          {/* Heading */}
          <h2 className="font-caudex font-bold text-3xl md:text-4xl lg:text-5xl text-primary text-center mb-16 tracking-wide uppercase">
            Pricing Plans
          </h2>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-stretch">
            {/* Card 1: Essential Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-border-neutral/20 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <h3 className="font-caudex font-bold text-2xl text-primary mb-2">
                  Essential Care
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-xl font-bold text-primary">₹2,999</span>
                  <span className="text-xs text-text-dark/70 font-medium">/ year</span>
                </div>
                <div className="w-full h-[1px] bg-border-neutral/60 mb-6" />
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Comprehensive Dental Checkups
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Professional Teeth Cleaning
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Digital Oral Examination
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Personalized Oral Hygiene Guidance
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 rounded-xl border border-primary text-primary bg-white font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-center block">
                Enroll Now
              </Link>
            </motion.div>

            {/* Card 2: Smile Care Plus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-accent-green rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-8 -translate-y-8" />
              
              <div>
                <h3 className="font-caudex font-bold text-2xl text-white mb-2">
                  Smile Care Plus
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-xl font-bold text-white">₹5,999</span>
                  <span className="text-xs text-white/80 font-medium">/ year</span>
                </div>
                <div className="w-full h-[1px] bg-white/20 mb-6" />
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-xs md:text-sm text-white font-medium leading-relaxed">
                    <span className="text-white mt-0.5">•</span>
                    Everything in Essential Care
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-white font-medium leading-relaxed">
                    <span className="text-white mt-0.5">•</span>
                    Digital X-rays (as required)
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-white font-medium leading-relaxed">
                    <span className="text-white mt-0.5">•</span>
                    Fluoride Treatment
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-white font-medium leading-relaxed">
                    <span className="text-white mt-0.5">•</span>
                    Priority Appointment Scheduling
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-white font-medium leading-relaxed">
                    <span className="text-white mt-0.5">•</span>
                    Exclusive Discounts on Treatments
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 rounded-xl bg-white text-accent-green border border-white font-bold text-sm hover:bg-white/95 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center shadow-md block">
                Enroll Now
              </Link>
            </motion.div>

            {/* Card 3: Platinum Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-white/10 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <h3 className="font-caudex font-bold text-2xl text-primary mb-2">
                  Platinum Plan
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-xl font-bold text-primary">₹9,999</span>
                  <span className="text-xs text-text-dark/70 font-medium">/ year</span>
                </div>
                <div className="w-full h-[1px] bg-border-neutral/60 mb-6" />
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Unlimited Routine Consultations
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Professional Cleanings
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Preventive Dental Screenings
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Cosmetic Dentistry Discounts
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Priority Support
                  </li>
                  <li className="flex items-start gap-3 text-xs md:text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    Personalized Annual Smile Assessment
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 rounded-xl border border-primary text-primary bg-white font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-center block">
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Compact single-line Booking CTA above footer */}
      <SmallBookingCTA />
    </div>
  );
}
