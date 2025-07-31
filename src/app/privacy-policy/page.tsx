import MarkdownContent from "@/components/MarkdownContent";
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | WeightGone UK",
  description: "Read our privacy policy to understand how WeightGone protects your data and maintains confidentiality for every client.",
  keywords: "weight loss privacy policy, WeightGone data protection, patient confidentiality, privacy WeightGone, privacy policy UK."
};

export default function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'PrivacyPolicy-WG.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="bg-white px-12 py-8 min-w-md" >
      <MarkdownContent content={content} />
    </div>
  );
}