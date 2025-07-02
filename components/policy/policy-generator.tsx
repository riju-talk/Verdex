"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { FileText, Lightbulb, Wand2, Clock } from "lucide-react"
import { useState } from "react"

export function PolicyGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)

  const handleGenerate = () => {
    setIsGenerating(true)
    setGenerationProgress(0)

    // Simulate generation progress
    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsGenerating(false)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-amber-600" />
          AI Policy Generator
        </CardTitle>
        <Badge variant="outline" className="w-fit bg-purple-50 text-purple-700 border-purple-200">
          Powered by GPT-4o
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Policy Configuration */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <SelectItem value="carbon-reduction">Carbon Reduction Plan</SelectItem>
                  <SelectItem value="green-transportation">Green Transportation Policy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Target Region</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sf-bay">San Francisco Bay Area</SelectItem>
                  <SelectItem value="la-metro">Los Angeles Metro</SelectItem>
                  <SelectItem value="nyc">New York City</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="seattle">Seattle</SelectItem>
                  <SelectItem value="custom">Custom Region</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Policy Scope</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="municipal">Municipal/City Level</SelectItem>
                <SelectItem value="county">County Level</SelectItem>
                <SelectItem value="state">State Level</SelectItem>
                <SelectItem value="federal">Federal Level</SelectItem>
                <SelectItem value="corporate">Corporate Policy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Specific Requirements & Context</label>
            <Textarea
              placeholder="Describe specific environmental challenges, existing regulations, stakeholder concerns, budget constraints, or any other relevant context for your region..."
              className="min-h-[120px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Timeline</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Implementation timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (0-6 months)</SelectItem>
                  <SelectItem value="short">Short-term (6-18 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (1-3 years)</SelectItem>
                  <SelectItem value="long">Long-term (3-10 years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Budget Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Estimated budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Under $100K</SelectItem>
                  <SelectItem value="medium">$100K - $1M</SelectItem>
                  <SelectItem value="high">$1M - $10M</SelectItem>
                  <SelectItem value="major">$10M+</SelectItem>
                  <SelectItem value="tbd">To be determined</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Generation Progress */}
        {isGenerating && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Wand2 className="h-4 w-4 text-amber-600 animate-pulse" />
              <span className="font-medium text-sm text-amber-900">Generating Policy Document...</span>
            </div>
            <Progress value={generationProgress} className="h-2 mb-2" />
            <div className="flex items-center justify-between text-xs text-amber-700">
              <span>Analyzing requirements and generating content</span>
              <span>{generationProgress}%</span>
            </div>
          </div>
        )}

        {/* Generate Button */}
        <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={handleGenerate} disabled={isGenerating}>
          {isGenerating ? (
            <>
              <Clock className="mr-2 h-4 w-4 animate-spin" />
              Generating Policy...
            </>
          ) : (
            <>
              <Lightbulb className="mr-2 h-4 w-4" />
              Generate Policy Draft
            </>
          )}
        </Button>

        {/* Quick Templates */}
        <div className="pt-4 border-t">
          <h4 className="font-medium text-sm mb-3">Quick Start Templates</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="justify-start">
              <FileText className="mr-2 h-3 w-3" />
              Emergency Air Quality Response
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <FileText className="mr-2 h-3 w-3" />
              Community Recycling Program
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <FileText className="mr-2 h-3 w-3" />
              Green Building Standards
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <FileText className="mr-2 h-3 w-3" />
              Carbon Neutrality Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
