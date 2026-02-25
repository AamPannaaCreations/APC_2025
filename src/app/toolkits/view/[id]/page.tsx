import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";
import Link from "next/link";
import ContentAccessForm from "@/components/admin/gated-content/ContentAccessForm";
import { connectDB } from "@/lib/mongodb";
import GatedContent from "@/models/GatedContent";
import Image from "next/image";

interface Content {
  _id: string;
  title: string;
  description: string;
  contentType: string;
  category: string;
  thumbnailUrl?: string;
  status: string;
}

async function getInitialContent(id: string): Promise<Content | null> {
  try {
    await connectDB();
    const content = await GatedContent.findById(id).lean<Content>();

    if (!content) return null;

    return {
      _id: content._id.toString(),
      title: content.title,
      description: content.description,
      contentType: content.contentType,
      category: content.category,
      thumbnailUrl: content.thumbnailUrl,
      status: content.status,
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

export default async function ContentGatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = await getInitialContent(id);

  if (!content) {
    notFound();
  }

  if (content.status !== "active") {
    redirect("/toolkits");
  }

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      pdf: "bg-red-100 text-red-800",
      ppt: "bg-orange-100 text-orange-800",
      doc: "bg-blue-100 text-blue-800",
      video: "bg-purple-100 text-purple-800",
      other: "bg-gray-100 text-gray-800",
    };

    return <Badge className={colors[type] || ""}>{type.toUpperCase()}</Badge>;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/toolkits">
            <Button variant="ghost">← Back to Toolkits</Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Content Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                {content.thumbnailUrl && (
                  <Image
                    src={content.thumbnailUrl}
                    alt={content.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="flex items-center gap-2 mb-3">
                  {getTypeBadge(content.contentType)}
                  <Badge variant="outline">{content.category}</Badge>
                </div>
                <CardTitle className="text-3xl">{content.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {content.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <CardTitle className="text-lg">
                      Why we need your info
                    </CardTitle>
                    <CardDescription className="mt-2 space-y-1">
                      <p>• To send you related content and updates</p>
                      <p>• To improve our resources based on your needs</p>
                      <p>• To provide personalized recommendations</p>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Access Form */}
          <ContentAccessForm contentId={id} />
        </div>
      </div>
    </div>
  );
}
