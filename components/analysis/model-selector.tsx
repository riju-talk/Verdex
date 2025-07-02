import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Play, Settings, Info } from "lucide-react"

const models = [
  {
    name: "Air Quality Predictor",
    type: "XGBoost",
    description: "Predicts AQI trends based on weather and historical data",
    accuracy: "94.2%",
    processingTime: "~2 min",
    recommended: true,
  },
  {
    name: "Water Quality Analyzer",
    type: "Random Forest",
    description: "Analyzes water contamination and safety levels",
    accuracy: "91.8%",
    processingTime: "~3 min",
    recommended: false,
  },
  {
    name: "Pollution Source Detection",
    type: "CNN",
    description: "Identifies pollution sources from satellite imagery",
    accuracy: "89.5%",
    processingTime: "~5 min",
    recommended: false,
  },
  {
    name: "Climate Impact Assessment",
    type: "LSTM",
    description: "Long-term climate impact predictions",
    accuracy: "87.3%",
    processingTime: "~4 min",
    recommended: false,
  },
]

export function ModelSelector() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-500" />
          AI Model Selection
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {models.map((model, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer ${
              model.recommended ? "border-amber-200 bg-amber-50" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{model.name}</span>
                {model.recommended && (
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs">Recommended</Badge>
                )}
              </div>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Info className="h-3 w-3" />
              </Button>
            </div>

            <p className="text-xs text-gray-600 mb-3">{model.description}</p>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Type: {model.type}</span>
                <span>Accuracy: {model.accuracy}</span>
              </div>
              <span className="text-xs text-gray-500">{model.processingTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex-1">
                <Play className="mr-2 h-3 w-3" />
                Run Model
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
