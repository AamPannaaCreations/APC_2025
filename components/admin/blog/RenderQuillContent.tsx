// // "use client";

// // import DOMPurify from "isomorphic-dompurify";
// // import { useEffect, useState } from "react";
// // import "react-quill/dist/quill.snow.css";

// // export default function RenderQuillContent({
// //   content,
// // }: {
// //   content: string;
// // }) {
// //   const [sanitizedContent, setSanitizedContent] = useState("");

// //   useEffect(() => {
// //     // Sanitize on client side to handle HTML entities properly
// //     setSanitizedContent(DOMPurify.sanitize(content));
// //   }, [content]);

// //   return (
// //     <article
// //       className="
// //         prose prose-lg dark:prose-invert max-w-none
// //         prose-headings:font-bold prose-headings:text-foreground
// //         prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8
// //         prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-6
// //         prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-4
// //         prose-p:text-base prose-p:leading-7 prose-p:mb-4 prose-p:text-foreground
// //         prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4 prose-ul:text-foreground
// //         prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4 prose-ol:text-foreground
// //         prose-li:mb-2 prose-li:text-foreground
// //         prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
// //         prose-strong:font-bold prose-strong:text-foreground
// //         prose-em:italic prose-em:text-foreground
// //         prose-u:underline
// //         prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
// //         prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
// //         prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
// //         prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6
// //       "
// //       dangerouslySetInnerHTML={{
// //         __html: sanitizedContent,
// //       }}
// //     />
// //   );
// // }









// "use client";

// import DOMPurify from "isomorphic-dompurify";
// import { useEffect, useState } from "react";
// import "react-quill/dist/quill.snow.css";

// export default function RenderQuillContent({
//   content,
// }: {
//   content: string;
// }) {
//   const [sanitizedContent, setSanitizedContent] = useState("");

//   useEffect(() => {
//     // Decode HTML entities before sanitizing
//     const decodeHtmlEntities = (html: string) => {
//       const textarea = document.createElement('textarea');
//       textarea.innerHTML = html;
//       return textarea.value;
//     };

//     const decoded = decodeHtmlEntities(content);
//     const sanitized = DOMPurify.sanitize(decoded, {
//       ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'u', 'a', 'blockquote', 'code', 'pre', 'br', 'img'],
//       ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class'],
//     });
    
//     setSanitizedContent(sanitized);
//   }, [content]);

//   if (!sanitizedContent) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <article
//       className="
//         prose prose-lg dark:prose-invert max-w-none
//         prose-headings:font-bold prose-headings:text-foreground
//         prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:leading-tight
//         prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-6 prose-h2:leading-snug
//         prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-5
//         prose-p:text-base prose-p:leading-7 prose-p:mb-4 prose-p:text-foreground/90
//         prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4 prose-ul:text-foreground
//         prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4 prose-ol:text-foreground
//         prose-li:mb-2 prose-li:text-foreground prose-li:leading-relaxed
//         prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
//         prose-strong:font-bold prose-strong:text-foreground
//         prose-em:italic prose-em:text-foreground
//         prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
//         prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
//         prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
//         prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6 prose-img:w-full
//         [&_u]:underline
//         [&_u]:decoration-2
//       "
//       dangerouslySetInnerHTML={{
//         __html: sanitizedContent,
//       }}
//     />
//   );
// }












"use client";

import DOMPurify from "isomorphic-dompurify";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function RenderQuillContent({
  content,
}: {
  content: string;
}) {
  const [sanitizedContent, setSanitizedContent] = useState("");

  useEffect(() => {
    // Decode HTML entities before sanitizing
    const decodeHtmlEntities = (html: string) => {
      const textarea = document.createElement('textarea');
      textarea.innerHTML = html;
      return textarea.value;
    };

    const decoded = decodeHtmlEntities(content);
    const sanitized = DOMPurify.sanitize(decoded, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'u', 'a', 'blockquote', 'code', 'pre', 'br', 'img'],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class'],
    });
    
    setSanitizedContent(sanitized);
  }, [content]);

  if (!sanitizedContent) {
    return <div>Loading...</div>;
  }

  return (
    <article
      className="
        prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:text-foreground
        prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:leading-tight
        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-6 prose-h2:leading-snug
        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-5
        prose-p:text-base prose-p:leading-7 prose-p:mb-4 prose-p:text-foreground/90
        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-ul:text-foreground
        prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4 prose-ol:text-foreground
        prose-li:mb-2 prose-li:text-foreground prose-li:leading-relaxed
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:font-bold prose-strong:text-foreground
        prose-em:italic prose-em:text-foreground
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
        prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
        prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6 prose-img:w-full
        [&_u]:underline
        [&_u]:decoration-2
        [&_ol]:list-decimal
        [&_ol]:pl-6
        [&_ul]:list-disc
        [&_ul]:pl-6
        [&_li]:block
      "
      dangerouslySetInnerHTML={{
        __html: sanitizedContent,
      }}
    />
  );
}