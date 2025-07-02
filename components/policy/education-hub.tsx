import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Download, Search, Filter, Users, Star } from "lucide-react"

const educationalResources = [
  {
    title: "Climate Science Fundamentals",
    description: "Interactive lessons on greenhouse effect, carbon cycle, and climate patterns",
    level: "K-12",
    grade: "3-8",
    lessons: 12,
    downloads: 2400,
    rating: 4.8,
    category: "Science",
    featured: true,
  },
  {
    title: "Environmental Data Analysis with Python",
    description: "Hands-on Python notebooks for analyzing environmental datasets",
    level: "College",
    grade: "Undergraduate",
    lessons: 8,
    downloads: 890,
    rating: 4.9,
    category: "Data Science",
    featured: true,
  },
  {
    title: "Community Environmental Action Guide",
    description: "Step-by-step guides for organizing local environmental initiatives",
    level: "Community",
    grade: "All Ages",
    lessons: 15,
    downloads: 1200,
    rating: 4.7,
    category: "Activism",
    featured: false,
  },
  {
    title: "Renewable Energy Systems",
    description: "Technical curriculum on solar, wind, and other renewable technologies",
    level: "College",
    grade: "Graduate",
    lessons: 20,
    downloads: 650,
    rating: 4.6,
    category: "Engineering",
    featured: false,
  },
  {
    title: "Biodiversity and Ecosystems",
    description: "Comprehensive study of local and global ecosystem dynamics",
    level: "K-12",
    grade: "9-12",
    lessons: 18,
    downloads: 1800,
    rating: 4.8,
    category: "Biology",
    featured: false,
  },
  {
    title: "Environmental Policy Analysis",
    description: "Framework for analyzing and creating effective environmental policies",
    level: "College",
    grade: "Graduate",
    lessons: 10,
    downloads: 420,
    rating: 4.5,
    category: "Policy",
    featured: false,
  },
]

export function EducationHub() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Environmental Education Hub
          </CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            500+ Resources
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search educational resources..." className="pl-10" />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-3 w-3" />
              All Levels
            </Button>
            <Badge variant="secondary" className="cursor-pointer">
              K-12
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              College
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Community
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Science
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Policy
            </Badge>
          </div>
        </div>

        {/* Featured Resources */}
        <div>
          <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            Featured Resources
          </h4>
          <div className="space-y-3">
            {educationalResources
              .filter((resource) => resource.featured)
              .map((resource, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-medium text-sm">{resource.title}</h5>
                        <Badge variant="outline" className="text-xs">
                          {resource.level}
                        </Badge>
                        {resource.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">Featured</Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{resource.lessons} lessons</span>
                        <span>{resource.grade}</span>
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h4 className="font-medium text-sm mb-3">All Resources</h4>
          <div className="space-y-2">
            {educationalResources
              .filter((resource) => !resource.featured)
              .map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{resource.title}</span>
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{resource.level}</span>
                      <span>{resource.lessons} lessons</span>
                      <span>{resource.downloads} downloads</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              ))}
          </div>
        </div>

        {/* School Integration CTA */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm text-blue-900 mb-1">School Integration</h4>
              <p className="text-xs text-blue-700">
                Connect your school's systems to access localized environmental data and curriculum
              </p>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Users className="mr-2 h-3 w-3" />
              Get API Key
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
