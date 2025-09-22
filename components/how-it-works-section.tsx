"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TextAnimate } from "./magicui/text-animate";
import { AppButton } from "./app-button";
import { AppText } from "../utils/constants";
import { useAppDialog } from "../hooks/use-app-dialog";

export function HowItWorksSection() {
  const { openDownloadDialog, openGetCoveredDialog, DialogComponents } = useAppDialog();

  const steps = [
    "Create your account and choose a package.",
    "Get covered instantly",
    "Visit a partner hospital whenever you need care.",
    "Billing is handled directly between our insurance partners and healthcare providers.",
  ];

  return (
    <section
      id="how-it-works"
      className="relative md:h-[calc(100vh-5rem)]   overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-main-700  "></div>

      <div className="relative md:h-[calc(100vh-5rem)] mx-auto w-full">
        <div className="grid lg:grid-cols-[auto_1fr] gap-0 md:h-[calc(100vh-5rem)] items-center md:w-full w-screen">
          {/* Right Content - Hero Text (Mobile: Order 1) */}
          <div className="text-white space-y-3 flex-1   lg:pr-8 lg:pl-8 z-10 order-1 lg:order-2 px-6 lg:px-0  pt-[50px] md:pt-[100px] lg:pt-0 flex flex-col justify-center lg:justify-start  md:w-full w-screen">
            <TextAnimate
              animation="fadeIn"
              className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl xl:text-5xl pb-0 font-semibold   tracking-tight"
              by="line"
              as="h1"
            >
              {`How it Works`}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              className="text-center md:text-left text-lg md:text-xl lg:text-xl text-white/90 leading-relaxed max-w-xl"
              by="line"
              as="p"
              delay={0.5}
            >
              {`Download. Sign up. Covered. Just like that.`}
            </TextAnimate>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 pb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex justify-center sm:justify-start w-full">
                <AppButton
                  onClick={openDownloadDialog}
                  variant="primary"
                  size="md"
                  className="min-w-[257px] md:min-w-[300px]"
                >
                  {AppText.downloadTheApp}
                </AppButton>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 pt-5"
              initial={{ opacity: 1 }}
              // whileInView={{ opacity: 1 }}
              // transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  // initial={{ opacity: 0, x: -20 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-[#04c751] rounded-full flex items-center justify-center text-white font-bold text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    // transition={{
                    //   duration: 0.3,
                    //   delay: 0.4 + index * 0.1,
                    //   type: "spring",
                    //   stiffness: 400,
                    // }}
                    viewport={{ once: false }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-lg text-blue-50 leading-relaxed max-w-[500px]">
                    {step}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Left Content - Main Image (Mobile: Order 2) */}
          <div className="relative flex items-start md:h-[calc(100vh-5rem)] justify-start lg:justify-start order-2 lg:order-1 md:-ml-8 lg:-ml-12">
            {/* Main image container */}
            <div className="relative z-10 md:max-w-[660px] lg:max-w-[760px] xl:max-w-[800px] -left-[29px] md:-left-0">
              <Image
                src="/images/how-it-works.png"
                alt="Smiling woman with phone using Melon health insurance app"
                width={4000}
                height={4000}
                className="w-full h-auto max-h-[calc(100vh-5rem)] object-contain object-left"
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

// <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 md:h-[calc(100vh-5rem)] items-center   md:w-full w-screen">
//         {/* Right Content - Hero Text (Mobile: Order 1) */}
//         <div className="text-white space-y-3 flex-1 lg:pr-8 lg:pl-8 z-10 order-1 lg:order-2 px-6 lg:px-0 pt-[50px] md:pt-[100px] lg:pt-0 flex flex-col justify-center lg:justify-start w-full">
//           <TextAnimate
//             animation="fadeIn"
//             className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl xl:text-5xl pb-0 font-bold   tracking-tight"
//             by="line"
//             as="h1"
//           >
//             {`How it Works`}
//           </TextAnimate>

//           <TextAnimate
//             animation="fadeIn"
//             className="text-center md:text-left text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl"
//             by="line"
//             as="p"
//             delay={0.5}
//           >
//             {`Download. Sign up. Covered. Just like that.`}
//           </TextAnimate>

//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 pt-4 pb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.5 }}
//           >
//             <Button className="bg-[#00B74A] hover:bg-[#00A041] text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 min-w-[240px]">
//               {AppText.downloadTheApp}
//               <div className="bg-white/20 rounded-full p-1">
//                 <ArrowRight className="w-5 h-5" />
//               </div>
//             </Button>
//           </motion.div>

//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             viewport={{ once: false }}
//           >
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start gap-4"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 0.9 + index * 0.15,
//                   ease: "easeOut",
//                 }}
//                 viewport={{ once: false }}
//               >
//                 <motion.div
//                   className="flex-shrink-0 w-8 h-8 bg-[#04c751] rounded-full flex items-center justify-center text-white font-bold text-sm"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{
//                     duration: 0.4,
//                     delay: 1.0 + index * 0.15,
//                     type: "spring",
//                     stiffness: 300,
//                   }}
//                   viewport={{ once: false }}
//                 >
//                   {index + 1}
//                 </motion.div>
//                 <p className="text-lg text-blue-50 leading-relaxed">{step}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Left Content - Main Image (Mobile: Order 2) */}
//         <div className="relative flex items-center md:pt-20 md:h-[calc(100vh-5rem)] justify-center lg:justify-start order-2 lg:order-1 px-6 lg:px-0 pb-8 lg:pb-0">
//           {/* Main image container */}
//           <div className="relative z-10">
//             <Image
//               src="/images/how-it-works.png"
//               alt="Smiling woman with phone using Melon health insurance app"
//               width={4000}
//               height={4000}
//               className="w-full h-auto max-w-[400px] md:max-w-[660px] lg:max-w-[760px] object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>
