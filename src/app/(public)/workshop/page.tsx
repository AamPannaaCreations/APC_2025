"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import WorkshopHero from "@/components/workshop/WorkshopHero";
import PayForm from "@/components/PayForm";
import PaymentInformation from "@/components/workshop/Payment Information";
import { Calendar, Clock, User, MapPinHouse } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
} from "@/components/ui/dialog";


interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  platform: string;
  instructor: string;
  capacity: number;
  enrolled: number;
  price: number;
  topics: string[];
}

export default function WorkshopPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  const fetchWorkshops = useCallback(async () => {
    try {
      const res = await fetch("/api/workshop/upcoming-workshop");
      const data = await res.json();

      if (!data.success) throw new Error();
      setWorkshops(data.workshops);
    } catch {
      toast.error("Failed to load workshops");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWorkshops();
  }, [fetchWorkshops]);

  const selectedWorkshop = useMemo(
    () => workshops.find((w) => w.id === selectedId),
    [selectedId, workshops],
  );

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <WorkshopHero />

        <section className="mb-20">
          <h1 className="text-3xl font-bold mb-8">Upcoming Workshops</h1>

          {loading && <p className="text-gray-500">Loading workshops...</p>}

          {!loading && workshops.length === 0 && (
            <p className="text-gray-500">No upcoming workshops</p>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {workshops.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                formatDate={formatDate}
                processingId={processingId}
                // onEnroll={() => setSelectedId(workshop.id)}
                onEnroll={() => {
                  setProcessingId(workshop.id);
                  setSelectedId(workshop.id);
                }}
              />
            ))}
          </div>
        </section>

        <PaymentInformation />
      </div>

      <Dialog
        open={!!selectedId}
        onOpenChange={() => {
          setSelectedId(null);
          setProcessingId(null);
        }}
        modal={false}
        
      >
        {/* <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedWorkshop?.title || "Workshop Enrollment"}
            </DialogTitle>
          </DialogHeader>
          
          </DialogContent> */}

        {selectedWorkshop && (
          <PayForm
            workshopId={selectedWorkshop.id}
            workshopPrice={selectedWorkshop.price}
            onClose={() => {
              setSelectedId(null);
              setProcessingId(null);
            }}
          />
        )}
      </Dialog>
    </div>
  );
}

function WorkshopCard({
  workshop,
  formatDate,
  onEnroll,
  processingId,
}: {
  workshop: Workshop;
  formatDate: (d: string) => string;
  onEnroll: () => void;
  processingId: string | null;
}) {
  const isFull = workshop.enrolled >= workshop.capacity;
  const percent = (workshop.enrolled / workshop.capacity) * 100;

  return (
    <Card className="hover:shadow-xl transition">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-2xl font-bold">{workshop.title}</CardTitle>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            ₹{workshop.price}
          </Badge>
        </div>
        <CardDescription>{workshop.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        <Info icon={<Calendar />} text={formatDate(workshop.date)} />
        <Info
          icon={<Clock />}
          text={`${workshop.time} (${workshop.duration})`}
        />
        <Info icon={<User />} text={workshop.instructor} />
        <Info icon={<MapPinHouse />} text={workshop.platform} />

        <Separator />

        <div>
          <div className="flex justify-between text-gray-600 mb-1">
            <span>Enrollment</span>
            <span>
              {workshop.enrolled}/{workshop.capacity}
            </span>
          </div>
          <Progress value={percent} />
        </div>
      </CardContent>

      <CardFooter>
        <Button
          disabled={isFull || processingId === workshop.id}
          className="w-full hover:cursor-pointer"
          onClick={onEnroll}
        >
          {processingId === workshop.id
            ? "Opening payment..."
            : isFull
              ? "Workshop Full"
              : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}

const Info = ({ icon, text }: { icon: React.ReactElement; text: string }) => (
  <div className="flex items-center gap-2 text-gray-700">
    {icon}
    <span>{text}</span>
  </div>
);
