"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./logo";

import Image from "next/image";

export function PrivacyPolicy() {
  const router = useRouter();

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          Melon is committed to protecting your personal data and respecting
          your privacy. This Privacy Policy explains how we collect, use, store,
          and protect your information when you use our mobile app or website.
          By using our services, you agree to the practices described in this
          Privacy Policy.
        </p>
      ),
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      content: (
        <div>
          <p className="mb-4">We collect the following types of information:</p>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                a. Personal Information
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Gender</li>
                <li>Contact information (email, phone number)</li>
                <li>National ID or student ID (where required)</li>
                <li>Address and location</li>
                <li>Insurance-related information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                b. Health Information
              </h4>
              <p className="text-gray-700 ml-4">
                Medical history and pre-existing conditions (only if required
                for insurance purposes and with your consent)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                c. Usage Data
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Device information (type, OS, IP address)</li>
                <li>
                  App/website interaction (pages visited, features used,
                  date/time of access)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                d. Payment Information
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Payment method (mobile money, credit/debit card)</li>
                <li>Transaction history</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 ml-4 bg-gray-50 p-3 rounded-lg">
                <strong>Note:</strong> Melon does not store full card numbers.
                All payments are handled via secure third-party payment
                processors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "information-usage",
      title: "How We Use Your Information",
      content: (
        <div>
          <p className="mb-4">We use your data to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Create and manage your account</li>
            <li>Provide and improve insurance and health-related services</li>
            <li>Facilitate payments and manage subscriptions</li>
            <li>Personalize user experience and content</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Conduct analytics and performance monitoring</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </div>
      ),
    },
    {
      id: "information-sharing",
      title: "Sharing Your Information",
      content: (
        <div>
          <p className="mb-4">We may share your data with:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Licensed insurance providers and underwriters</li>
            <li>Payment processors and financial institutions</li>
            <li>Regulatory authorities (as required by law)</li>
            <li>
              Service providers (for analytics, hosting, customer support)
            </li>
          </ul>
          <p className="font-semibold text-gray-900 bg-green-50 p-4 rounded-lg">
            We do not sell your personal data to third parties.
          </p>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "Data Security",
      content: (
        <div>
          <p className="mb-4">
            We implement industry-standard security measures to protect your
            data, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Encrypted data transmission (SSL/TLS)</li>
            <li>Access controls and user authentication</li>
            <li>Secure storage and backup protocols</li>
          </ul>
          <p className="text-sm text-gray-600 bg-amber-50 p-4 rounded-lg">
            However, no system is 100% secure. You are responsible for
            safeguarding your login credentials.
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: (
        <div>
          <p className="mb-4">
            We retain your personal data for as long as your account is active
            or as needed to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Fulfill the purposes stated in this policy</li>
            <li>Meet legal, tax, or reporting obligations</li>
          </ul>
          <p className="text-gray-700">
            When no longer needed, data is securely deleted or anonymized.
          </p>
        </div>
      ),
    },
    {
      id: "user-rights",
      title: "Your Rights",
      content: (
        <div>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Access your personal data</li>
            <li>Correct or update inaccurate information</li>
            <li>
              Request deletion of your data (subject to legal limitations)
            </li>
            <li>Withdraw consent for specific uses</li>
            <li>
              File a complaint with the Data Protection Commission of Ghana
            </li>
          </ul>
          <p className="text-gray-700">
            To exercise your rights, contact us at:{" "}
            <a
              href="mailto:hello@joinmelon.co"
              className="text-blue-600 hover:underline font-medium"
            >
              hello@joinmelon.co
            </a>
          </p>
        </div>
      ),
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: (
        <p>
          Melon does not knowingly collect data from children under 18 without
          verifiable parental consent. If we discover we have collected such
          data without consent, we will delete it promptly.
        </p>
      ),
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking",
      content: (
        <div>
          <p className="mb-4">
            Melon uses cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Improve website functionality</li>
            <li>Analyze user behavior</li>
            <li>Remember user preferences</li>
          </ul>
          <p className="text-gray-700">
            You can manage cookie preferences through your browser settings.
          </p>
        </div>
      ),
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      content: (
        <p>
          If your data is transferred outside Ghana (e.g., for cloud storage),
          we ensure that adequate safeguards are in place to protect your data
          under applicable privacy laws.
        </p>
      ),
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, with the updated date. Continued use of the
          Platform means you accept the revised policy.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="mb-4 text-gray-700">
            For questions, concerns, or requests related to your privacy,
            contact:
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
            className="md:block pl-0 flex-shrink-0 md:py-10 py-10 pt-5"
          >
            <Logo className="w-[100px] md:w-[120px]" useWhite={true} />
          </Link>
          <h2 className="font-semibold">Privacy Policy</h2>
          <h2 className="font-semibold">Effective Year: 2025</h2>
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
