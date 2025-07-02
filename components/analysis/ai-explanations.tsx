import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, MessageSquare, ThumbsUp, ThumbsDown, Copy } from "lucide-react"

export function AIExplanations() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-500" />
          AI Explanations
        </CardTitle>
        <Badge variant="outline" className="w-fit bg-blue-50 text-blue-700 border-blue-200">
          Powered by GPT-4o
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Explanation */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-sm text-blue-900">Analysis Summary</span>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Your air quality data reveals several important patterns:</strong>
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The model identified that <strong>PM2.5 concentrations are primarily driven by three factors</strong>:
              wind speed (correlation: -0.72), temperature inversions (correlation: 0.68), and proximity to major
              traffic corridors (correlation: 0.54).
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Key insight:</strong> Your location experiences a 40% increase in pollution during morning rush
              hours (7-9 AM) when atmospheric mixing is limited. The model predicts this pattern will continue for the
              next 5 days with 89% confidence.
            </p>
          </div>
        </div>

        {/* Detailed Explanations */}
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Detailed Insights</h4>

          <div className="p-3 border rounded-lg">
            <p className="text-sm font-medium text-gray-900 mb-2">Why is PM2.5 the main concern?</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              PM2.5 particles are small enough to penetrate deep into lungs and enter the bloodstream. Your data shows
              PM2.5 levels exceed WHO guidelines on 23% of measured days, primarily during temperature inversion events.
            </p>
          </div>

          <div className="p-3 border rounded-lg">
            <p className="text-sm font-medium text-gray-900 mb-2">What drives the seasonal variation?</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Winter months show 35% higher pollution due to reduced atmospheric mixing height and increased heating
              emissions. The model accounts for this seasonal pattern in its predictions.
            </p>
          </div>

          <div className="p-3 border rounded-lg">
            <p className="text-sm font-medium text-gray-900 mb-2">How reliable are these predictions?</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              The XGBoost model achieved 94.2% accuracy on historical data. Confidence decreases from 92% (tomorrow) to
              85% (5 days out) as meteorological uncertainty increases.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="mr-2 h-3 w-3" />
              Helpful
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="mr-2 h-3 w-3" />
              Not helpful
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Copy className="mr-2 h-3 w-3" />
            Copy
          </Button>
        </div>

        {/* Confidence Score */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">AI Confidence Score</span>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              89%
            </Badge>
          </div>
          <p className="text-xs text-gray-600">
            This explanation is based on statistical analysis of your data and established environmental science
            principles.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
