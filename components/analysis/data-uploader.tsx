"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

const sampleFiles = [
  { name: "air_quality_2024.csv", size: "2.3 MB", status: "completed", progress: 100 },
  { name: "water_samples.xlsx", size: "1.8 MB", status: "processing", progress: 65 },
  { name: "soil_analysis.json", size: "890 KB", status: "queued", progress: 0 },
]

export function DataUploader() {
  const [dragActive, setDragActive] = useState(false)

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5 text-amber-600" />
          Data Upload Studio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            dragActive ? "border-amber-400 bg-amber-50" : "border-gray-300 hover:border-amber-400"
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDrop={() => setDragActive(false)}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-sm font-medium text-gray-700 mb-2">Drop your environmental dataset here</p>
          <p className="text-xs text-gray-500 mb-4">Supports CSV, Excel, JSON, and TXT files up to 50MB</p>
          <Button className="bg-amber-600 hover:bg-amber-700">Browse Files</Button>
        </div>

        {/* Supported Formats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            <FileText className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium">CSV</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            <FileText className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium">Excel</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            <FileText className="h-4 w-4 text-purple-500" />
            <span className="text-xs font-medium">JSON</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
            <FileText className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-medium">TXT</span>
          </div>
        </div>

        {/* File Queue */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-gray-700">Upload Queue</h4>
          {sampleFiles.map((file, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{file.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{file.size}</span>
                    {file.status === "completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                    {file.status === "processing" && <AlertCircle className="h-4 w-4 text-amber-500" />}
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <Badge
                      variant="outline"
                      className={
                        file.status === "completed"
                          ? "bg-green-50 text-green-700"
                          : file.status === "processing"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-gray-50 text-gray-700"
                      }
                    >
                      {file.status}
                    </Badge>
                    <span className="text-gray-500">{file.progress}%</span>
                  </div>
                  <Progress value={file.progress} className="h-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
