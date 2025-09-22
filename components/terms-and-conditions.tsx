"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./logo";
import Image from "next/image";

export function TermsAndConditions() {
  const router = useRouter();

  const sections = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      content: (
        <p>
          By accessing or using the Melon app or website ("Platform"), you agree
          to be bound by these Terms and Conditions, our Privacy Policy, and any
          other applicable policies. If you do not agree with these terms,
          please do not use the Platform.
        </p>
      ),
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      content: (
        <p>
          Melon is a digital health insurance platform providing access to
          health insurance plans and related services for young people and
          startups in Ghana. We partner with licensed insurance providers to
          deliver these services.
        </p>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: (
        <div>
          <p className="mb-4">To use Melon, you must:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Be at least 18 years old or have parental/guardian consent.</li>
            <li>
              Be a resident of Ghana or authorized to access our services.
            </li>
            <li>Register with accurate and complete information.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      content: (
        <div className="space-y-4">
          <p>
            You may be required to create an account. You are responsible for
            maintaining the confidentiality of your login credentials and for
            all activities under your account.
          </p>
          <p>
            Melon may suspend or terminate your account at any time if you
            breach these terms.
          </p>
        </div>
      ),
    },
    {
      id: "insurance-services",
      title: "Insurance Services",
      content: (
        <div className="space-y-4">
          <p className="bg-amber-50 p-4 rounded-lg">
            Melon is not liable for claims, coverage, or denial of services
            under any insurance policy.
          </p>
          <p>
            All insurance services are provided by third-party licensed
            insurance providers. Melon acts as a facilitator and is not
            responsible for policy terms, claims processing, or coverage
            decisions.
          </p>
        </div>
      ),
    },
    {
      id: "payments",
      title: "Payments",
      content: (
        <div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              All payments for insurance plans or services on Melon must be made
              through approved methods.
            </li>
            <li>Prices and fees are subject to change with notice.</li>
            <li>
              You agree to pay all applicable charges incurred through your
              account.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-privacy",
      title: "Data Privacy",
      content: (
        <p>
          We collect, use, and protect your personal information in accordance
          with our{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          . By using our services, you consent to this data collection and
          processing.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            All content, trademarks, software, and design elements on the
            Platform are the property of Melon or its licensors and are
            protected by applicable copyright and intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, or modify any part of the
            Platform without express written consent from Melon.
          </p>
        </div>
      ),
    },
    {
      id: "user-content",
      title: "User Content",
      content: (
        <p>
          You are solely responsible for any content (including reviews,
          messages, or feedback) you post on the Platform. You grant Melon a
          non-exclusive, royalty-free license to use, reproduce, and display
          such content for marketing or improvement purposes.
        </p>
      ),
    },
    {
      id: "prohibited-conduct",
      title: "Prohibited Conduct",
      content: (
        <div>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              Use the Platform for unlawful, fraudulent, or harmful activities.
            </li>
            <li>Upload viruses or malicious code.</li>
            <li>Interfere with or disrupt the Platform or its systems.</li>
            <li>Impersonate another person or misrepresent your identity.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-party-links",
      title: "Third-Party Links and Services",
      content: (
        <p>
          Melon may link to third-party websites or services. We are not
          responsible for the content, accuracy, or practices of these third
          parties. Your use of those services is at your own risk.
        </p>
      ),
    },
    {
      id: "disclaimer-of-warranties",
      title: "Disclaimer of Warranties",
      content: (
        <div>
          <p className="mb-4">
            The Platform is provided "as is" without warranties of any kind,
            whether express or implied. Melon does not guarantee that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>The Platform will be uninterrupted or error-free.</li>
            <li>Information on the Platform is accurate or complete.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, Melon shall not be liable for
          any direct, indirect, incidental, or consequential damages arising
          from your use of the Platform or any insurance service provided by
          third parties.
        </p>
      ),
    },
    {
      id: "indemnity",
      title: "Indemnity",
      content: (
        <p>
          You agree to indemnify and hold harmless Melon and its affiliates from
          any claims, losses, or damages arising from your use of the Platform
          or violation of these Terms.
        </p>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <p>
          Melon may suspend or terminate your access to the Platform at any time
          without prior notice if you breach these Terms or for any other reason
          deemed necessary.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <p>
          These Terms are governed by the laws of the Republic of Ghana. Any
          disputes arising from these Terms shall be resolved in the courts of
          competent jurisdiction in Ghana.
        </p>
      ),
    },
    {
      id: "changes-to-terms",
      title: "Changes to Terms",
      content: (
        <p>
          Melon reserves the right to modify or update these Terms at any time.
          Continued use of the Platform after changes means you accept the
          revised Terms.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="mb-4 text-gray-700">
            If you have any questions about these Terms, please contact:
          </p>
          <div className="space-y-2">
            <p className="text-gray-900">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@joinmelon.co"
                className="text-blue-600 hover:underline"
              >
                hello@joinmelon.co
              </a>
            </p>
            <p className="text-gray-900">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+233599629666"
                className="text-blue-600 hover:underline"
              >
                +233 599 629 666
              </a>
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-main-700 flex h-full items-center justify-center   sticky top-0 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-white hover:text-gray-300 pl-8 md:pl-16 transition-colors"
        >
          <div className="flex gap-4 text-white  items-center justify-center">
            <div className="bg-white rounded-full p-1">
              <ArrowLeft className="w-5 h-5 text-main-700" />
            </div>
            <div>
              <p>Back</p>
            </div>
          </div>
        </button>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center  space-x-6">
              <Link href="/" className="flex-shrink-0 block md:hidden">
                <Logo className="w-[120px]" useWhite={true} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid md:grid-cols-2 grid-cols-1 bg-main-700">
        <div className="text-white flex flex-col flex-1 justify-start items-start pl-8 pt-0 md:pb-10 pb-10 md:pl-16 md:ppt-122 md:pt-0 h-full md:order-1 order-2">
          <Link
            href="/"
            className="  md:block pl-0 flex-shrink-0 md:py-10 py-10 pt-5"
          >
            <Logo className="w-[100px] md:w-[120px]" useWhite={true} />
          </Link>
          <h2 className="font-semibold">Terms and Conditions</h2>
          <h2 className="font-semibold">Effective Year: 2025</h2>
          <p className="">Jurisdiction: Republic of Ghana</p>
          <p className="">
            Platform: Mobile App and Website (
            <a href="https://www.joinmelon.co" className=" hover:underline">
              www.joinmelon.co
            </a>
            )
          </p>
        </div>
        {/* <div className="pb-5 pl-5 md:order-2 order-1">
          <Image
            src={"/images/privacy-policy.png"}
            alt="Privacy Policy"
            width={2000}
            height={2000}
          />
        </div> */}
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">
          {/* Sections */}
          <div className="flex-1 space-y-16">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Table of Contents */}
          <div className="bg-white shadow-lg hidden md:block shadow-main-100 w-auto max-h-max rounded-xl p-6 px-8 mb-12 flex-shrink-0">
            {/* <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Table of Contents
            </h2> */}
            <nav className="grid grid-cols-1  md:grid-cols-1 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-black-600 hover:text-main-600  hover:underline text-sm py-1 transition-colors"
                >
                  <span className="w-[3px] h-[3px] rounded-full bg-black inline-block mr-2 mb-[3px]"></span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Copyright © 2025 Melon. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
