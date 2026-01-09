/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PayForm({ workshopId }: { workshopId: string }) {
  const loadScript = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });

  const handlePay = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    await loadScript();

    const res = await fetch("/api/workshop/create-order", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, workshopId, amount: 499 }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Workshop Registration",
      order_id: order.id,
      handler: async (response: any) => {
        // Verify payment on the server
        const verifyResponse = await fetch("/api/workshop/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const verifyResult = await verifyResponse.json();

        if (verifyResult.success) {
          alert("Payment successful! You are registered 🎉");
        } else {
          alert("Payment verification failed. Please contact support.");
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: "#3B82F6",
      },
      notify: {
        sms: true,
        email: true,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <form onSubmit={handlePay} className="space-y-3">
      <input name="name" placeholder="Name" required className="border p-2" />
      <input name="email" placeholder="Email" required className="border p-2" />
      <input name="phone" placeholder="Phone" required className="border p-2" />
      <button className="bg-black text-white px-4 py-2">Pay ₹499</button>
    </form>
  );
}
