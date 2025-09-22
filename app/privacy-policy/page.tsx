import { PrivacyPolicy } from "@/components/privacy-policy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Melon Insurance",
  description:
    "Learn how Melon protects your personal data and respects your privacy. Our comprehensive privacy policy explains data collection, usage, and your rights.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
