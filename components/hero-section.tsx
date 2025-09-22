"use client";

import { AppButton } from "./app-button";
import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "motion/react";
import { AppText, handleSmoothScroll } from "../utils/constants";
import { useAppDialog } from "../hooks/use-app-dialog";

export function HeroSection() {
  const { openGetCoveredDialog, DialogComponents } = useAppDialog();

  return (
    <section className="relative md:h-[calc(90vh-5rem)]  2xl:h-[calc(80vh-5rem)]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-main-700  "></div>

      <div className="relative md:h-[calc(90vh-5rem)] 2xl:h-[calc(80vh-5rem)] mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr] gap-0 md:h-[calc(90vh-5rem)] 2xl:h-[calc(80vh-5rem)] items-center w-full">
          {/* Right Content - Hero Text (Mobile: Order 1) */}
          <div className="text-white space-y-6 flex-1 lg:pr-8 llg:pl-8 z-10 order-1 lg:order-2 px-4 lg:px-0 pt-[100px] lg:pt-0 flex flex-col justify-center lg:justify-start">
            <TextAnimate
              animation="fadeIn"
              className="md:hidden block text-center md:text-left text-2xll text-[29px] md:text-3xl lg:text-5xl xl:text-5xl font-bold leading-[1.3] tracking-tight"
              by="line"
              as="h1"
            >
              {`Insurance, Reimagined for Africans Everywhere.`}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              className="md:block xl:block lg:block 2xl:hidden hidden text-center md:text-left text-2xll text-[29px] md:text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-[1.3] tracking-tight"
              by="line"
              as="h1"
            >
              {`Insurance, Reimagined for Africans Everywhere.`}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              className="lg:hidden md:hidden xl:hidden 2xl:block hidden text-center md:text-left text-2xll text-[29px] md:text-3xl lg:text-3xl xl:text-5xl font-bold leading-[1.3] tracking-tight"
              by="line"
              as="h1"
            >
              {`Insurance, Reimagined for Africans \nEverywhere.`}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              className="text-center md:text-left text-lgg text-[16px] pxx-4 md:text-xl lg:text-xl 2xl:text-2xl text-white/90 leading-relaxed xl:max-w-3xl md:max-w-xl"
              by="line"
              as="p"
              delay={0.5}
            >
              {` Sign up in minutes. Get covered instantly. Protect yourself and your loved ones with peace of mind that travels wherever you do.`}
            </TextAnimate>

            <motion.div
              className="flex md:flex-row flex-col items-center gap-5 sm:gap-4 pt-4 w-full max-w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <AppButton
                onClick={openGetCoveredDialog}
                variant="primary"
                size="md"
                className="flex sm:flex-none min-w-[257px] md:w-auto"
              >
                {AppText.getCoveredInMinutes}
              </AppButton>

              <AppButton
                onClick={(event) => handleSmoothScroll(event, "how-it-works")}
                variant="outline-secondary"
                size="md"
                className="flex sm:flex-none min-w-[255px] md:w-auto"
              >
                How Melon works
              </AppButton>
            </motion.div>
          </div>

          {/* Left Content - Main Image (Mobile: Order 2) */}
          <div className="relative flex items-end md:h-[calc(90vh-5rem)]  2xl:h-[calc(80vh-5rem)] justify-start order-2 lg:order-1 md:pl-4 lg:pl-0">
            {/* Main image container */}
            <div className="hidden md:block relative z-10 md:max-w-[660px] lg:max-w-[600px] 2xl:max-w-[730px]">
              <Image
                src="/images/woman-smiling-looking-at-melon-app.png"
                alt="Smiling woman with phone using Melon health insurance app"
                width={3000}
                height={3000}
                className="w-full h-auto max-h-[calc(100vh-5rem)] object-contain object-bottom"
                priority
              />
            </div>
            <div className="md:hidden block relative z-10">
              <Image
                src="/images/woman-smiling-looking-at-melon-app-mobile.png"
                alt="Smiling woman with phone using Melon health insurance app"
                width={3000}
                height={3000}
                className="w-full max-w-[90vw] h-auto md:max-w-[660px]] pt-6 lg:max-w-[760px]] xl md:max-h-[calc(100vh-5rem)]  object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Components */}
      {DialogComponents}
    </section>
  );
}
