import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Layers, Maximize2, Filter } from "lucide-react"

export function InteractiveMap() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-600" />
            Environmental Map
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Layers className="mr-2 h-4 w-4" />
              Layers
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Map Placeholder */}
          <div className="h-96 bg-gradient-to-br from-blue-100 via-green-100 to-emerald-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium mb-2">Interactive Environmental Map</p>
              <p className="text-sm text-gray-400 mb-4">Real-time data visualization with multiple layers</p>

              {/* Map Legend */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Good Air Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Poor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Weather Stations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Overlays */}
          <div className="absolute top-4 left-4 space-y-2">
            <Badge className="bg-white text-gray-700 shadow-md">📍 San Francisco Bay Area</Badge>
            <Badge className="bg-white text-gray-700 shadow-md">🔄 Live Updates</Badge>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-white rounded-lg shadow-md p-3 space-y-2">
              <div className="text-xs font-medium text-gray-700">Active Layers</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="w-3 h-3" />
                  <span className="text-xs text-gray-600">Air Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="w-3 h-3" />
                  <span className="text-xs text-gray-600">Weather</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-3 h-3" />
                  <span className="text-xs text-gray-600">Pollution Sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-3 h-3" />
                  <span className="text-xs text-gray-600">Green Spaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
