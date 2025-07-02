import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, Brain, BarChart3, FileText, Zap, TrendingUp } from "lucide-react"

export function EcoAnalysis() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-amber-200 bg-amber-50 text-amber-700">
            🧪 AI-Powered Eco Analysis Studio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Democratize Environmental Data Science
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Upload datasets, run ML models, and get AI-powered insights and explanations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload & Analysis Flow */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-purple-500" />
                  Data Upload Studio
                </CardTitle>
                <CardDescription>Support for CSV, Excel, JSON formats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm font-medium text-gray-700">Drop your environmental dataset here</p>
                  <p className="text-xs text-gray-500 mt-1">or click to browse files</p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>air_quality_2024.csv</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Ready
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>water_samples.xlsx</span>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      Processing
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  AI Model Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 border rounded-lg hover:bg-amber-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Pollution Prediction</span>
                      <Badge variant="secondary">XGBoost</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Predict air quality trends</p>
                  </div>

                  <div className="p-3 border rounded-lg hover:bg-amber-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Water Scarcity Risk</span>
                      <Badge variant="secondary">LSTM</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Analyze water availability patterns</p>
                  </div>

                  <div className="p-3 border rounded-lg hover:bg-amber-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">Deforestation Detection</span>
                      <Badge variant="secondary">CNN</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Satellite image analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results & Insights */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-500" />
                  Analysis Results
                </CardTitle>
                <CardDescription>Auto-generated insights from your data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-sm">Key Finding</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      PM2.5 levels show 23% improvement over the last 6 months, correlating with reduced industrial
                      activity.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Prediction Accuracy</span>
                      <span className="font-semibold">94.2%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Quality Score</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-blue-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="h-5 w-5 text-blue-500" />
                  AI Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Why is AQI bad in your area today?</strong>
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The elevated AQI (Air Quality Index) in your area is primarily due to:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• High PM2.5 concentration from nearby construction</li>
                    <li>• Stagnant weather conditions trapping pollutants</li>
                    <li>• Increased vehicle emissions during rush hour</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Generated by GPT-4o • Confidence: 89%</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button className="bg-amber-600 hover:bg-amber-700">
                <FileText className="mr-2 h-4 w-4" />
                Generate Full Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
