import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Key, BarChart3, BookOpen, Code, ExternalLink } from "lucide-react"

export function SchoolIntegration() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-500" />
          School & Institution Integration
        </CardTitle>
        <Badge variant="outline" className="w-fit bg-blue-50 text-blue-700 border-blue-200">
          API Access for Educational Institutions
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* API Key Request */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Request API Access</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Institution Name</label>
                <Input placeholder="e.g., Stanford University" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Institution Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="k12">K-12 School</SelectItem>
                    <SelectItem value="community-college">Community College</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="research">Research Institution</SelectItem>
                    <SelectItem value="nonprofit">Non-profit Organization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Contact Email</label>
                <Input type="email" placeholder="admin@institution.edu" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Intended Use Case</label>
                <Textarea
                  placeholder="Describe how you plan to use the Verdex API in your curriculum or research..."
                  className="min-h-[80px]"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Key className="mr-2 h-4 w-4" />
                Request API Key
              </Button>
            </div>
          </div>

          {/* API Documentation & Features */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm">API Features & Documentation</h4>

            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-4 w-4 text-green-500" />
                  <span className="font-medium text-sm">Environmental Data Access</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  Real-time and historical environmental data for your region
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    REST API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    JSON
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Rate Limited
                  </Badge>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span className="font-medium text-sm">Educational Resources</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">Access to curriculum materials and lesson plans</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    Curriculum API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Metadata
                  </Badge>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-purple-500" />
                  <span className="font-medium text-sm">Student Analytics</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">Track student engagement and learning outcomes</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    Analytics API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Privacy Safe
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Code className="mr-2 h-3 w-3" />
                API Documentation
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-3 w-3" />
                Code Examples
              </Button>
            </div>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="pt-6 border-t">
          <h4 className="font-medium text-sm mb-4">Current Usage Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">127</div>
              <div className="text-xs text-gray-600">Active Schools</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">15K</div>
              <div className="text-xs text-gray-600">Students Reached</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-xl font-bold text-purple-600">2.3M</div>
              <div className="text-xs text-gray-600">API Calls/Month</div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <div className="text-xl font-bold text-amber-600">89%</div>
              <div className="text-xs text-gray-600">Uptime</div>
            </div>
          </div>
        </div>

        {/* Sample Integration */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-sm mb-3">Sample API Integration</h4>
          <div className="bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto">
            <div className="text-gray-500">// Fetch local environmental data</div>
            <div>const response = await fetch(</div>
            <div className="ml-4">'https://api.verdex.dev/v1/environmental/current',</div>
            <div className="ml-4">{"{"}</div>
            <div className="ml-8">
              headers: {"{"} 'X-API-Key': 'your-school-api-key' {"}"},
            </div>
            <div className="ml-8">
              params: {"{"} lat: 37.7749, lng: -122.4194 {"}"}
            </div>
            <div className="ml-4">{"}"}</div>
            <div>);</div>
            <div className="text-gray-500 mt-2">// Use data in your curriculum</div>
            <div>const airQuality = response.data.aqi;</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
