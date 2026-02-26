// "use client";

// import { useEffect, useRef, useState } from "react";
// import EditorJS from "@editorjs/editorjs";

// import Header from "@editorjs/header";
// import List from "@editorjs/list";
// import ImageTool from "@editorjs/image";
// import Quote from "@editorjs/quote";
// import Code from "@editorjs/code";
// import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
// import Checklist from "@editorjs/checklist";
// import Delimiter from "@coolbytes/editorjs-delimiter";
// import InlineCode from "@editorjs/inline-code";
// import LinkTool from "@editorjs/link";
// import Warning from "@editorjs/warning";
// import Marker from "@editorjs/marker";
// import Underline from "@editorjs/underline";
// import AttachesTool from "@editorjs/attaches";
// import RawTool from "@editorjs/raw";
// import ColorPicker from "editorjs-color-picker";
// import { uploadToCloudinary } from "@/lib/uploadImage";

// const SERVER_BASE_URL = process.env.VITE_BASE_SERVER_URL;


// export default function BlogEditor({ onSave, initialData }) {

//   const editorRef = useRef(null);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (!editorRef.current) {
//       const editor = new EditorJS({
//         holder: "editorjs",
//         placeholder: "Write your blog content here...",
//         autofocus: true,
//         data: initialData, // Load existing content
//         minHeight: 400,

//         onReady: () => {
//           setIsReady(true);
//         },

//         onChange: async () => {
//           // Auto-save logic can go here
//         },

//         tools: {
//           header: {
//             class: Header,
//             inlineToolbar: true,
//             config: {
//               levels: [1, 2, 3, 4],
//               defaultLevel: 2,
//             },
//           },
//           ColorPicker: {
//             class: ColorPicker,
//           },
//           paragraph: {
//             inlineToolbar: true,
//           },

//           list: {
//             class: List,
//             inlineToolbar: true,
//           },

//           image: {
//             class: ImageTool,
//             config: {
//               uploader: {
//                 async uploadByFile(file) {
//                   // Validate file size (5MB limit)
//                   if (file.size > 5 * 1024 * 1024) {
//                     throw new Error("File size must be less than 5MB");
//                   }

//                   // Validate file type
//                   if (!file.type.startsWith("image/")) {
//                     throw new Error("Only image files are allowed");
//                   }

//                   const url = await uploadToCloudinary(file);
//                   return {
//                     success: 1,
//                     file: {
//                       url: url,
//                     },
//                   };
//                 },
//               },
//             },
//           },

//           quote: {
//             class: Quote,
//             inlineToolbar: true,
//             config: {
//               quotePlaceholder: "Enter quote",
//               captionPlaceholder: "Quote's author",
//             },
//           },

//           code: {
//             class: Code,
//             config: {
//               placeholder: "Enter code here...",
//             },
//           },

//           embed: {
//             class: Embed,

//             config: {
//               services: {
//                 youtube: true,
//                 twitter: true,
//                 instagram: true,
//                 codepen: true,
//                 github: true,
//                 vimeo: true,
//               },
//             },
//           },

//           table: {
//             class: Table,
//             inlineToolbar: true,
//             config: {
//               rows: 2,
//               cols: 3,
//             },
//           },

//           checklist: {
//             class: Checklist,
//             inlineToolbar: true,
//           },

//           delimiter: {
//             class: Delimiter,
//             config: {
//               styleOptions: ["star", "dash", "line"],
//               defaultStyle: "star",
//               lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
//               defaultLineWidth: 25,
//               lineThicknessOptions: [1, 2, 3, 4, 5, 6],
//               defaultLineThickness: 2,
//             },
//           },

//           inlineCode: InlineCode,

//           marker: Marker,

//           underline: Underline,

//           warning: {
//             class: Warning,
//             inlineToolbar: true,
//             config: {
//               titlePlaceholder: "Title",
//               messagePlaceholder: "Message",
//             },
//           },

//           // Attaches tool
//           attaches: {
//             class: AttachesTool,
//             config: {
//               uploader: {
//                 async uploadByFile(file) {
//                   // Upload to Cloudinary (supports any file type)
//                   const url = await uploadToCloudinary(file);
//                   return {
//                     success: 1,
//                     file: {
//                       url: url,
//                       size: file.size,
//                       name: file.name,
//                       extension: file.name.split(".").pop(),
//                     },
//                   };
//                 },
//               },
//             },
//           },

//           raw: RawTool,

//           linkTool: {
//             class: LinkTool,
//             config: {
//               endpoint: "/api/fetch-link-meta", // optional
//             },
//           },
//         },

