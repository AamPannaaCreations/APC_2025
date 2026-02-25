import mongoose from "mongoose";

const GatedContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      enum: ["pdf", "ppt", "doc", "video", "other"],
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "draft"],
      default: "active",
    },
    requiredFields: {
      type: [String],
      default: ["name", "email", "phone", "company"],
    },
    accessCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.GatedContent ||
  mongoose.model("GatedContent", GatedContentSchema);