// "use client";

// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { Badge } from "./ui/badge";
// import { Delete } from "lucide-react";

// declare global {
//   interface Window {
//     Razorpay: new (options: RazorpayOptions) => RazorpayInstance
//   }
// }

// type RazorpayOptions = {
//   key: string
//   amount: number
//   currency: string
//   name: string
//   description?: string
//   order_id?: string
//   handler: (response: RazorpayResponse) => void
//   prefill?: {
//     name?: string
//     email?: string
//     contact?: string
//   }
//   theme?: {
//     color?: string
//   }
// }

// type RazorpayResponse = {
//   razorpay_payment_id: string
//   razorpay_order_id?: string
//   razorpay_signature?: string
// }

// type RazorpayInstance = {
//   open: () => void
// }




// interface PayFormProps {
//   workshopId: string;
//   workshopPrice: number;
//   onClose: () => void;
// }

// let sdkPromise: Promise<boolean> | null = null;

// const loadRazorpay = () => {
//   if (!sdkPromise) {
//     sdkPromise = new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   }
//   return sdkPromise;
// };

// export default function PayForm({
//   workshopId,
//   workshopPrice,
//   onClose,
// }: PayFormProps) {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Prevent escape key from closing
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         e.preventDefault();
//         e.stopPropagation();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown, true);
//     return () => document.removeEventListener("keydown", handleKeyDown, true);
//   }, []);

//   const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (loading) return;

//     setLoading(true);

//     const form = e.currentTarget;
//     const name = (form.elements.namedItem("name") as HTMLInputElement).value;
//     const email = (form.elements.namedItem("email") as HTMLInputElement).value;
//     const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

//     const loaded = await loadRazorpay();
//     if (!loaded) {
//       toast.error("Payment SDK failed to load");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("/api/workshop/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           workshopId,
//           name,
//           email,
//           phone,
//         }),
//       });

//       if (!res.ok) throw new Error();

//       const order = await res.json();

//       const rzp = new window.Razorpay({
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         order_id: order.id,
//         amount: order.amount,
//         currency: "INR",
//         name: "Workshop Registration",
//         description: "Secure enrollment",
//         prefill: { name, email, contact: phone },

//         handler: () => {
//           toast.success("Payment received! Confirmation coming shortly.");
//           onClose();
//         },
//         modal: {
//           ondismiss: () => {
//             toast.error("Payment cancelled");
//             onClose();
//           },

//           // Handle payment failure
//           escape: false,
//           confirm_close: true,
//         },

//         theme: { color: "#3B82F6" },
//       });

//       // Add error handler
//       rzp.on("payment.failed", function (response: string) {
//         toast.error(response.error.description || "Payment failed");
//         onClose();
//       });

//       rzp.open();
//     } catch {
//       toast.error("Unable to start payment");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBackdropClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6"
//       onClick={handleBackdropClick}
//     >
//       <div
//         className="bg-white rounded-lg w-full max-w-md p-4 sm:p-6 md:p-8"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex flex-col gap-3 mb-4 sm:mb-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg sm:text-xl font-bold">Complete Payment</h2>
//             <button
//               onClick={onClose}
//               className="hover:cursor-pointer text-gray-500 hover:text-gray-700  rounded-full text-2xl leading-none"
//             >
//               <Delete />
//             </button>
//           </div>

//           <Badge
//             variant="destructive"
//             className="inline-flex text-white items-center w-fit"
//           >
//             <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
//             {`Don't Close this Window During Payment`}
//           </Badge>
//         </div>

//         <form onSubmit={handlePay} className="space-y-3 sm:space-y-4">
//           <input
//             name="name"
//             required
//             placeholder="Name"
//             className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             name="email"
//             type="email"
//             required
//             placeholder="Email"
//             className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             name="phone"
//             required
//             placeholder="Phone"
//             pattern="[0-9]{10}"
//             title="Please enter a valid 10-digit phone number"
//             className="border border-gray-300 p-3 sm:p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             disabled={loading}
//             className="hover:cursor-pointer bg-blue-400 hover:bg-blue-600 text-white py-3 sm:py-4 rounded-lg w-full disabled:opacity-60 font-semibold text-base sm:text-lg transition-opacity"
//           >
//             {loading ? "Processing..." : `Pay ₹${workshopPrice}`}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Badge } from "./ui/badge";
import { Delete } from "lucide-react";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id?: string;

  handler: (response: RazorpayResponse) => void;

  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };

  modal?: {
    ondismiss?: () => void;
    escape?: boolean;
    confirm_close?: boolean;
  };

  theme?: {
    color?: string;
  };
};

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
};

type RazorpayFailure = {
  error: {
    description: string;
    code?: string;
    source?: string;
    step?: string;
    reason?: string;
  };
};

type RazorpayInstance = {
  open: () => void;
  on: (
    event: "payment.failed",
    callback: (response: RazorpayFailure) => void
  ) => void;
};

interface PayFormProps {
  workshopId: string;
  workshopPrice: number;
  onClose: () => void;
}

let sdkPromise: Promise<boolean> | null = null;

const loadRazorpay = (): Promise<boolean> => {
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  }
  return sdkPromise;
};

export default function PayForm({
  workshopId,
  workshopPrice,
  onClose,
}: PayFormProps) {
  const [loading, setLoading] = useState(false);

  /* Prevent ESC key closing during payment */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () =>
      document.removeEventListener("keydown", handleKeyDown, true);
  }, []);


  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    const loaded = await loadRazorpay();

    if (!loaded) {
      toast.error("Payment SDK failed to load");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/workshop/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workshopId,
          name,
          email,
          phone,
        }),
      });

      if (!res.ok) {
        throw new Error("Order creation failed");
      }

      const order: { id: string; amount: number } = await res.json();

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        order_id: order.id,
        amount: order.amount,
        currency: "INR",
        name: "Workshop Registration",
        description: "Secure enrollment",
        prefill: { name, email, contact: phone },

        handler: () => {
          toast.success("Payment successful! 🎉");
          onClose();
        },

        modal: {
          ondismiss: () => {
            toast.error("Payment cancelled");
            onClose();
          },
          escape: false,
          confirm_close: true,
        },

        theme: { color: "#3B82F6" },
      });

      rzp.on("payment.failed", (response) => {
        toast.error(
          response.error.description || "Payment failed. Please try again."
        );
        onClose();
      });

      rzp.open();
    } catch {
      toast.error("Unable to start payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="bg-white rounded-lg w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Complete Payment</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <Delete />
            </button>
          </div>

          <Badge
            variant="destructive"
            className="inline-flex text-white items-center w-fit"
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
            Don&apos;t close this window during payment
          </Badge>
        </div>

        <form onSubmit={handlePay} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="phone"
            required
            placeholder="Phone"
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit phone number"
            className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg w-full disabled:opacity-60 font-semibold"
          >
            {loading ? "Processing..." : `Pay ₹${workshopPrice}`}
          </button>
        </form>
      </div>
    </div>
  );
}
