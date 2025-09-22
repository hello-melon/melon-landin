"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

export function Footer() {
  // Centralized data
  const footerData = {
    socialLinks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/joinmelonhq",
        iconSrc: "/images/icons/instagram.svg",
      },
      {
        name: "Twitter/X",
        url: "https://x.com/JoinmelonHQ",
        iconSrc: "/images/icons/x.svg",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/people/Hello-Melon/61579631022537",
        iconSrc: "/images/icons/facebook.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/melon-insurance-app",
        iconSrc: "/images/icons/linkedin.svg",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@joinmelonhq",
        iconSrc: "/images/icons/tiktok.svg",
      },
    ],
    appStoreLinks: {
      googlePlay: {
        url: "https://play.google.com/store",
        image: "/images/playstore-badge.png",
        alt: "Get it on Google Play",
      },
      appStore: {
        url: "https://apps.apple.com/app",
        image: "/images/appstore-badge.png",
        alt: "Download on the App Store",
      },
    },
    contactInfo: {
      general: "hello@joinmelon.co",
      support: "help@joinmelon.co",
    },
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
    ],
  };

  return (
    <footer className="mt-[70px] px-4 sm:px-6 lg:px-8  md:mb-8 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 py-16 pt-8 pb-8 rounded-3xl px-6  sm:px-8 lgg:px-10">
          {/* Mobile Layout */}
          <div className="flex flex-col items-start text-left gap-4 md:hidden">
            <div className="flex items-center gap-2">
              <Logo className="w-[140px]" />
            </div>
            <p className="text-gray-700 text-md max-w-md pt-0!">
              Insurance, reimagined for Africans <br />
              everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-4 sm:gap-8 w-full">
              <div>
                <span className="text-gray-700">Talk to Us: </span>
                <Link
                  href={`mailto:${footerData.contactInfo.general}`}
                  className="text-gray-900 hover:text-blue-600 underline"
                >
                  {footerData.contactInfo.general}
                </Link>
              </div>
              <div>
                <span className="text-gray-700">For Support: </span>
                <Link
                  href={`mailto:${footerData.contactInfo.support}`}
                  className="text-gray-900 hover:text-blue-600 underline"
                >
                  {footerData.contactInfo.support}
                </Link>
              </div>
            </div>
            <div className="hidden flexx flex-row sm:flex-row gap-4 pb-3 w-full">
              <a
                href={footerData.appStoreLinks.googlePlay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={footerData.appStoreLinks.googlePlay.image}
                  alt={footerData.appStoreLinks.googlePlay.alt}
                  width={100}
                  height={60}
                  className="h-10 w-auto"
                />
              </a>
              <a
                href={footerData.appStoreLinks.appStore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={footerData.appStoreLinks.appStore.image}
                  alt={footerData.appStoreLinks.appStore.alt}
                  width={100}
                  height={60}
                  className="min-w-[188px]] h-10 w-auto"
                />
              </a>
            </div>
            <div className="flex gap-4 justify-start w-full">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="w-12 h-12 bg-[#64FF84] rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={social.iconSrc}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-600 pt-2">
              © 2025 Melon |
              {footerData.legalLinks.map((link, index) => (
                <span key={index}>
                  <Link href={link.href} className="hover:text-gray-800 ml-1">
                    {link.name}
                  </Link>
                  {index < footerData.legalLinks.length - 1 && " |"}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Three Column Grid Based on Design */}
          <div className="hidden md:block w-full">
            {/* Three Column Grid */}
            <div className="grid grid-cols-3 gap-14 items-start mb-0">
              {/* Column 1 - Logo, Description & Social Icons */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Logo className="w-[170px]" />
                </div>
                <p className="text-gray-700 text-base max-w-md leading-relaxed">
                  Insurance, reimagined for Africans <br />
                  everywhere.
                </p>
                <div className="flex gap-3">
                  {footerData.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.url}
                      className="w-12 h-12 bg-[#64FF84] rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                      aria-label={social.name}
                    >
                      <Image
                        src={social.iconSrc}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2 - App Store Downloads (Centered) */}
              <div className="flex flex-col gap-4 justify-center h-full items-center">
                {/* <div className="flex gap-4">
                  <a
                    href={footerData.appStoreLinks.googlePlay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={footerData.appStoreLinks.googlePlay.image}
                      alt={footerData.appStoreLinks.googlePlay.alt}
                      width={200}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                  <a
                    href={footerData.appStoreLinks.appStore.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={footerData.appStoreLinks.appStore.image}
                      alt={footerData.appStoreLinks.appStore.alt}
                      width={200}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                </div> */}
                {/* <div className="text-sm text-gray-600 text-center pt-6">
                  © 2025 Melon |
                  {footerData.legalLinks.map((link, index) => (
                    <span key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-gray-800 ml-1"
                      >
                        {link.name}
                      </Link>
                      {index < footerData.legalLinks.length - 1 && " | "}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* Column 3 - Contact Info (Right Aligned) */}
              <div className="flex flex-col gap-4 text-left pt-8">
                <h3 className="text-gray-900 font-semibold text-lg">
                  Want to reach us?
                </h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-700">Talk to Us: </span>
                    <Link
                      href={`mailto:${footerData.contactInfo.general}`}
                      className="text-gray-900 hover:text-blue-600 underline"
                    >
                      {footerData.contactInfo.general}
                    </Link>
                  </div>
                  <div>
                    <span className="text-gray-700">For Support: </span>
                    <Link
                      href={`mailto:${footerData.contactInfo.support}`}
                      className="text-gray-900 hover:text-blue-600 underline"
                    >
                      {footerData.contactInfo.support}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Copyright and Legal Links (Centered) */}
            <div className="flex justify-centerr justify-start  items-center pt-8">
              <div className="text-sm text-gray-600 text-center">
                © 2025 Melon |
                {footerData.legalLinks.map((link, index) => (
                  <span key={index}>
                    <Link href={link.href} className="hover:text-gray-800 ml-1">
                      {link.name}
                    </Link>
                    {index < footerData.legalLinks.length - 1 && " | "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
