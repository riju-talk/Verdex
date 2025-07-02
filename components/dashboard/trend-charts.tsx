"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, Download } from "lucide-react"

const airQualityData = [
  { time: "00:00", aqi: 45, pm25: 12, pm10: 20 },
  { time: "04:00", aqi: 52, pm25: 15, pm10: 25 },
  { time: "08:00", aqi: 68, pm25: 22, pm10: 35 },
  { time: "12:00", aqi: 75, pm25: 28, pm10: 42 },
  { time: "16:00", aqi: 65, pm25: 20, pm10: 38 },
  { time: "20:00", aqi: 58, pm25: 18, pm10: 30 },
  { time: "24:00", aqi: 48, pm25: 14, pm10: 22 },
]

const temperatureData = [
  { time: "00:00", temp: 18, humidity: 75 },
  { time: "04:00", temp: 16, humidity: 80 },
  { time: "08:00", temp: 19, humidity: 70 },
  { time: "12:00", temp: 24, humidity: 60 },
  { time: "16:00", temp: 26, humidity: 55 },
  { time: "20:00", temp: 23, humidity: 65 },
  { time: "24:00", temp: 20, humidity: 72 },
]

export function TrendCharts() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Environmental Trends
          </CardTitle>
          <div className="flex items-center gap-2">
            <Select defaultValue="24h">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24h</SelectItem>
                <SelectItem value="7d">7 days</SelectItem>
                <SelectItem value="30d">30 days</SelectItem>
                <SelectItem value="1y">1 year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Air Quality Chart */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Air Quality Index (24h)</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Current: 65 AQI</Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  Improving
                </Badge>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={airQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="aqi" stroke="#10b981" fill="#10b981" fillOpacity={0.1} name="AQI" />
                  <Line type="monotone" dataKey="pm25" stroke="#f59e0b" strokeWidth={2} name="PM2.5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Temperature Chart */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Temperature & Humidity (24h)</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Current: 22°C</Badge>
                <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">Humidity: 68%</Badge>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2} name="Temperature (°C)" />
                  <Line type="monotone" dataKey="humidity" stroke="#3b82f6" strokeWidth={2} name="Humidity (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
