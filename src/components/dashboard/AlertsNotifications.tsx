
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info, CheckCircle, Clock } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "High Carbon Emission Detected",
    message: "CO₂ levels have exceeded safe thresholds in downtown area",
    time: "2 minutes ago",
    severity: "High",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    id: 2,
    type: "info",
    title: "Air Quality Improvement",
    message: "Wind patterns showing positive impact on PM2.5 levels",
    time: "15 minutes ago",
    severity: "Medium",
    icon: Info,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    type: "success",
    title: "Energy Target Achieved",
    message: "Community solar project exceeded monthly generation goal",
    time: "1 hour ago",
    severity: "Low",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 4,
    type: "info",
    title: "Scheduled Maintenance",
    message: "Air quality sensors will undergo calibration tonight",
    time: "3 hours ago",
    severity: "Low",
    icon: Clock,
    color: "text-gray-600",
    bgColor: "bg-gray-50"
  }
];

export function AlertsNotifications() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Alerts & Notifications</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div key={alert.id} className={`p-3 rounded-lg border ${alert.bgColor}`}>
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 mt-0.5 ${alert.color}`} />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{alert.title}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          alert.severity === 'High' ? 'bg-red-100 text-red-800' :
                          alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
