import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { History, Download, MoreHorizontal } from "lucide-react"

const analysisHistory = [
  {
    name: "SF Air Quality Analysis",
    date: "2 hours ago",
    model: "XGBoost",
    status: "completed",
    accuracy: "94.2%",
  },
  {
    name: "Water Quality Assessment",
    date: "1 day ago",
    model: "Random Forest",
    status: "completed",
    accuracy: "91.8%",
  },
  {
    name: "Pollution Source Detection",
    date: "3 days ago",
    model: "CNN",
    status: "completed",
    accuracy: "89.5%",
  },
  {
    name: "Climate Impact Study",
    date: "1 week ago",
    model: "LSTM",
    status: "completed",
    accuracy: "87.3%",
  },
]

export function AnalysisHistory() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5 text-gray-500" />
          Analysis History
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {analysisHistory.map((analysis, index) => (
          <div key={index} className="p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{analysis.name}</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs">
                {analysis.model}
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                {analysis.accuracy}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{analysis.date}</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Download className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}

        <div className="pt-3 border-t">
          <Button variant="outline" className="w-full" size="sm">
            View All History
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
