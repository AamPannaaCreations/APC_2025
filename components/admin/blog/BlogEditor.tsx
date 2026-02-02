/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type BlogEditorProps = {
  form: any;
  setForm: (val: any) => void;
  onSubmit: () => void;
  buttonText: string;
};

export default function BlogEditor({
  form,
  setForm,
  onSubmit,
  buttonText,
}: BlogEditorProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Input
        placeholder="Main image URL"
        value={form.mainImage}
        onChange={e => setForm({ ...form, mainImage: e.target.value })}
      />

      {form.mainImage && (
        <img src={form.mainImage} className="rounded-xl" />
      )}

      <Input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <Textarea
        placeholder="Short description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <ReactQuill
        value={form.content}
        onChange={value => setForm({ ...form, content: value })}
      />

      <Input
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={e => setForm({ ...form, tags: e.target.value })}
      />

      <Button onClick={onSubmit}>{buttonText}</Button>
    </div>
  );
}
