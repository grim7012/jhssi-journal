// src/app/archives/page.tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import ArchivesHeader from "@/components/archives/ArchivesHeader";
import SearchFilters from "@/components/archives/SearchFilters";
import ArchiveItem from "@/components/archives/ArchiveItem";
import PreviewModal from "@/components/archives/PreviewModal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, TrendingUp, Star } from "lucide-react";

// Mock data for archives
const archivesData = [
  {
    id: "1",
    title: "Global Perspectives on Sustainable Development",
    volume: "15",
    issue: "3",
    year: 2024,
    month: "September",
    description: "This issue explores innovative approaches to sustainable development across various sectors, featuring groundbreaking research from international scholars.",
    coverImage: "/photos/img5.jpeg",
    pdfUrl: "#",
    pages: 120,
    articles: 8,
    categories: ["Social Sciences", "Sustainable Development", "Interdisciplinary"],
    featured: true
  },
  {
    id: "2",
    title: "Digital Humanities in the Modern Era",
    volume: "15",
    issue: "2",
    year: 2024,
    month: "June",
    description: "Examining the intersection of technology and humanities, this issue presents cutting-edge research on digital methodologies in humanistic studies.",
    coverImage: "/photos/img1.jpeg",
    pdfUrl: "#",
    pages: 98,
    articles: 7,
    categories: ["Humanities", "Technology", "Research Methods"]
  },
  {
    id: "3",
    title: "Cross-Cultural Communication Studies",
    volume: "15",
    issue: "1",
    year: 2024,
    month: "March",
    description: "Focusing on communication across cultural boundaries, this issue offers insights into linguistic, social, and psychological aspects of intercultural exchange.",
    coverImage: "/photos/img3.jpeg",
    pdfUrl: "#",
    pages: 115,
    articles: 9,
    categories: ["Social Sciences", "Communication", "Cultural Studies"]
  },
  {
    id: "4",
    title: "Historical Analysis of Urban Development",
    volume: "14",
    issue: "4",
    year: 2023,
    month: "December",
    description: "A comprehensive examination of urban evolution through historical lenses, featuring case studies from different continents and time periods.",
    coverImage: "/photos/img4.jpeg",
    pdfUrl: "#",
    pages: 142,
    articles: 10,
    categories: ["History", "Urban Studies", "Social Sciences"],
    featured: true
  },
  {
    id: "5",
    title: "Psychological Impacts of Digital Transformation",
    volume: "14",
    issue: "3",
    year: 2023,
    month: "September",
    description: "Investigating the psychological effects of rapid digitalization on individuals and societies in the 21st century.",
    coverImage: "/photos/img2.jpeg",
    pdfUrl: "#",
    pages: 108,
    articles: 7,
    categories: ["Psychology", "Technology", "Social Sciences"]
  },
  {
    id: "6",
    title: "Philosophical Approaches to Artificial Intelligence",
    volume: "14",
    issue: "2",
    year: 2023,
    month: "June",
    description: "Exploring ethical and philosophical implications of AI development and implementation in contemporary society.",
    coverImage: "/photos/img2.jpeg",
    pdfUrl: "#",
    pages: 95,
    articles: 6,
    categories: ["Philosophy", "Artificial Intelligence", "Ethics"]
  },
  {
    id: "7",
    title: "Economic Resilience in Post-Pandemic World",
    volume: "14",
    issue: "1",
    year: 2023,
    month: "March",
    description: "Analyzing economic recovery strategies and resilience building in the aftermath of global health crises.",
    coverImage: "/photos/img5.jpeg",
    pdfUrl: "#",
    pages: 125,
    articles: 8,
    categories: ["Economics", "Public Health", "Policy Studies"]
  },
  {
    id: "8",
    title: "Literary Criticism in the 21st Century",
    volume: "13",
    issue: "4",
    year: 2022,
    month: "December",
    description: "New perspectives and methodologies in literary analysis, featuring contemporary critical approaches to modern literature.",
    coverImage: "/photos/img1.jpeg",
    pdfUrl: "#",
    pages: 110,
    articles: 7,
    categories: ["Literature", "Literary Criticism", "Humanities"]
  },
];

export default function ArchivesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    year: "all",
    type: "all",
    category: "all"
  });
  const [selectedIssue, setSelectedIssue] = useState<typeof archivesData[0] | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Filter and search logic
  const filteredArchives = useMemo(() => {
    return archivesData.filter((item) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !item.title.toLowerCase().includes(query) &&
          !item.description.toLowerCase().includes(query) &&
          !item.categories.some(cat => cat.toLowerCase().includes(query))
        ) {
          return false;
        }
      }

      // Year filter
      if (filters.year !== "all" && item.year.toString() !== filters.year) {
        return false;
      }

      // Category filter
      if (filters.category !== "all" && !item.categories.includes(filters.category)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const handlePreview = (issue: typeof archivesData[0]) => {
    setSelectedIssue(issue);
    setIsPreviewOpen(true);
  };

  // Get featured issues
  const featuredIssues = archivesData.filter(item => item.featured);
  const recentIssues = archivesData.slice(0, 3);

  return (
    <main>
      <Navigation/>
      <ArchivesHeader />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#6B4A2E]/10 rounded-lg">
                <BookOpen className="text-[#6B4A2E]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Published Issues</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C8A45D]/10 rounded-lg">
                <TrendingUp className="text-[#C8A45D]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">12 Years</div>
                <div className="text-gray-600">Of Publication</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#3F2A1D]/10 rounded-lg">
                <Star className="text-[#3F2A1D]" size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Featured Issues</div>
              </div>
            </div>
          </div>
        </div>

        <SearchFilters onSearch={setSearchQuery} onFilterChange={setFilters} />

        {/* Results Count */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Journal Archives
          </h2>
          <p className="text-gray-600">
            Showing {filteredArchives.length} of {archivesData.length} issues
            {filters.year !== "all" && ` for ${filters.year}`}
          </p>
        </div>

        {/* Featured Issues Section */}
        {featuredIssues.length > 0 && filters.year === "all" && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Star size={20} className="text-[#C8A45D]" />
              Featured Issues
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredIssues.map((issue) => (
                <ArchiveItem
                  key={issue.id}
                  {...issue}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Issues Grid */}
        <div className="space-y-6">
          {filteredArchives.length > 0 ? (
            filteredArchives.map((issue) => (
              <div key={issue.id} onClick={() => handlePreview(issue)}>
                <ArchiveItem {...issue} />
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No issues found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilters({ year: "all", type: "all", category: "all" });
                }}
                className="text-[#6B4A2E] hover:underline"
              >
                Clear all filters and try again
              </button>
            </div>
          )}
        </div>

        {/* Recent Issues Quick Access */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Issues</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentIssues.map((issue) => (
              <div
                key={issue.id}
                className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handlePreview(issue)}
              >
                <div className="relative h-48">
                  <Image
                    src={issue.coverImage}
                    alt={issue.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-1">
                    Vol. {issue.volume}, Issue {issue.issue}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {issue.title}
                  </h4>
                  <div className="text-xs text-gray-500">{issue.month} {issue.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Modal */}
        {selectedIssue && (
          <PreviewModal
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
            issue={selectedIssue}
          />
        )}
      </div>
      <Footer/>
    </main>
  );
}