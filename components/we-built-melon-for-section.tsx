"use client";

import Image from "next/image";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { AppButton } from "./app-button";

import { AppText } from "../utils/constants";
import { useAppDialog } from "../hooks/use-app-dialog";

export function WeBuiltMelonForSection() {
  const { openDownloadDialog, DialogComponents } = useAppDialog();

  return (
    <section id="who-is-melon-for" className="py-20 pt-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-medium text-black flex items-center justify-center gap-1 md:gap-2">
            We built{" "}
            <span className="text-blue-600 md:pt-2 pl-[2px] md:pl-0 pr-[2px] md:pr-0 pt-1">
              <Logo className="w-[90px] md:w-[160px]" />
            </span>
            for
          </h2>
          <p className="text-base md:text-xl text-[#2A2A2A] max-w-2xl mx-auto pt-4">
            Melon is designed for everyday life. Whoever you are, Melon makes
            health coverage simple and accessible.
          </p>
        </div>
        <Features openDownloadDialog={openDownloadDialog} />
      </div>

      {/* Dialog Components */}
      {DialogComponents}
    </section>
  );
}

const Features = ({
  openDownloadDialog,
}: {
  openDownloadDialog: () => void;
}) => {
  const audiences = [
    {
      title: "Students protecting their studies.",
      image: "/images/we-built-students.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]",
      size: "small",
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 right-0 w-full h-auto",
      imageClassName: "w-full h-full object-cover object-center",
      dialogTitle: "Students protecting their studies.",
      dialogBgColor: "bg-[#04c751]",
      dialogTextColor: "text-[#151515]",
      dialogStory:
        "Ama, 21, a University of Cape Coast student, no longer has to stress over unexpected medical bills. With Melon, she can focus on her studies while staying covered and cared for, anytime she needs it.",
      dialogHowItWorksTitle: "How Melon works:",
      dialogBenefits: [
        "Affordable cover designed for students",
        "Access to trusted clinics near campuses",
        "Keeps you focused on school, not bills",
      ],
      dialogImage: "/images/we-built-student-info.png",
      dialogImageSmall: "/images/we-built-student-info-small.png",
      buttonClassName: "",
      dialogDownloadBtnClassName: "w-full md:w-auto",
      dialogBenefitBulletClassName: "",
    },
    {
      title: "Freelancers working without benefits.",
      image: "/images/we-built-freelancers.png",
      bgColor: "bg-[#2A2A2A]",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 top-10 right-0 w-full h-auto",
      imageClassName: "w-full h-full object-cover object-center",
      dialogTitle: "Freelancers working without benefits.",
      dialogBgColor: "bg-[#2A2A2A]",
      dialogTextColor: "text-white",
      dialogStory:
        "Kofi is a freelance photographer in Accra. He loves the freedom of his work, but when he injured his ankle on a shoot, one bill could have wiped out his savings. With Melon, Kofi got treatment without financial stress.",
      dialogHowItWorksTitle: "How Melon Helps:",
      dialogBenefits: [
        "Individual plans built for independent work",
        "No employer needed - you're covered directly",
        "Flexible coverage that moves with your career",
      ],
      dialogImage: "/images/we-built-freelancers-info.png",
      dialogImageSmall: "/images/we-built-freelancers-info-small.png",
      buttonClassName: "text-white",
      dialogDownloadBtnClassName: "w-full md:w-auto",
      dialogBenefitBulletClassName: "",
    },
    {
      title: "Tourists staying safe while traveling.",
      image: "/images/we-built-tourists.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]",
      size: "wide",
      hasDecoration: true,
      titleClassName:
        "flex flex-col md:justify-center items-center hh-full md:h-full z-5",
      imageContainerClassName:
        "absolute bottom-0 right-0 md:w-2/3 md:h-[400px] h-[222px]",
      imageClassName:
        "w-full h-full md:object-contain object-cover object-bottom-right",
      dialogTitle: "Tourists staying safe while traveling.",
      dialogBgColor: "bg-[#04c751]",
      dialogTextColor: "text-[#151515]",
      dialogStory:
        "Sarah planned her dream trip to Ghana but worried about healthcare costs. With Melon's travel coverage, she explored freely knowing unexpected medical bills wouldn't ruin her adventure or savings.",
      dialogHowItWorksTitle: "How Melon works:",
      dialogBenefits: [
        "Coverage across multiple African countries",
        "Emergency medical assistance 24/7",
        "No upfront payments at partner clinics",
      ],
      dialogImage: "/images/we-built-tourist-info.png",
      dialogImageSmall: "/images/we-built-tourist-info-small.png",
      buttonClassName: "",
      dialogDownloadBtnClassName: "w-full md:w-auto",
      dialogBenefitBulletClassName: "",
    },
    {
      title: "Small businesses caring for employees.",
      image: "/images/we-built-small-businesses.png",
      bgColor: "bg-[#2A2A2A]",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 right-0 w-full h-auto",
      imageClassName: "w-full h-full object-cover object-center",
      dialogTitle: "Small businesses caring for employees.",
      dialogBgColor: "bg-[#2A2A2A]",
      dialogTextColor: "text-white",
      dialogStory:
        "Kemi runs a tech startup in Accra. She wanted to offer health benefits like big companies but couldn't afford traditional plans. With Melon, her team gets quality coverage at startup-friendly prices.",
      dialogHowItWorksTitle: "How Melon Helps:",
      dialogBenefits: [
        "Affordable group plans for growing teams",
        "Easy enrollment and management platform",
        "Competitive benefits without corporate costs",
      ],
      dialogImage: "/images/we-built-sme-info.png",
      dialogImageSmall: "/images/we-built-sme-info-small.png",
      buttonClassName: "text-white",
      dialogDownloadBtnClassName: "w-full md:w-auto",
      dialogBenefitBulletClassName: "",
    },
    {
      title: "Diaspora sending love and support home.",
      image: "/images/we-built-diaspora.png",
      bgColor: "bg-[#005aad]",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName:
        "absolute bottom-0 md:top-auto right-0 w-full md:h-[400px] h-[222px]",
      imageClassName: "w-full object-contain object-center   pl-[150px]",
      dialogTitle: "Diaspora sending love and support home.",
      dialogBgColor: "bg-[#005aad]",
      dialogTextColor: "text-white",
      dialogStory:
        "Kwame lives in London, but his mother Akosua is in Ghana. When she got sick last year, Kwame scrambled to send money for hospital bills. With Melon, he now covers her health directly. Akosua gets care when she needs it, and Kwame has peace of mind.",
      dialogHowItWorksTitle: "How Melon Helps:",
      dialogBenefits: [
        "Cover loved ones back home directly",
        "Fast, reliable access to trusted clinics",
        "More than remittances, real protection",
      ],
      dialogImage: "/images/we-built-diaspora-info.png",
      dialogImageSmall: "/images/we-built-diaspora-info-small.png",
      buttonClassName: "text-white",
      dialogDownloadBtnClassName:
        "border-0 border-white text-black bg-[#04c751] w-full md:w-auto",
      dialogBenefitBulletClassName: "border-0 border-white bg-[#04c751]",
    },
  ];

  const AudienceCard = ({
    audience,
    className,
    altText,
  }: {
    audience: (typeof audiences)[0];
    className: string;
    altText: string;
  }) => (
    <Dialog>
      {/* Desktop: Hoverable entire card */}

      <div
        className={cn(
          audience.bgColor,
          "rounded-3xl p-8 pt-6 px-8 relative overflow-hidden group hidden md:block",
          className
        )}
      >
        <h3
          className={cn(
            "text-[22px] lg:text-3xl font-normal mb-1 max-w-md leading-tight tracking-tight",
            audience.textColor,
            audience.titleClassName
          )}
        >
          {audience.title}
        </h3>

        {/* Desktop hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-3xl z-20">
          <DialogTrigger asChild>
            <AppButton
              variant="secondary"
              size="sm"
              showArrow={false}
              className="flex  w-auto relative z-30 hover:cursor-pointer px-8 hover:bg-main-700 hover:shadow-none"
            >
              Read more
            </AppButton>
          </DialogTrigger>
        </div>

        <div className={cn(audience.imageContainerClassName, "z-10")}>
          <Image
            width={3000}
            height={3000}
            src={audience.image || "/placeholder.svg"}
            alt={altText}
            className={audience.imageClassName}
          />
        </div>
      </div>

      {/* Mobile: Card with separate button */}
      <div
        className={cn(
          audience.bgColor,
          "rounded-3xl p-8 pt-4 px-6 relative overflow-hidden block md:hidden",
          className
        )}
      >
        <h3
          className={cn(
            "text-[22px] lg:text-3xl font-normal mb-1 max-w-md leading-tight tracking-tight",
            audience.textColor,
            audience.titleClassName
          )}
        >
          {audience.title}
        </h3>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "pl-0 underline relative z-10",
              audience.buttonClassName
            )}
            variant={"link"}
          >
            Read more
          </Button>
        </DialogTrigger>
        <div className={cn(audience.imageContainerClassName)}>
          <Image
            width={3000}
            height={3000}
            src={audience.image || "/placeholder.svg"}
            alt={altText}
            className={audience.imageClassName}
          />
        </div>
      </div>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[90vw] md:max-w-[1220px] rounded-2xl border-0  p-0 overflow-hidden "
      >
        <div
          className={cn(
            "min-hh-[600px]  text-white relative",
            audience.dialogBgColor
          )}
        >
          {/* Custom Close Button */}
          <DialogClose asChild>
            <button className="absolute top-4 right-4 z-50  bg-transparent rounded-full flex items-center justify-center  transition-colors">
              <Image
                src={"/images/icons/close.svg"}
                alt={"Close dialog"}
                width={24}
                height={24}
                className="w-7 h-7"
              />
            </button>
          </DialogClose>
          {/* Desktop Layout */}
          <div className="hidden md:grid md:pr-[30px] md:grid-cols-2 min-hh-[600px] max-h-[600px]]">
            {/* Left side - Image */}
            <div className="relative">
              <Image
                width={2000}
                height={2000}
                src={audience.dialogImage}
                alt={altText}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="relative flex flex-col h-[600px]]">
              {/* Scrollable Content */}
              <ScrollArea className="flex-1 p-8 pb-0">
                <h2
                  className={cn(
                    "text-3xl font-normal mb-6",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogTitle}
                </h2>
                <p
                  className={cn(
                    "md:text-lg text-md mb-8 leading-[45px]",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogStory}
                </p>
                <div className="mb-8">
                  <h3
                    className={cn(
                      "text-xl  font-semibold mb-4",
                      audience.dialogTextColor
                    )}
                  >
                    {audience.dialogHowItWorksTitle}
                  </h3>
                  <div className="space-y-8">
                    {audience.dialogBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={cn(
                            "w-6 h-6 bg-main-700  rounded-full flex items-center justify-center flex-shrink-0",
                            audience.dialogBenefitBulletClassName
                          )}
                        ></div>
                        <span
                          className={cn("text-lg", audience.dialogTextColor)}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" bottom-0 left-0 right-0 p-8 pl-0 pt-4 pb-10   from-current to-transparent">
                  <AppButton
                    onClick={openDownloadDialog}
                    variant="secondary"
                    size="lg"
                    className={cn(
                      "min-w-[257px] md:min-w-[300px]",
                      audience.dialogDownloadBtnClassName
                    )}
                  >
                    {AppText.downloadTheApp}
                  </AppButton>
                </div>
              </ScrollArea>

              {/* Fixed Download Button */}
              {/* <div className=" bottom-0 left-0 right-0 p-8 pt-4  from-current to-transparent">
                <AppButton
                  onClick={handleDownloadTheAppOnClick}
                  variant="secondary"
                  size="lg"
                  className={cn(
                    "min-w-[257px] md:min-w-[300px]",
                    audience.dialogDownloadBtnClassName
                  )}
                >
                  {AppText.downloadTheApp}
                </AppButton>
              </div> */}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden h-[90vhh]  relative flex flex-col">
            {/* Scrollable Content */}
            <ScrollArea className="flex-1 h-full">
              <div className="pbb-24">
                <h2
                  className={cn(
                    "text-xl font-medium mb-6 px-6 pt-6 pb-0 pr-[60px]",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogTitle}
                </h2>
                <p
                  className={cn(
                    "text-base mb-6 px-6 leading-relaxed",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogStory}
                </p>
                <div className="mb-6 px-6">
                  <h3
                    className={cn(
                      "text-lg font-semibold mb-4",
                      audience.dialogTextColor
                    )}
                  >
                    {audience.dialogHowItWorksTitle}
                  </h3>
                  <div className="space-y-3">
                    {audience.dialogBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={cn(
                            "w-5 h-5 bg-main-700  rounded-full flex items-center justify-center flex-shrink-0",
                            audience.dialogBenefitBulletClassName
                          )}
                        ></div>
                        <span
                          className={cn("text-base", audience.dialogTextColor)}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Image */}
                {/* <div className="relative mb-6">
                  <Image
                    width={2000}
                    height={2000}
                    src={audience.dialogImageSmall}
                    alt={altText}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div> */}
              </div>
            </ScrollArea>

            {/* Fixed Download Button */}
            <div className="flex justify-center  p-6 pt-2 pb-7 ">
              <AppButton
                onClick={openDownloadDialog}
                variant="secondary"
                size="md"
                className={cn(
                  "min-w-[257px] md:min-w-[300px]",
                  audience.dialogDownloadBtnClassName
                )}
              >
                {AppText.downloadTheApp}
              </AppButton>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Students - Large card */}
        <AudienceCard
          audience={audiences[0]}
          className="md:col-span-1 lg:col-span-1 md:min-h-[500px] min-h-[350px]"
          altText="Students studying together"
        />

        {/* Freelancers - Small card */}
        <AudienceCard
          audience={audiences[1]}
          className="md:min-h-[500px] min-h-[350px]"
          altText="Freelancer working on laptop"
        />

        {/* Tourists - Wide card with decoration */}
        <AudienceCard
          audience={audiences[2]}
          className="md:col-span-2 lg:col-span-2 md:min-h-[420px] min-h-[350px]"
          altText="Tourists with passports"
        />

        {/* Small businesses - Small card */}
        <AudienceCard
          audience={audiences[3]}
          className="md:min-h-[500px] min-h-[350px]"
          altText="Business team"
        />

        {/* Diaspora - Small card */}
        <AudienceCard
          audience={audiences[4]}
          className="md:min-h-[500px] min-h-[350px]"
          altText="Woman using phone"
        />
      </div>
    </div>
  );
};
