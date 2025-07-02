import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, Thermometer, Wind, Droplets, AlertTriangle, TrendingUp, Eye } from "lucide-react"

export function Dashboard() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-200 bg-emerald-50 text-emerald-700">
            🛰️ Live Environment Dashboard
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-Time Environmental Monitoring
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Live data from NASA/NOAA APIs, air quality sensors, and public repositories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  Global Environmental Map
                </CardTitle>
                <CardDescription>Interactive map showing real-time environmental data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium">Interactive Map Integration</p>
                    <p className="text-sm text-gray-400">Mapbox/Google Maps with environmental layers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Metrics */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Current Location</CardTitle>
                <CardDescription>San Francisco, CA</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Air Quality</span>
                  </div>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Moderate
                  </Badge>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-gray-500">AQI: 65 (PM2.5: 18 μg/m³)</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Temperature</span>
                    </div>
                    <span className="font-semibold">22°C</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Humidity</span>
                    </div>
                    <span className="font-semibold">68%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm">UV Index</span>
                    </div>
                    <span className="font-semibold">6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-l-4 border-l-orange-400">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Air Quality Alert</p>
                    <p className="text-xs text-gray-600 mt-1">
                      PM2.5 levels elevated due to wildfire smoke. Consider limiting outdoor activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Eye className="mr-2 h-4 w-4" />
            <a href="/dashboard">View Full Dashboard</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
