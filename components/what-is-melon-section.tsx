"use client";

import Image from "next/image";
import { Calendar, Mail } from "lucide-react";
import Logo from "./logo";
import { motion } from "motion/react";
import { AppButton } from "./app-button";
import { AppText } from "../utils/constants";
import { useAppDialog } from "../hooks/use-app-dialog";

export function WhatIsMelonSection() {
  const { openDownloadDialog, DialogComponents } = useAppDialog();

  return (
    <section id="what-is-melon" className="py-10 bg-white">
      <div className="max-w-7xl md:mx-auto  md:w-full w-screen">
        <div className="text-center px-4 sm:px-6 lg:px-8 space-y-8 mb-8">
          <h2 className="text-[23px] tracking-[1%] md:text-4xl font-medium text-gray-900 flex items-center pb-0 justify-center gap-1 md:gap-2">
            Hello
            <span className="text-blue-600 pl-[2px] md:pl-0 pt-[1px]">
              <Logo className="w-[91px] md:w-[170px]" />
            </span>
          </h2>

          <p className="text-md   text-black max-w-4xl px-4 mx-auto leading-relaxed text-pretty">
            A new kind of health insurance experience, simple, digital, and
            affordable for Africans and their families, whether at home, abroad,
            or on the move.
          </p>

          <div className="flex items-center px-4 sm:px-6 lg:px-8 justify-center">
            <AppButton
              onClick={openDownloadDialog}
              variant="primary"
              size="md"
              className="min-w-[257px] md:min-w-[300px]"
            >
              {AppText.downloadTheApp}
            </AppButton>
          </div>
        </div>

        <Features />
      </div>

      {/* Dialog Components */}
      {DialogComponents}
    </section>
  );
}

const Features = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-start md:gap-8 gap-2 relative">
        {/* Decorative smile images */}
        <div
          className="absolute top-1/4 -left-32 z-0  "
          // initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          // whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          // transition={{ duration: 0.6, delay: 1.0 }}
          // viewport={{ once: true }}
          style={{ maxWidth: "63vw", translate: "-20vw" }}
        >
          <Image
            src="/images/smile.png"
            alt="Smile emoji"
            width={1920}
            height={1080}
            className="drop-shadow-lg"
          />
        </div>

        {/* Left Phone */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hello-melon-phone1.png"
            alt="Melon app showing service provider search"
            width={3000}
            height={3000}
            className="w-auto h-auto max-w-[300px]"
          />
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="relative pt-14 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hello-melon-phone2.png"
            alt="Melon app showing points modal"
            width={3000}
            height={3000}
            className="w-auto h-auto max-w-[300px]"
          />
        </motion.div>

        {/* Desktop Notification Cards */}
        {/* Care Package Renewal Card */}
        <motion.div
          className="absolute top-[166px] md:left-4 left-1 bg-white/50 backdrop-blur-md rounded-md md:rounded-xl shadow-lg p-1 md:p-4 max-w-xs z-10"
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1 md:gap-3">
            <div className="md:w-12 md:h-12 w-6 h-6 bg-[#23BDEE] rounded-md md:rounded-xl flex items-center justify-center">
              <Calendar className="md:w-6 md:h-6 w-3 h-3" color="white" />
            </div>
            <div>
              {/* <p className="text-sm font-medium text-gray-900">
                Your Melon Care package
              </p> */}
              <p className="text-[6px] md:text-sm text-gray-600">
                {" "}
                Your Melon Care package has
              </p>
              <p className="text-[6px] md:text-sm text-gray-600">
                been renewed successfully!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Congratulations Card */}
        <motion.div
          className="absolute bottom-16 right-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-4 max-w-xs z-10"
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#F88C3D] rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6" color="white" />
            </div>
            <div>
              <p className="text-md font-medium text-black">Congratulations!</p>
              <p className="text-sm text-gray-600">You earned Melon Points</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex-col items-center pt-7 space-y-12 px-0 relative">
        <Image
          src="/images/hello-melon-phones.png"
          alt="Hello Melon Phones"
          width={1920}
          height={1080}
          className="drop-shadow-md"
        />
      </div>
    </div>
  );
};