//         // Initial Data
//         // data: {
//         //   blocks: [
//         //     {
//         //       type: "chart",
//         //       data: {
//         //         type: "bar",
//         //         title: "Monthly Revenue",
//         //         labels: ["Jan", "Feb", "Mar", "Apr"],
//         //         datasets: [
//         //           {
//         //             label: "Sales",
//         //             data: [12000, 19000, 15000, 25000],
//         //             backgroundColor: "#4A90E2",
//         //           },
//         //         ],
//         //       },
//         //     },
//         //   ],
//         // },
//       });

//       editorRef.current = editor;
//     }

//     return () => {
//       if (editorRef.current?.destroy) {
//         editorRef.current.destroy();
//         editorRef.current = null;
//       }
//     };
//   }, [initialData]);

//   const handleSave = async () => {
//     if (!editorRef.current) return;

//     try {
//       setIsSaving(true);
//       const data = await editorRef.current.save();

//       // Validate content
//       if (!data.blocks || data.blocks.length === 0) {
//         alert("Please add some content before saving");
//         return;
//       }

//       await onSave(data);
//     } catch (error) {
//       console.error("Save error:", error);
//       alert("Failed to save blog. Please try again.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow">
//       <div id="editorjs" className="min-h-[400px] border rounded-lg p-4" />

//       <div className="mt-4 flex gap-4">
//         <button
//           onClick={handleSave}
//           disabled={!isReady || isSaving}
//           className="bg-black text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isSaving ? "Saving..." : "Save Blog"}
//         </button>

//         <button
//           onClick={() => editorRef.current?.clear()}
//           className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
//         >
//           Clear
//         </button>
//       </div>
//     </div>
//   );
// }




// // .tsx file 
// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import EditorJS, { OutputData } from "@editorjs/editorjs";

// // import Header from "@editorjs/header";
// // import List from "@editorjs/list";
// // import ImageTool from "@editorjs/image";
// // import Quote from "@editorjs/quote";
// // import Code from "@editorjs/code";
// // import Embed from "@editorjs/embed";
// // import Table from "@editorjs/table";
// // import Checklist from "@editorjs/checklist";
// // import Delimiter from "@coolbytes/editorjs-delimiter";
// // import InlineCode from "@editorjs/inline-code";
// // import LinkTool from "@editorjs/link";
// // import Warning from "@editorjs/warning";
// // import Marker from "@editorjs/marker";
// // import Underline from "@editorjs/underline";
// // import AttachesTool from "@editorjs/attaches";
// // import RawTool from "@editorjs/raw";
// // import ColorPicker from "editorjs-color-picker";

// // const SERVER_BASE_URL = process.env.VITE_BASE_SERVER_URL;

// // interface CloudinarySignature {
// //   timestamp: string;
// //   signature: string;
// //   apiKey: string;
// //   cloudName: string;
// // }

// // interface CloudinaryResponse {
// //   secure_url: string;
// // }

// // interface BlogEditorProps {
// //   onSave: (data: OutputData) => Promise<void>;
// //   initialData?: OutputData;
// // }

// // export default function BlogEditor({ onSave, initialData }: BlogEditorProps) {
// //   const editorRef = useRef<EditorJS | null>(null);
// //   const [isSaving, setIsSaving] = useState<boolean>(false);
// //   const [isReady, setIsReady] = useState<boolean>(false);

// //   const uploadToCloudinary = async (file: File): Promise<string> => {
// //     try {
// //       const signatureResponse = await fetch(
// //         `${SERVER_BASE_URL}/api/v1/user/upload/cloudinary`,
// //         {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         },
// //       );

// //       if (!signatureResponse.ok) {
// //         throw new Error("Failed to get upload signature");
// //       }

// //       const signatureData: CloudinarySignature = await signatureResponse.json();

// //       const formData = new FormData();
// //       formData.append("file", file);
// //       formData.append("timestamp", signatureData.timestamp);
// //       formData.append("signature", signatureData.signature);
// //       formData.append("api_key", signatureData.apiKey);
// //       formData.append("folder", "webhibe/users");

// //       const cloudinaryResponse = await fetch(
// //         `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`,
// //         {
// //           method: "POST",
// //           body: formData,
// //         },
// //       );

// //       if (!cloudinaryResponse.ok) {
// //         throw new Error("Failed to upload image");
// //       }

// //       const cloudinaryData: CloudinaryResponse =
// //         await cloudinaryResponse.json();
// //       return cloudinaryData.secure_url;
// //     } catch (error) {
// //       console.error("Cloudinary upload error:", error);
// //       throw error;
// //     }
// //   };

// //   useEffect(() => {
// //     if (!editorRef.current) {
// //       const editor = new EditorJS({
// //         holder: "editorjs",
// //         placeholder: "Write your blog content here...",
// //         autofocus: true,
// //         data: initialData,
// //         minHeight: 400,

// //         onReady: () => {
// //           setIsReady(true);
// //         },

// //         onChange: async () => {
// //           // Auto-save logic can go here
// //         },

