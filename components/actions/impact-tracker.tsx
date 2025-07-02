"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Leaf, Droplets, Zap, Recycle, TrendingUp } from "lucide-react"

const impactData = [
  { month: "Aug", carbon: 12, water: 450, waste: 8, energy: 25 },
  { month: "Sep", carbon: 18, water: 520, waste: 12, energy: 32 },
  { month: "Oct", carbon: 25, water: 680, waste: 18, energy: 45 },
  { month: "Nov", carbon: 34, water: 750, waste: 25, energy: 58 },
  { month: "Dec", carbon: 45, water: 890, waste: 32, energy: 72 },
  { month: "Jan", carbon: 56, water: 1020, waste: 38, energy: 89 },
]

const impactMetrics = [
  {
    title: "Carbon Saved",
    value: "156",
    unit: "kg CO₂",
    target: 200,
    progress: 78,
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Water Conserved",
    value: "1,020",
    unit: "gallons",
    target: 1500,
    progress: 68,
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Energy Saved",
    value: "89",
    unit: "kWh",
    target: 120,
    progress: 74,
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Waste Diverted",
    value: "38",
    unit: "lbs",
    target: 50,
    progress: 76,
    icon: Recycle,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function ImpactTracker() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-600" />
          Your Environmental Impact
        </CardTitle>
        <Badge variant="outline" className="w-fit bg-emerald-50 text-emerald-700 border-emerald-200">
          Last 6 Months
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Impact Metrics */}
        <div className="space-y-4">
          {impactMetrics.map((metric, index) => (
            <div key={index} className={`p-3 rounded-lg ${metric.bgColor}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="font-medium text-sm">{metric.title}</span>
                </div>
                <Badge variant="outline" className="bg-white">
                  {metric.progress}%
                </Badge>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-gray-900">
                  {metric.value} <span className="text-sm font-normal text-gray-600">{metric.unit}</span>
                </span>
                <span className="text-xs text-gray-600">
                  Goal: {metric.target} {metric.unit}
                </span>
              </div>

              <Progress value={metric.progress} className="h-2" />
            </div>
          ))}
        </div>

        {/* Impact Trend Chart */}
        <div>
          <h4 className="font-medium text-sm mb-3">Carbon Impact Trend</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="carbon" stroke="#10b981" strokeWidth={2} name="Carbon Saved (kg)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Impact Comparison */}
        <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-medium text-sm text-green-900">This Month's Impact</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-gray-600">Equivalent to:</span>
              <div className="font-medium text-green-700">🌳 2.3 trees planted</div>
            </div>
            <div>
              <span className="text-gray-600">Or avoiding:</span>
              <div className="font-medium text-blue-700">🚗 340 miles driven</div>
            </div>
          </div>
        </div>

        {/* Personal Goals */}
        <div>
          <h4 className="font-medium text-sm mb-3">Monthly Goals</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Reduce carbon footprint by 200kg</span>
              <span className="font-semibold text-green-600">78%</span>
            </div>
            <Progress value={78} className="h-1" />

            <div className="flex items-center justify-between text-xs">
              <span>Complete 5 eco-missions</span>
              <span className="font-semibold text-blue-600">80%</span>
            </div>
            <Progress value={80} className="h-1" />

            <div className="flex items-center justify-between text-xs">
              <span>Engage 3 community members</span>
              <span className="font-semibold text-purple-600">67%</span>
            </div>
            <Progress value={67} className="h-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
