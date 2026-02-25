"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Download, Search } from "lucide-react";

interface GatedContent {
  _id: string;
  title: string;
  description: string;
  contentType: string;
  thumbnailUrl?: string;
  category: string;
  status: string;
}

interface ToolkitsClientProps {
  initialContents: GatedContent[];
}

export default function ToolkitsClient({
  initialContents,
}: ToolkitsClientProps) {
  const [contents] = useState<GatedContent[]>(initialContents);
  const [filteredContents, setFilteredContents] =
    useState<GatedContent[]>(initialContents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    filterContents();
  }, [searchTerm, selectedType, selectedCategory]);

  const filterContents = () => {
    let filtered = [...contents];

    if (searchTerm) {
      filtered = filtered.filter(
        (content) =>
          content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          content.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter(
        (content) => content.contentType === selectedType,
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (content) => content.category === selectedCategory,
      );
    }

    setFilteredContents(filtered);
  };

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

  const getTypeIcon = (type: string) => {
    return <FileText className="h-12 w-12 text-blue-600" />;
  };

  const uniqueCategories = Array.from(new Set(contents.map((c) => c.category)));

  const handleAccessContent = (id: string) => {
    redirect(`/toolkits/view/${id}`);
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search toolkits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* 
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="ppt">PowerPoint</SelectItem>
              <SelectItem value="doc">Document</SelectItem>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select> */}

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {uniqueCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <p>
            Showing {filteredContents.length} of {contents.length} toolkits
          </p>
          {(searchTerm ||
            selectedType !== "all" ||
            selectedCategory !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Content Grid */}
      {filteredContents.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No toolkits found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContents.map((content) => (
            <Card
              key={content._id}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleAccessContent(content._id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  {content.thumbnailUrl ? (
                    <Image
                      src={content.thumbnailUrl}
                      alt={content.title}
                      height={160}
                      width={400}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  ) : (
                    <div className="w-full h-40 rounded-md mb-4 flex items-center justify-center">
                      {getTypeIcon(content.contentType)}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {getTypeBadge(content.contentType)}
                  <Badge variant="outline">{content.category}</Badge>
                </div>
                <CardTitle className="text-xl transition-colors">
                  {content.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {content.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full hover:bg-blue-700 transition-colors">
                  <Download className="mr-2 h-4 w-4" />
                  Access Content
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
