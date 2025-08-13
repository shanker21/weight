import MarkdownContent from "@/components/MarkdownContent";
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | WeightGone Weight Loss Clinic UK",
  description: "View the terms of service outlining your rights and responsibilities while using WeightGone’s trusted weight loss programs and services.",
  keywords: "terms of service, weight loss clinic terms, WeightGone policies, service terms weight loss, WeightGone UK terms.",
  alternates: {
    canonical: "https://www.weightgone.co.uk/terms-of-service/"
  }
};

export default function TermsAndConditions() {
  const filePath = path.join(process.cwd(), 'Terms and Condition-WG.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="bg-white px-12 py-8 min-w-md" >
      <MarkdownContent content={content} />
    </div>
  );
}