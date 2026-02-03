import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  description: string;
  mainImage: string;
  content: any;
  tags: string[];
  published: boolean;
  // author: mongoose.Types.ObjectId;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
    description: { type: String },
    mainImage: { type: String },
    content: { type: Object, required: true }, // Editor.js / HTML / JSON
    tags: [{ type: String }],
    published: { type: Boolean, default: true },
    author: { type: String }
      // type: Schema.Types.ObjectId,
      // ref: "User",
      // required: true,
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
