import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wind, Thermometer, Droplets, Sun, Leaf, AlertTriangle } from "lucide-react"

const environmentalMetrics = [
  {
    title: "Air Quality Index",
    value: "65",
    status: "Moderate",
    statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    progress: 65,
    icon: Wind,
    iconColor: "text-blue-500",
    details: "PM2.5: 18 μg/m³",
  },
  {
    title: "Temperature",
    value: "22°C",
    status: "Comfortable",
    statusColor: "bg-green-100 text-green-800 border-green-200",
    progress: 75,
    icon: Thermometer,
    iconColor: "text-red-500",
    details: "Feels like 24°C",
  },
  {
    title: "Humidity",
    value: "68%",
    status: "Normal",
    statusColor: "bg-blue-100 text-blue-800 border-blue-200",
    progress: 68,
    icon: Droplets,
    iconColor: "text-blue-500",
    details: "Dew point: 16°C",
  },
  {
    title: "UV Index",
    value: "6",
    status: "High",
    statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    progress: 60,
    icon: Sun,
    iconColor: "text-yellow-500",
    details: "Protection needed",
  },
  {
    title: "Green Coverage",
    value: "34%",
    status: "Good",
    statusColor: "bg-green-100 text-green-800 border-green-200",
    progress: 34,
    icon: Leaf,
    iconColor: "text-green-500",
    details: "Above city average",
  },
  {
    title: "Noise Level",
    value: "58 dB",
    status: "Moderate",
    statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    progress: 58,
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    details: "Traffic noise",
  },
]

export function EnvironmentOverview() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-emerald-600" />
          Environmental Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {environmentalMetrics.map((metric, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.iconColor}`} />
                  <span className="font-medium text-sm">{metric.title}</span>
                </div>
                <Badge variant="outline" className={metric.statusColor}>
                  {metric.status}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-xs text-gray-500">{metric.details}</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
