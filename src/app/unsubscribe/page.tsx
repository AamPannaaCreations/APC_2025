"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import Link from "next/link";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");

  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [unsubscribed, setUnsubscribed] = useState(false);

  useEffect(() => {
    if (emailFromUrl) {
      setEmail(decodeURIComponent(emailFromUrl));
    }
  }, [emailFromUrl]);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email address is required");
      return;
    }

    setLoading(true);
    const unsubscribeToast = toast.loading("Unsubscribing...");

    try {
      const res = await fetch(`/api/subscribe/remove`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to unsubscribe");
      }

      // Optionally save feedback
      if (reason.trim()) {
        await fetch("/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            type: "unsubscribe",
            message: reason,
          }),
        }).catch(console.error);
      }

      toast.success(data.message, { id: unsubscribeToast });
      setUnsubscribed(true);
    } catch (error: unknown) {
      toast.error("Failed to unsubscribe", {
        id: unsubscribeToast,
      });
      console.error("Failed to unsubscribe",error);
    } finally {
      setLoading(false);
    }
  };

  if (unsubscribed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="text-center space-y-4 pb-4">
            <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-4xl text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-3xl font-bold">
              {`You've Been Unsubscribed`}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              {`We've removed`}<strong className="text-foreground">{email}</strong>{" "}
              {`from our mailing list. You won't receive any more newsletters from
              us.`}
            </p>

            <div className="p-5 bg-muted/50 rounded-lg border">
              <p className="text-sm text-muted-foreground mb-2">
                {`We're sorry to see you go! 😢`}
              </p>
              <p className="text-sm">
                Changed your mind?{" "}
                <Link
                  href="/#subscribe"
                  className="text-primary hover:underline font-semibold"
                >
                  Subscribe again
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/blogT" className="flex-1">
                <Button className="w-full h-11" size="lg">
                  Browse Blog
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full h-11" variant="outline" size="lg">
                  Go Home
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t text-xs text-muted-foreground">
              Unsubscribed by mistake?{" "}
              <a
                href="mailto:hello@aampanna.net"
                className="text-primary hover:underline font-medium"
              >
                Contact us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center space-y-2 pb-4">
          <CardTitle className="text-3xl font-bold">
            Unsubscribe from Newsletter
          </CardTitle>
          <p className="text-muted-foreground">
            {`We're sad to see you go, but we understand.`}
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleUnsubscribe} className="space-y-6">
            {/* Email Display */}
            <div className="p-4 bg-muted/50 rounded-lg border">
              <Label className="text-sm font-medium text-muted-foreground">
                Email Address
              </Label>
              <p className="text-lg font-semibold mt-1 break-all">
                {email || "No email provided"}
              </p>
            </div>

            {/* Feedback */}
            <div className="space-y-2">
              <Label htmlFor="reason" className="text-sm font-medium">
                {`Help us improve (optional)`}
              </Label>
              <Textarea
                id="reason"
                placeholder="Why are you unsubscribing? Your feedback helps us improve."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="h-28 resize-none"
                disabled={loading}
              />
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                type="submit"
                disabled={loading || !email}
                className="w-full h-12 text-base"
                variant="destructive"
              >
                {loading ? (
                  <>
                    <FaSpinner className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Confirm Unsubscribe"
                )}
              </Button>

              <Link href="/">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 text-base"
                  disabled={loading}
                >
                  Keep My Subscription
                </Button>
              </Link>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
            <p className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-100">
              {`💡 Did you know?`}
            </p>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>{`• We send only 1-2 emails per week`}</li>
              <li>{`• You get exclusive content first`}</li>
              <li>{`• No spam, ever. We promise!`}</li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            Need help?{" "}
            <a
              href="mailto:hello@aampanna.net"
              className="text-primary hover:underline font-medium"
            >
              Contact Support
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <FaSpinner className="text-4xl animate-spin text-muted-foreground" />
        </div>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}
