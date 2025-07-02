import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, Users } from "lucide-react"

export function PolicyHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy & Education Toolkit</h1>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            🧑‍🏫 AI-Powered Policy Generation
          </Badge>
          <span className="text-sm text-gray-600">Generate policies • Access resources • Educate communities</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <BookOpen className="mr-2 h-4 w-4" />
          Resource Library
        </Button>
        <Button variant="outline" size="sm">
          <Users className="mr-2 h-4 w-4" />
          School Portal
        </Button>
        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
          <FileText className="mr-2 h-4 w-4" />
          Generate Policy
        </Button>
      </div>
    </div>
  )
}
