"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AppButton } from "./app-button";
import { AppText, handleSmoothScroll } from "../utils/constants";
// import { useAppDialog } from "../hooks/use-app-dialog";

export function WhyInsuranceSection() {
  // const { openDownloadDialog, openGetCoveredDialog, DialogComponents } =
  //   useAppDialog();

  return (
    <section className="py-20 pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:pl-0 md:pr-[50px]">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Desktop Decorative smile image */}
          <motion.div
            className="absolute top-1/4 -left-32 z-0"
            // initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            // whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            style={{ maxWidth: "63vw", translateX: "-14vw" }}
          >
            <Image
              src="/images/smile-green.png"
              alt="Green smile emoji"
              width={1920}
              height={1080}
              className="drop-shadow-lg"
            />
          </motion.div>

          {/* Left Content - Image */}
          <div className="relative z-10">
            <div className="relative z-10 rounded-3xl p-8 pl-0">
              <Image
                src="/images/why-insurance.png"
                alt="Man pointing, explaining why insurance matters"
                width={4000}
                height={4000}
                className="w-full h-auto md:max-w-[660px]] lg:max-w-[760px]] xl md:max-h-[calc(100vh-5rem)]  object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 z-10 relative mb-10">
            <h2 className="text-4xl md:text-[45px] font-semibold text-gray-900 text-balance tracking-[1%]">
              Why Insurance
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Life is unpredictable, and traditional insurance is slow,
                expensive, and complicated, that's why we built Melon: simple,
                affordable, and digital-first health insurance designed for you.
              </p>
            </div>

            <div className="flex items-center px-4 sm:px-0 lg:px-0 justify-start">
              <AppButton
                // onClick={openGetCoveredDialog}
                onClick={(event) => handleSmoothScroll(event, "why-melon")}
                variant="secondary"
                size="md"
                className="min-w-[257px] md:min-w-[300px]"
              >
                {AppText.joinMelon}
              </AppButton>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-8 relative px-4">
          {/* Mobile decorative smile image */}
          <motion.div
            className="absolute top-[320px] -left-32 z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            // style={{ maxWidth: "50vw", translateX: "-10vw" }}
          >
            <Image
              src="/images/smile-green.png"
              alt="Green smile emoji"
              width={1920}
              height={1080}
              className="drop-shadow-md "
            />
          </motion.div>

          {/* Mobile Content Order */}
          {/* 1. Title */}
          <motion.div
            className="text-center z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl -mb-[10px]  md:text-4xl font-semibold text-black tracking-wide">
              Why Insurance
            </h2>
          </motion.div>

          {/* 2. Description */}
          <motion.div
            className="space-y-4 text-base text-[#2A2A2A] leading-relaxed text-center px-4 z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              Life is unpredictable, and traditional insurance is slow,
              expensive, and complicated, that's why we built Melon: simple,
              affordable, and digital-first health insurance designed for you.
            </p>
          </motion.div>

          {/* 3. Button */}
          <motion.div
            className="flex justify-center z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <AppButton
              onClick={(event) => handleSmoothScroll(event, "why-melon")}
              variant="secondary"
              size="md"
              className="min-w-[257px] md:min-w-[300px]"
            >
              {AppText.joinMelon}
            </AppButton>
          </motion.div>

          {/* 4. Image with smile behind */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-3xl  p-4 pr-10 pt-10">
              <Image
                src="/images/why-insurance.png"
                alt="Man pointing, explaining why insurance matters"
                width={4000}
                height={4000}
                className="w-full h-auto   mx-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dialog Components */}
      {/* {DialogComponents} */}
    </section>
  );
}
