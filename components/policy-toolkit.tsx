import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Lightbulb, Download, BookOpen, Users } from "lucide-react"

export function PolicyToolkit() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-amber-200 bg-amber-50 text-amber-700">
            🧑‍🏫 Education & Policy Toolkit
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Democratize Environmental Education
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Curriculum hub for educators and AI-powered policy draft generator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Hub */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Environmental Curriculum Hub
                </CardTitle>
                <CardDescription>Ready-to-use educational resources for K-12 and college</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Climate Science Basics</h4>
                      <Badge variant="secondary">K-12</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Interactive lessons on greenhouse effect, carbon cycle, and climate patterns
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>12 lessons</span>
                      <span>3-5 grade level</span>
                      <span>2.4k downloads</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Data Science for Environment</h4>
                      <Badge variant="secondary">College</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Python notebooks for analyzing environmental datasets</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>8 modules</span>
                      <span>Undergraduate</span>
                      <span>890 downloads</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Local Environmental Action</h4>
                      <Badge variant="secondary">Community</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Guides for community-led environmental initiatives</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>15 guides</span>
                      <span>All ages</span>
                      <span>1.2k downloads</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">School API Integration</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Get API Key
                    </Button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Connect your school's data systems to access local environmental data
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Policy Generator */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-500" />
                  AI Policy Draft Generator
                </CardTitle>
                <CardDescription>Generate evidence-based environmental policies for your region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Policy Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select policy type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air-quality">Air Quality Action Plan</SelectItem>
                        <SelectItem value="waste-management">Waste Management Policy</SelectItem>
                        <SelectItem value="renewable-energy">Renewable Energy Initiative</SelectItem>
                        <SelectItem value="water-conservation">Water Conservation Strategy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Region/District</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sf-bay">San Francisco Bay Area</SelectItem>
                        <SelectItem value="delhi-14">Delhi District 14</SelectItem>
                        <SelectItem value="london-central">Central London</SelectItem>
                        <SelectItem value="custom">Custom Region</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Specific Requirements</label>
                    <Textarea
                      placeholder="Describe specific environmental challenges or requirements for your region..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Generate Policy Draft
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-green-400">
              <CardHeader>
                <CardTitle className="text-lg">Sample Generated Policy</CardTitle>
                <CardDescription>Air Quality Action Plan - Delhi District 14</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-gray-700">
                    <h4 className="font-semibold mb-2">Executive Summary</h4>
                    <p className="leading-relaxed">
                      This comprehensive air quality action plan addresses the critical PM2.5 pollution levels in Delhi
                      District 14, implementing a multi-phase approach combining immediate interventions and long-term
                      sustainable solutions...
                    </p>
                  </div>

                  <div className="text-sm text-gray-700">
                    <h4 className="font-semibold mb-2">Key Recommendations</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• Implement odd-even vehicle restrictions during high pollution days</li>
                      <li>• Establish 5 new air quality monitoring stations</li>
                      <li>• Mandate industrial emission controls with 30% reduction target</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="text-xs text-gray-500">Generated by GPT-4o • Based on local data</div>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-3 w-3" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
