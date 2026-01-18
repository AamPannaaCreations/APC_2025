import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true,
    default: "Google Meet"
  },
  instructor: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    default: 30
  },
  enrolled: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  topics: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Workshop = mongoose.models.Workshop || mongoose.model('Workshop', workshopSchema);