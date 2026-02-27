"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { Plus, X } from "lucide-react";

export function CreateWorkshopDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<string[]>([]);
  const [currentTopic, setCurrentTopic] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    platform: "Google Meet",
    meetingLink: "",
    instructor: "",
    capacity: "",
    price: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Submitting form data:", { ...formData, topics });

    try {
      const response = await fetch("/api/workshop/create-workshop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          capacity: parseInt(formData.capacity),
          price: parseFloat(formData.price),
          topics,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Workshop created successfully!");
        setOpen(false);
        setFormData({
          title: "",
          description: "",
          date: "",
          time: "",
          duration: "",
          platform: "Google Meet",
          meetingLink: "",
          instructor: "",
          capacity: "",
          price: "",
        });
        setTopics([]);
        window.location.reload();
      } else {
        toast.error(data.error || "Failed to create workshop");
      }
    } catch (error) {
      console.error("Error creating workshop:", error);
      toast.error("Failed to create workshop");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addTopic = () => {
    if (currentTopic.trim() && !topics.includes(currentTopic.trim())) {
      setTopics([...topics, currentTopic.trim()]);
      setCurrentTopic("");
    }
  };

  const removeTopic = (index: number) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Workshop</Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Workshop</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="title" className="mb-2">
                Workshop Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Introduction to React & Next.js"
                required
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="description" className="mb-2">
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Learn the fundamentals of React and Next.js development"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="date" className="mb-2">
                Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="time" className="mb-2">
                Time <span className="text-red-500">*</span>
              </Label>
              <Input
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="10:00 AM - 4:00 PM"
                required
              />
            </div>

            <div>
              <Label htmlFor="duration" className="mb-2">
                Duration <span className="text-red-500">*</span>
              </Label>
              <Input
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="6 hours"
                required
              />
            </div>

            <div>
              <Label htmlFor="platform" className="mb-2">
                Platform <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.platform}
                onValueChange={(value) =>
                  setFormData({ ...formData, platform: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google Meet">Google Meet</SelectItem>
                  <SelectItem value="Zoom">Zoom</SelectItem>
                  <SelectItem value="Microsoft Teams">
                    Microsoft Teams
                  </SelectItem>
                  <SelectItem value="In-Person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="meetingLink" className="mb-2">
                Meeting Link <span className="text-red-500">*</span>
              </Label>
              <Input
                id="meetingLink"
                name="meetingLink"
                value={formData.meetingLink}
                onChange={handleChange}
                placeholder="https://meet.google.com/abc..."
                required
              />
            </div>

            <div>
              <Label htmlFor="instructor" className="mb-2">
                Instructor <span className="text-red-500">*</span>
              </Label>
              <Input
                id="instructor"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                placeholder="Nikita Singh"
                required
              />
            </div>

            <div>
              <Label htmlFor="capacity" className="mb-2">
                Capacity <span className="text-red-500">*</span>
              </Label>
              <Input
                id="capacity"
                name="capacity"
                type="number"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="30"
                min="1"
                required
              />
            </div>

            <div>
              <Label htmlFor="price" className="mb-2">
                Price (₹) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                placeholder="99.00"
                min="0"
                required
              />
            </div>

            <div className="col-span-2">
              <Label htmlFor="topics" className="mb-2">
                Topics Covered
              </Label>
              <div className="flex gap-2 mb-2">
                <Input
                  id="topics"
                  value={currentTopic}
                  onChange={(e) => setCurrentTopic(e.target.value)}
                  placeholder="Add a topic"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTopic();
                    }
                  }}
                />
                <Button type="button" onClick={addTopic} size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {topic}
                    <button
                      type="button"
                      onClick={() => removeTopic(index)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Create Workshop"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
