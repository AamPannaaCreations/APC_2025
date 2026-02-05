import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  unsubscribeReason: {
    type: String,
  },
  unsubscribedAt: {
    type: Date,
  },
  source: {
    type: String,
    default: "website",
  },
  isVerified: {
    type: Boolean,
    default: true, // Auto-verified
  },
});

const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;