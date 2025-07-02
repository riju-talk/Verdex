
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { TrendingUp, Leaf, Droplets, Zap, Recycle } from "lucide-react";

const impactData = [
  { name: "Carbon Saved", value: 156, unit: "kg CO₂", goal: 200, percentage: 78, icon: Leaf },
  { name: "Water Conserved", value: 1020, unit: "gallons", goal: 1500, percentage: 68, icon: Droplets },
  { name: "Energy Saved", value: 89, unit: "kWh", goal: 120, percentage: 74, icon: Zap },
  { name: "Waste Diverted", value: 38, unit: "lbs", goal: 50, percentage: 76, icon: Recycle },
];

const trendData = [
  { time: 0, value: 45 },
  { time: 4, value: 48 },
  { time: 8, value: 52 },
  { time: 12, value: 58 },
  { time: 16, value: 62 },
  { time: 20, value: 65 },
  { time: 24, value: 68 },
];

export function EnvironmentalImpact() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-lg font-semibold">Your Environmental Impact</CardTitle>
        </div>
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
          Last 6 Months
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {impactData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-right font-semibold text-gray-900">{item.percentage}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-lg">{item.value} <span className="text-sm font-normal text-gray-600">{item.unit}</span></span>
                <span className="text-gray-500">Goal: {item.goal} {item.unit}</span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          );
        })}

        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Carbon Impact Trend</h4>
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <XAxis dataKey="time" hide />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
