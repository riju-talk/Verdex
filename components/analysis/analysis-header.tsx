import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Upload, Download, History } from "lucide-react"

export function AnalysisHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Analysis Studio</h1>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            🧠 AI Powered
          </Badge>
          <span className="text-sm text-gray-600">Upload data • Run models • Get insights</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <History className="mr-2 h-4 w-4" />
          History
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Templates
        </Button>
        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
          <Upload className="mr-2 h-4 w-4" />
          New Analysis
        </Button>
      </div>
    </div>
  )
}
