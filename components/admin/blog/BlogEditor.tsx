"use client";

import { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import Delimiter from "@coolbytes/editorjs-delimiter";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import AttachesTool from "@editorjs/attaches";
import RawTool from "@editorjs/raw";
import ColorPicker from "editorjs-color-picker";
import { uploadToCloudinary } from "@/lib/uploadImage";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type BlogEditorProps = {
  form: {
    title: string;
    description: string;
    mainImage: string;
    content: OutputData | null;
    tags: string;
  };
  setForm: React.Dispatch<React.SetStateAction<BlogEditorProps["form"]>>;
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
  const editorRef = useRef<EditorJS | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!editorRef.current && typeof window !== "undefined") {
      const editor = new EditorJS({
        holder: "editorjs-container",
        placeholder: "Write your blog content here...",
        autofocus: true,
        data: form.content || undefined,
        minHeight: 400,

        onReady: () => {
          setIsReady(true);
        },

        onChange: async () => {
          if (editorRef.current) {
            const data = await editorRef.current.save();
            setForm(prev => ({ ...prev, content: data }));
          }
        },

        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              levels: [1, 2, 3, 4],
              defaultLevel: 2,
            },
          },
          colorPicker: {
            class: ColorPicker,
          },
          paragraph: {
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  if (file.size > 5 * 1024 * 1024) {
                    throw new Error("File size must be less than 5MB");
                  }
                  if (!file.type.startsWith("image/")) {
                    throw new Error("Only image files are allowed");
                  }
                  const url = await uploadToCloudinary(file);
                  return {
                    success: 1,
                    file: { url },
                  };
                },
              },
            },
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: "Enter quote",
              captionPlaceholder: "Quote's author",
            },
          },
          code: {
            class: Code,
            config: {
              placeholder: "Enter code here...",
            },
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                twitter: true,
                instagram: true,
                codepen: true,
                github: true,
                vimeo: true,
              },
            },
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          delimiter: {
            class: Delimiter,
            config: {
              styleOptions: ["star", "dash", "line"],
              defaultStyle: "star",
              lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
              defaultLineWidth: 25,
              lineThicknessOptions: [1, 2, 3, 4, 5, 6],
              defaultLineThickness: 2,
            },
          },
          inlineCode: InlineCode,
          marker: Marker,
          underline: Underline,
          warning: {
            class: Warning,
            inlineToolbar: true,
            config: {
              titlePlaceholder: "Title",
              messagePlaceholder: "Message",
            },
          },
          attaches: {
            class: AttachesTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  const url = await uploadToCloudinary(file);
                  return {
                    success: 1,
                    file: {
                      url,
                      size: file.size,
                      name: file.name,
                      extension: file.name.split(".").pop(),
                    },
                  };
                },
              },
            },
          },
          raw: RawTool,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/blogs/fetch-link-meta",
            },
          },
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current?.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2">Title *</label>
        <Input
          placeholder="Enter blog title"
          value={form.title}
          onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
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
          onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
          disabled={disabled}
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Content *</label>
        <div
          id="editorjs-container"
          className="min-h-[400px] border rounded-lg p-4"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Tags (comma separated)
        </label>
        <Input
          placeholder="e.g., React, Next.js, TypeScript"
          value={form.tags}
          onChange={(e) => setForm(prev => ({ ...prev, tags: e.target.value }))}
          disabled={disabled}
        />
      </div>

      <Button
        onClick={onSubmit}
        disabled={disabled || !isReady}
        className="hover:cursor-pointer w-full py-6 text-lg"
        size="lg"
      >
        {buttonText}
      </Button>
    </div>
  );
}
