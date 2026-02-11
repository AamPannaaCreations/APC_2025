"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

type SubscribeFormProps = {
  source?: string;
  className?: string;
};

export default function SubscribeForm({
  source = "website",
  className,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    const subscribeToast = toast.loading("Subscribing...");

    try {
      const res = await fetch("/api/subscribe/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      toast.success(data.message, { id: subscribeToast });
      setEmail("");
      setName("");
    } catch (error) {
      toast.error("Failed to subscribe", { id: subscribeToast });
      console.error("Subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={`p-8 border-none shadow-none ${className}`}>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
          <FaEnvelope className="text-3xl text-primary" />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-muted-foreground">
            Get the latest updates, articles, and resources delivered directly
            to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12"
          />

          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-base hover:cursor-pointer "
          >
            {loading ? (
              "Subscribing..."
            ) : (
              <>
                <FaPaperPlane className="mr-2" />
                Subscribe Now
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </p>
      </div>
    </Card>
  );
}
