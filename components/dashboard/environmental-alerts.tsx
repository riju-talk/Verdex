import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Info, CheckCircle, X } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Air Quality Alert",
    message: "PM2.5 levels may increase due to wildfire smoke from nearby areas.",
    time: "2 hours ago",
    severity: "Medium",
    icon: AlertTriangle,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 2,
    type: "info",
    title: "Weather Update",
    message: "Strong winds expected this afternoon, which may help improve air quality.",
    time: "4 hours ago",
    severity: "Low",
    icon: Info,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 3,
    type: "success",
    title: "Green Space Event",
    message: "Community tree planting event scheduled for this weekend in Golden Gate Park.",
    time: "1 day ago",
    severity: "Info",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
]

export function EnvironmentalAlerts() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Environmental Alerts
          </CardTitle>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            3 Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded-lg border ${alert.bgColor} ${alert.borderColor}`}>
              <div className="flex items-start gap-3">
                <alert.icon className={`h-5 w-5 ${alert.color} mt-0.5`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{alert.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {alert.severity}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
