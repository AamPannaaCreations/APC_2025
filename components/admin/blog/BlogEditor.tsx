// /* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";

// import dynamic from "next/dynamic";
// import "quill/dist/quill.snow.css";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// type BlogEditorProps = {
//   form: any;
//   setForm: (val: any) => void;
//   onSubmit: () => void;
//   buttonText: string;
// };

// export default function BlogEditor({
//   form,
//   setForm,
//   onSubmit,
//   buttonText,
// }: BlogEditorProps) {
//   return (
//     <div className="max-w-4xl mx-auto space-y-6">
//       <Input
//         placeholder="Main image URL"
//         value={form.mainImage}
//         onChange={e => setForm({ ...form, mainImage: e.target.value })}
//       />

//       {form.mainImage && (
//         <img src={form.mainImage} className="rounded-xl" />
//       )}

//       <Input
//         placeholder="Title"
//         value={form.title}
//         onChange={e => setForm({ ...form, title: e.target.value })}
//       />

//       <Textarea
//         placeholder="Short description"
//         value={form.description}
//         onChange={e => setForm({ ...form, description: e.target.value })}
//       />

//       <ReactQuill
//         theme="snow"
//         value={form.content}
//         onChange={value => setForm({ ...form, content: value })}
//       />

//       <Input
//         placeholder="Tags (comma separated)"
//         value={form.tags}
//         onChange={e => setForm({ ...form, tags: e.target.value })}
//       />

//       <Button onClick={onSubmit}>{buttonText}</Button>
//     </div>
//   );
// }





/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type BlogEditorProps = {
  form: any;
  setForm: (val: any) => void;
  onSubmit: () => void;
  buttonText: string;
  disabled?: boolean;
};

export default function BlogEditor({
  form,
  setForm,
  onSubmit,
  buttonText,
  disabled = false,
}: BlogEditorProps) {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill-new"), { ssr: false }),
    []
  );

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2">Title *</label>
        <Input
          placeholder="Enter blog title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          disabled={disabled}
          className="text-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Short Description *
        </label>
        <Textarea
          placeholder="Brief description that appears in blog cards"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          disabled={disabled}
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Content *</label>
        <ReactQuill
          theme="snow"
          value={form.content}
          onChange={value => setForm({ ...form, content: value })}
          className="bg-white dark:bg-gray-800 min-h-[400px]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Tags (comma separated)
        </label>
        <Input
          placeholder="e.g., React, Next.js, TypeScript"
          value={form.tags}
          onChange={e => setForm({ ...form, tags: e.target.value })}
          disabled={disabled}
        />
      </div>

      <Button 
        onClick={onSubmit} 
        disabled={disabled}
        className="hover:cursor-pointer w-full py-6 text-lg"
        size="lg"
      >
        {buttonText}
      </Button>
    </div>
  );
}