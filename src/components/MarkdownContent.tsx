import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="
      [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-[#2E86AB]       /* TEXT_HOVER */
      [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-5 [&_h2]:mt-8 [&_h2]:text-[#555] /* TEXT_SECONDARY */
      [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-4 [&_h3]:mt-6 [&_h3]:text-[#2E86AB]
      [&_p]:mb-4 [&_p]:text-[#555]
      [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:mb-4 [&_ol]:mb-4
      [&_li]:mb-2 [&_li]:text-[#2E86AB]
      [&_a]:text-[#1E5F8B] [&_a]:underline          /* TEXT_HOVER_BG */
      [&_a:hover]:text-[#2E86AB]
    ">
      <ReactMarkdown
        components={{
          // Override components with hardcoded colors
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mb-6 text-[#2E86AB]" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mb-5 mt-8 text-[#555]" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold mb-4 mt-6 text-[#2E86AB]" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-[#555]" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-2 text-[#2E86AB]" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a 
              className="text-[#1E5F8B] underline hover:text-[#2E86AB]" 
              {...props} 
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}