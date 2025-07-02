import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Sun, Wind, Droplets, Eye, Gauge } from "lucide-react"

const weatherData = [
  { label: "Feels Like", value: "24°C", icon: Sun },
  { label: "Wind Speed", value: "12 km/h", icon: Wind },
  { label: "Humidity", value: "68%", icon: Droplets },
  { label: "Visibility", value: "10 km", icon: Eye },
  { label: "Pressure", value: "1013 hPa", icon: Gauge },
  { label: "UV Index", value: "6 (High)", icon: Sun },
]

export function WeatherWidget() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-blue-500" />
          Weather Conditions
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">☀️ Partly Cloudy</Badge>
          <span className="text-sm text-gray-600">22°C</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {weatherData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-medium text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-amber-600" />
            <div>
              <p className="text-sm font-medium text-amber-900">UV Alert</p>
              <p className="text-xs text-amber-700">High UV levels. Use sunscreen and seek shade during midday.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
