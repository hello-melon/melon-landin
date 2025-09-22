"use client";

import Image from "next/image";
import Logo from "./logo";
import { motion } from "motion/react";

const benefits = [
  {
    image: "/images/mobile.png",
    title: "Instant sign-up",
    description: "No paperwork, no waiting, just download and go.",
  },
  {
    image: "/images/money.png",
    title: "Affordable plans",
    description: "Real coverage at prices that fit your budget.",
  },
  {
    image: "/images/help.png",
    title: "Reliable support",
    description:
      "Get real support from a person, by email, phone, or in real time when you need it.",
  },
  {
    image: "/images/building.png",
    title: "Healthcare network",
    description:
      "Access to a growing network of quality hospitals and pharmacies.",
  },

  {
    image: "/images/verify.png",
    title: "Clear terms",
    description: "No hidden fees, no surprises.",
  },
];

export function WhyChooseBenefitsSection() {
  return (
    <section id="why-melon" className="py-20 bg-main-700">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-medium text-white flex items-center justify-center gap-1 md:gap-2">
            Why Choose{" "}
            <span className="text-blue-600 pl-[2px] md:pl-0 pt-2">
              <Logo className="w-[90px] md:w-[160px]" useWhite />
            </span>
          </h2>
        </div>

        {/* Desktop Layout: 3 columns, Mobile Layout: 2 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-10 gap-0 lg:gap-14 max-w-7xl mx-auto lg:[&>*:nth-child(1)]:col-span-2 lg:[&>*:nth-child(2)]:col-span-2 lg:[&>*:nth-child(3)]:col-span-2 lg:[&>*:nth-child(4)]:col-span-2 lg:[&>*:nth-child(4)]:col-start-2 lg:[&>*:nth-child(5)]:col-span-2 lg:[&>*:nth-child(5)]:col-start-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`text-left md:text-center md:px-10 md:pl-6 ${
                index % 2 === 0 ? "px-5" : "px-2 pl-1"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <div className="w-10 h-10 3xl:w-20 3xl:h-20 md:mx-auto mb-4 lg:mb-6">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={4000}
                  height={4000}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-medium  text-white mb-3 lg:mb-4">
                {benefit.title}
              </h3>
              <p className="text-[#D1D1D1] leading-relaxed text-base md:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
