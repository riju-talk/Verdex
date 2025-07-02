import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, ExternalLink, RefreshCw, CheckCircle, AlertCircle } from "lucide-react"

const dataSources = [
  {
    name: "NASA EarthData",
    type: "Satellite Data",
    status: "active",
    lastUpdate: "2 min ago",
    reliability: "99.9%",
    description: "Global environmental monitoring from space",
  },
  {
    name: "NOAA Weather",
    type: "Weather Data",
    status: "active",
    lastUpdate: "1 min ago",
    reliability: "99.8%",
    description: "Real-time weather and climate information",
  },
  {
    name: "AQICN Network",
    type: "Air Quality",
    status: "active",
    lastUpdate: "30 sec ago",
    reliability: "98.5%",
    description: "Global air quality monitoring stations",
  },
  {
    name: "OpenWeatherMap",
    type: "Weather API",
    status: "active",
    lastUpdate: "1 min ago",
    reliability: "99.2%",
    description: "Comprehensive weather data service",
  },
  {
    name: "EPA Sensors",
    type: "Local Monitoring",
    status: "maintenance",
    lastUpdate: "15 min ago",
    reliability: "97.8%",
    description: "Environmental Protection Agency sensors",
  },
  {
    name: "Copernicus Programme",
    type: "EU Satellite Data",
    status: "active",
    lastUpdate: "5 min ago",
    reliability: "99.1%",
    description: "European Earth observation program",
  },
]

export function DataSources() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-emerald-600" />
            Data Sources
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-800 border-green-200">5/6 Active</Badge>
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataSources.map((source, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {source.status === "active" ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                  )}
                  <span className="font-medium text-sm">{source.name}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {source.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      source.status === "active"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-orange-50 text-orange-700 border-orange-200"
                    }
                  >
                    {source.status}
                  </Badge>
                </div>

                <p className="text-xs text-gray-600">{source.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Updated: {source.lastUpdate}</span>
                  <span>Uptime: {source.reliability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm text-gray-900">Data Integration Status</h4>
              <p className="text-xs text-gray-600 mt-1">
                All environmental data is aggregated and processed in real-time from multiple trusted sources.
              </p>
            </div>
            <Button variant="outline" size="sm">
              View API Docs
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
