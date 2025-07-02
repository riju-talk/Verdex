"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { BarChart3, Download, Share2, TrendingUp } from "lucide-react"

const predictionData = [
  { date: "Jan 16", predicted: 68, actual: 65, confidence: 92 },
  { date: "Jan 17", predicted: 72, actual: null, confidence: 89 },
  { date: "Jan 18", predicted: 75, actual: null, confidence: 87 },
  { date: "Jan 19", predicted: 71, actual: null, confidence: 85 },
  { date: "Jan 20", predicted: 69, actual: null, confidence: 88 },
]

export function AnalysisResults() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-500" />
            Analysis Results
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Model Performance */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-medium text-sm">Model Performance</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold text-green-600">94.2%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">0.85</div>
              <div className="text-xs text-gray-600">R² Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">3.2</div>
              <div className="text-xs text-gray-600">RMSE</div>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Key Findings</h4>
          <div className="space-y-2">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm font-medium text-amber-900">High Correlation Detected</p>
              <p className="text-xs text-amber-700 mt-1">
                PM2.5 levels show strong correlation (0.89) with wind speed and temperature patterns.
              </p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900">Seasonal Pattern Identified</p>
              <p className="text-xs text-blue-700 mt-1">
                Air quality deteriorates by 23% during winter months due to reduced atmospheric mixing.
              </p>
            </div>
          </div>
        </div>

        {/* Prediction Chart */}
        <div>
          <h4 className="font-medium text-sm mb-3">AQI Predictions (Next 5 Days)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeWidth={2} name="Predicted AQI" />
                <Line type="monotone" dataKey="actual" stroke="#6b7280" strokeWidth={2} name="Actual AQI" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Confidence Metrics */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Prediction Confidence</h4>
          {predictionData.slice(1).map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{item.date}</span>
                <span className="font-semibold">{item.confidence}%</span>
              </div>
              <Progress value={item.confidence} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
