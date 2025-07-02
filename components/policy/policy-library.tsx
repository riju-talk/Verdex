import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search, Eye, Share2, Calendar } from "lucide-react"

const policyDocuments = [
  {
    title: "San Francisco Air Quality Emergency Response Plan",
    description: "Comprehensive plan for managing air quality during wildfire events and pollution spikes",
    region: "San Francisco, CA",
    type: "Air Quality",
    status: "Active",
    lastUpdated: "2024-01-10",
    downloads: 245,
    pages: 28,
    author: "SF Environmental Department",
  },
  {
    title: "Zero Waste Initiative for Urban Communities",
    description: "Municipal waste reduction strategy with implementation guidelines and metrics",
    region: "Seattle, WA",
    type: "Waste Management",
    status: "Draft",
    lastUpdated: "2024-01-08",
    downloads: 189,
    pages: 35,
    author: "Seattle Public Utilities",
  },
  {
    title: "Renewable Energy Transition Framework",
    description: "State-level policy framework for transitioning to 100% renewable energy by 2035",
    region: "California",
    type: "Energy Policy",
    status: "Active",
    lastUpdated: "2024-01-05",
    downloads: 567,
    pages: 52,
    author: "CA Energy Commission",
  },
  {
    title: "Urban Green Infrastructure Standards",
    description: "Building codes and standards for incorporating green infrastructure in urban development",
    region: "Portland, OR",
    type: "Green Building",
    status: "Active",
    lastUpdated: "2023-12-28",
    downloads: 334,
    pages: 41,
    author: "Portland Bureau of Planning",
  },
  {
    title: "Community Carbon Offset Program Guidelines",
    description: "Framework for establishing local carbon offset programs with community participation",
    region: "Boulder, CO",
    type: "Carbon Policy",
    status: "Pilot",
    lastUpdated: "2023-12-20",
    downloads: 156,
    pages: 22,
    author: "Boulder Climate Office",
  },
  {
    title: "Environmental Justice Implementation Plan",
    description: "Comprehensive strategy for addressing environmental inequities in disadvantaged communities",
    region: "Los Angeles, CA",
    type: "Environmental Justice",
    status: "Active",
    lastUpdated: "2023-12-15",
    downloads: 423,
    pages: 67,
    author: "LA Environmental Justice Coalition",
  },
]

export function PolicyLibrary() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-green-500" />
            Policy Library
          </CardTitle>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            150+ Policies
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search policies by title, region, or type..." className="pl-10" />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="cursor-pointer">
              All Types
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Air Quality
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Waste Management
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Energy Policy
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Carbon Policy
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Green Building
            </Badge>
          </div>
        </div>

        {/* Policy Documents */}
        <div className="space-y-4">
          {policyDocuments.map((policy, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-medium text-sm">{policy.title}</h5>
                    <Badge
                      variant="outline"
                      className={
                        policy.status === "Active"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : policy.status === "Draft"
                            ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                      }
                    >
                      {policy.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {policy.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{policy.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📍 {policy.region}</span>
                    <span>📄 {policy.pages} pages</span>
                    <span>⬇️ {policy.downloads} downloads</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{policy.lastUpdated}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">By {policy.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Share2 className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-3 w-3" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">Load More Policies</Button>
        </div>

        {/* Contribution CTA */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm text-green-900 mb-1">Contribute to the Library</h4>
              <p className="text-xs text-green-700">
                Share your environmental policies and help other communities learn from your experience
              </p>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <FileText className="mr-2 h-3 w-3" />
              Submit Policy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
