import { TermsAndConditions } from "@/components/terms-and-conditions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Melon Insurance",
  description:
    "Read Melon's Terms and Conditions to understand your rights and responsibilities when using our health insurance platform.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
