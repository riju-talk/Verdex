import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, MapPin } from "lucide-react"

export function ActionsHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Citizen Eco Actions</h1>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            🎯 Level 3 EcoWarrior
          </Badge>
          <span className="text-sm text-gray-600">Take action • Earn points • Make impact</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <MapPin className="mr-2 h-4 w-4" />
          Change Location
        </Button>
        <Button variant="outline" size="sm">
          <Users className="mr-2 h-4 w-4" />
          Find Groups
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          <Target className="mr-2 h-4 w-4" />
          New Mission
        </Button>
      </div>
    </div>
  )
}
