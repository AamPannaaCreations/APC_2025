import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Separator } from "../ui/separator";

export default function PaymentInformation() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Payment & Registration</h1>

      <Card className="mt-8 border-none shadow-none">
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Accepted Payment Methods
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                  UPI
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                  Credit/Debit Cards (Visa, Mastercard, Amex)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                  Bank Transfer
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Registration Process
              </h3>
              <ol className="space-y-3">
                <li className="flex text-gray-700">
                  <span className="font-semibold mr-2 text-blue-600">1.</span>
                  Select your desired workshop
                </li>
                <li className="flex text-gray-700">
                  <span className="font-semibold mr-2 text-blue-600">2.</span>
                  Complete the registration form
                </li>
                <li className="flex text-gray-700">
                  <span className="font-semibold mr-2 text-blue-600">3.</span>
                  Make payment securely online
                </li>
                <li className="flex text-gray-700">
                  <span className="font-semibold mr-2 text-blue-600">4.</span>
                  Receive confirmation email with details
                </li>
              </ol>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Full payment is required to secure your
              spot.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
