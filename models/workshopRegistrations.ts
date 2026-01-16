import mongoose from 'mongoose';

const workshopRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    workshopId: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    },
    razorpayOrderId: {
        type: String
    },
    razorpayPaymentId: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// export const WorkshopRegistration = mongoose.model('WorkshopRegistration', workshopRegistrationSchema);
export const WorkshopRegistration = mongoose.models.WorkshopRegistration || mongoose.model('WorkshopRegistration', workshopRegistrationSchema);