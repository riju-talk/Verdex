import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wind, TrendingUp, AlertCircle } from "lucide-react"

const pollutants = [
  { name: "PM2.5", value: 18, unit: "μg/m³", limit: 25, status: "Good" },
  { name: "PM10", value: 32, unit: "μg/m³", limit: 50, status: "Good" },
  { name: "NO2", value: 45, unit: "μg/m³", limit: 200, status: "Good" },
  { name: "O3", value: 89, unit: "μg/m³", limit: 120, status: "Moderate" },
  { name: "CO", value: 1.2, unit: "mg/m³", limit: 10, status: "Good" },
  { name: "SO2", value: 8, unit: "μg/m³", limit: 125, status: "Good" },
]

export function AirQualityMonitor() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-blue-500" />
          Air Quality Monitor
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">AQI: 65 - Moderate</Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            <TrendingUp className="mr-1 h-3 w-3" />
            Improving
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pollutants.map((pollutant, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{pollutant.name}</span>
                  <span className="text-xs text-gray-500">
                    {pollutant.value} {pollutant.unit}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className={
                    pollutant.status === "Good"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }
                >
                  {pollutant.status}
                </Badge>
              </div>
              <Progress value={(pollutant.value / pollutant.limit) * 100} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>
                  Limit: {pollutant.limit} {pollutant.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">Health Recommendation</p>
              <p className="text-xs text-blue-700 mt-1">
                Air quality is acceptable for most people. Sensitive individuals should consider limiting prolonged
                outdoor exertion.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
