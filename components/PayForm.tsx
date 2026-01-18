// /* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";

// import toast from "react-hot-toast";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// interface PayFormProps {
//   workshopId: string | null;
//   workshopData?: {
//     id: string;
//     title: string;
//     price: number;
//     date: string;
//     time: string;
//     instructor: string;
//   };
//   onClose: () => void;
// }

// export default function PayForm({
//   workshopId,
//   workshopData,
//   onClose,
// }: PayFormProps) {
//   const loadScript = () =>
//     new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       document.body.appendChild(script);
//     });

//   const handlePay = async (e: any) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const phone = form.phone.value;

//     await loadScript();

//     const res = await fetch("/api/workshop/create-order", {
//       method: "POST",
//       body: JSON.stringify({ name, email, phone, workshopId, amount: 499 }),
//     });

//     const order = await res.json();

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: "INR",
//       name: "Workshop Registration",
//       order_id: order.id,
//       handler: async (response: any) => {
//         // Verify payment on the server
//         const verifyResponse = await fetch("/api/workshop/verify-payment", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//           }),
//         });

//         const verifyResult = await verifyResponse.json();

//         if (verifyResult.success) {
//           // alert("Payment successful! You are registered 🎉");
//           toast.success("Payment successful! You are registered 🎉", 
//           { duration: 5000 });
//         } else {
//           // alert("Payment verification failed. Please contact support.");
//           toast.error("Payment verification failed. Please contact support.", { duration: 5000 });
//         }
//       },
//       prefill: {
//         name: name,
//         email: email,
//         contact: phone,
//       },
//       theme: {
//         color: "#3B82F6",
//       },
//       notify: {
//         sms: true,
//         email: true,
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <form onSubmit={handlePay} className="space-y-3">
//       <input name="name" placeholder="Name" required className="border p-2" />
//       <input name="email" placeholder="Email" required className="border p-2" />
//       <input name="phone" placeholder="Phone" required className="border p-2" />
//       <button className="bg-black text-white px-4 py-2">Pay ₹499</button>
//     </form>
//   );
// }




/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PayFormProps {
  workshopId: string;
  onClose: () => void;
}

let razorpayLoaded = false;

const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (razorpayLoaded) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      razorpayLoaded = true;
      resolve(true);
    };
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function PayForm({ workshopId, onClose }: PayFormProps) {
  const [loading, setLoading] = useState(false);

  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    const sdkLoaded = await loadRazorpay();
    if (!sdkLoaded) {
      toast.error("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    // Create order
    const res = await fetch("/api/workshop/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, workshopId }),
    });

    if (!res.ok) {
      toast.error("Unable to create order");
      setLoading(false);
      return;
    }

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: "INR",
      name: "Workshop Registration",
      description: "Secure payment",
      order_id: order.id,
      handler: async (response: any) => {
        const verify = await fetch("/api/workshop/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const result = await verify.json();

        if (result.success) {
          toast.success("Payment successful 🎉");
          onClose();
        } else {
          toast.error("Payment verification failed");
        }
      },
      modal: {
        ondismiss: () => toast.error("Payment cancelled"),
      },
      prefill: { name, email, contact: phone },
      theme: { color: "#3B82F6" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <form onSubmit={handlePay} className="space-y-3">
      <input name="name" required placeholder="Name" className="border p-2 w-full" />
      <input name="email" required placeholder="Email" className="border p-2 w-full" />
      <input name="phone" required placeholder="Phone" className="border p-2 w-full" />

      <button
        disabled={loading}
        className="bg-black text-white px-4 py-2 w-full"
      >
        {loading ? "Processing..." : "Pay ₹499"}
      </button>
    </form>
  );
}