// //         tools: {
// //           header: {
// //             class: Header,
// //             inlineToolbar: true,
// //             config: {
// //               levels: [1, 2, 3, 4],
// //               defaultLevel: 2,
// //             },
// //           },
// //           ColorPicker: {
// //             class: ColorPicker,
// //           },
// //           paragraph: {
// //             inlineToolbar: true,
// //           },

// //           list: {
// //             class: List,
// //             inlineToolbar: true,
// //           },

// //           image: {
// //             class: ImageTool,
// //             config: {
// //               uploader: {
// //                 async uploadByFile(file: File) {
// //                   // Validate file size (5MB limit)
// //                   if (file.size > 5 * 1024 * 1024) {
// //                     throw new Error("File size must be less than 5MB");
// //                   }

// //                   // Validate file type
// //                   if (!file.type.startsWith("image/")) {
// //                     throw new Error("Only image files are allowed");
// //                   }

// //                   const url = await uploadToCloudinary(file);
// //                   return {
// //                     success: 1,
// //                     file: {
// //                       url: url,
// //                     },
// //                   };
// //                 },
// //               },
// //             },
// //           },

// //           quote: {
// //             class: Quote,
// //             inlineToolbar: true,
// //             config: {
// //               quotePlaceholder: "Enter quote",
// //               captionPlaceholder: "Quote's author",
// //             },
// //           },

// //           code: {
// //             class: Code,
// //             config: {
// //               placeholder: "Enter code here...",
// //             },
// //           },

// //           embed: {
// //             class: Embed,

// //             config: {
// //               services: {
// //                 youtube: true,
// //                 twitter: true,
// //                 instagram: true,
// //                 codepen: true,
// //                 github: true,
// //                 vimeo: true,
// //               },
// //             },
// //           },

// //           table: {
// //             class: Table,
// //             inlineToolbar: true,
// //             config: {
// //               rows: 2,
// //               cols: 3,
// //             },
// //           },

// //           checklist: {
// //             class: Checklist,
// //             inlineToolbar: true,
// //           },

// //           delimiter: {
// //             class: Delimiter,
// //             config: {
// //               styleOptions: ["star", "dash", "line"],
// //               defaultStyle: "star",
// //               lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
// //               defaultLineWidth: 25,
// //               lineThicknessOptions: [1, 2, 3, 4, 5, 6],
// //               defaultLineThickness: 2,
// //             },
// //           },

// //           inlineCode: InlineCode,

// //           marker: Marker,

// //           underline: Underline,

// //           warning: {
// //             class: Warning,
// //             inlineToolbar: true,
// //             config: {
// //               titlePlaceholder: "Title",
// //               messagePlaceholder: "Message",
// //             },
// //           },

// //           attaches: {
// //             class: AttachesTool,
// //             config: {
// //               uploader: {
// //                 async uploadByFile(file: File) {
// //                   const url = await uploadToCloudinary(file);
// //                   return {
// //                     success: 1,
// //                     file: {
// //                       url: url,
// //                       size: file.size,
// //                       name: file.name,
// //                       extension: file.name.split(".").pop(),
// //                     },
// //                   };
// //                 },
// //               },
// //             },
// //           },

// //           raw: RawTool,

// //           linkTool: {
// //             class: LinkTool,
// //             config: {
// //               endpoint: "/api/fetch-link-meta",
// //             },
// //           },
// //         },
// //       });

// //       editorRef.current = editor;
// //     }

// //     return () => {
// //       if (editorRef.current?.destroy) {
// //         editorRef.current.destroy();
// //         editorRef.current = null;
// //       }
// //     };
// //   }, [initialData]);

// //   const handleSave = async (): Promise<void> => {
// //     if (!editorRef.current) return;

// //     try {
// //       setIsSaving(true);
// //       const data = await editorRef.current.save();

// //       // Validate content
// //       if (!data.blocks || data.blocks.length === 0) {
// //         alert("Please add some content before saving");
// //         return;
// //       }

// //       await onSave(data);
// //     } catch (error) {
// //       console.error("Save error:", error);
// //       alert("Failed to save blog. Please try again.");
// //     } finally {
// //       setIsSaving(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow">
// //       <div id="editorjs" className="min-h-[400px] border rounded-lg p-4" />

// //       <div className="mt-4 flex gap-4">
// //         <button
// //           onClick={handleSave}
// //           disabled={!isReady || isSaving}
// //           className="bg-black text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
// //         >
// //           {isSaving ? "Saving..." : "Save Blog"}
// //         </button>

// //         <button
// //           onClick={() => editorRef.current?.clear()}
// //           className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
// //         >
// //           Clear
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }



import React from 'react'

function BlogEditor() {
  return (
    <div>BlogEditor</div>
  )
}

export default BlogEditor
