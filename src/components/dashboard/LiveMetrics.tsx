
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Thermometer, Droplets, Wind, Zap, TreePine, Factory } from "lucide-react";

const metrics = [
  {
    title: "Air Quality Index",
    value: 78,
    unit: "AQI",
    status: "Moderate",
    statusColor: "bg-yellow-100 text-yellow-800",
    icon: Wind,
    trend: "+2%",
    description: "PM2.5: 15.3 μg/m³"
  },
  {
    title: "Temperature",
    value: 24.5,
    unit: "°C",
    status: "Normal",
    statusColor: "bg-green-100 text-green-800",
    icon: Thermometer,
    trend: "+1.2°C",
    description: "Heat Index: 26°C"
  },
  {
    title: "Humidity",
    value: 65,
    unit: "%",
    status: "Optimal",
    statusColor: "bg-blue-100 text-blue-800",
    icon: Droplets,
    trend: "-5%",
    description: "Dew Point: 18°C"
  },
  {
    title: "Carbon Emissions",
    value: 425,
    unit: "ppm CO₂",
    status: "High",
    statusColor: "bg-red-100 text-red-800",
    icon: Factory,
    trend: "+0.8%",
    description: "Above safe levels"
  },
  {
    title: "Energy Usage",
    value: 2.4,
    unit: "kWh",
    status: "Low",
    statusColor: "bg-green-100 text-green-800",
    icon: Zap,
    trend: "-12%",
    description: "Solar: 40% contribution"
  },
  {
    title: "Green Coverage",
    value: 82,
    unit: "%",
    status: "Excellent",
    statusColor: "bg-emerald-100 text-emerald-800",
    icon: TreePine,
    trend: "+3%",
    description: "Tree canopy coverage"
  }
];

export function LiveMetrics() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Live Environmental Metrics</CardTitle>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Real-time
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{metric.title}</span>
                  </div>
                  <Badge className={metric.statusColor}>
                    {metric.status}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                    <span className="text-sm text-gray-500">{metric.unit}</span>
                    <span className="text-xs text-emerald-600 font-medium">{metric.trend}</span>
                  </div>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>
                
                <Progress 
                  value={metric.value > 100 ? 100 : metric.value} 
                  className="h-1" 
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
