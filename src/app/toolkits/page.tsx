import ToolkitsClient from "@/components/admin/gated-content/ToolkitsClient";
import GatedContent from "@/models/GatedContent";
import { connectDB } from "@/lib/mongodb";

interface GatedContent {
  _id: string;
  title: string;
  description: string;
  contentType: string;
  thumbnailUrl?: string;
  category: string;
  status: string;
}

async function getContents(): Promise<GatedContent[]> {
  try {
    await connectDB();

    const response = await GatedContent.find({ status: "active" })
      .select("-fileUrl")
      .sort({ createdAt: -1 })
      .lean();

    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Error fetching toolkits:", error);
    return [];
  }
}

export default async function ToolkitsPage() {
  const contents = await getContents();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-10 py-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Toolkits Library
          </h1>
          <p className="text-lg text-gray-600">
            Access whitepapers, reports, and valuable content to grow your
            business
          </p>
        </div>
      </div>

      <ToolkitsClient initialContents={contents} />
    </div>
  );
}
