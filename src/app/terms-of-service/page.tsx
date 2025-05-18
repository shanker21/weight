
import MarkdownContent from "@/components/MarkdownContent";
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions | Altrincham Travel Clinic",
  description: "Read our terms and conditions...",
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