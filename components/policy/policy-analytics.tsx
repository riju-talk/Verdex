"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingUp } from "lucide-react"

const downloadData = [
  { month: "Aug", downloads: 1200 },
  { month: "Sep", downloads: 1450 },
  { month: "Oct", downloads: 1680 },
  { month: "Nov", downloads: 1920 },
  { month: "Dec", downloads: 2100 },
  { month: "Jan", downloads: 2350 },
]

const policyTypeData = [
  { name: "Air Quality", value: 35, color: "#10b981" },
  { name: "Waste Management", value: 25, color: "#3b82f6" },
  { name: "Energy Policy", value: 20, color: "#f59e0b" },
  { name: "Carbon Policy", value: 12, color: "#8b5cf6" },
  { name: "Other", value: 8, color: "#6b7280" },
]

export function PolicyAnalytics() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-500" />
          Policy Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">2.3K</div>
            <div className="text-xs text-gray-600">Total Downloads</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-xs text-gray-600">Active Policies</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">89</div>
            <div className="text-xs text-gray-600">Contributors</div>
          </div>
          <div className="text-center p-3 bg-amber-50 rounded-lg">
            <div className="text-2xl font-bold text-amber-600">45</div>
            <div className="text-xs text-gray-600">Regions</div>
          </div>
        </div>

        {/* Download Trends */}
        <div>
          <h4 className="font-medium text-sm mb-3">Monthly Downloads</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={downloadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="downloads" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Policy Types Distribution */}
        <div>
          <h4 className="font-medium text-sm mb-3">Policy Types</h4>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={policyTypeData} cx="50%" cy="50%" innerRadius={20} outerRadius={50} dataKey="value">
                  {policyTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1 mt-3">
            {policyTypeData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: item.color }}></div>
                  <span>{item.name}</span>
                </div>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Policies */}
        <div>
          <h4 className="font-medium text-sm mb-3">Most Downloaded</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="truncate">Renewable Energy Framework</span>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                567
              </Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="truncate">Environmental Justice Plan</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                423
              </Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="truncate">Green Infrastructure Standards</span>
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                334
              </Badge>
            </div>
          </div>
        </div>

        {/* Usage Growth */}
        <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-medium text-sm text-green-900">Growth This Month</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Downloads</span>
              <span className="font-semibold text-green-700">+23%</span>
            </div>
            <Progress value={23} className="h-1" />
            <div className="flex justify-between text-xs">
              <span>New Policies</span>
              <span className="font-semibold text-blue-700">+15%</span>
            </div>
            <Progress value={15} className="h-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
