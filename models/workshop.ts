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
  duration: {
    type: String
  },
  instructor: {
    type: String
  },
  capacity: {
    type: Number
  },
  price: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Workshop = mongoose.models.Workshop || mongoose.model('Workshop', workshopSchema);