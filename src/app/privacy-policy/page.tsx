import MarkdownContent from "@/components/MarkdownContent";
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Altrincham Travel Clinic",
  description: "Read our Privacy Policy...",
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