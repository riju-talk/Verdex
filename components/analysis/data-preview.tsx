"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Download, Filter, MoreHorizontal } from "lucide-react"

const sampleData = [
  { date: "2024-01-15", location: "Downtown SF", pm25: 18, pm10: 32, no2: 45, o3: 89, aqi: 65 },
  { date: "2024-01-15", location: "Mission Bay", pm25: 22, pm10: 38, no2: 52, o3: 95, aqi: 72 },
  { date: "2024-01-15", location: "Richmond", pm25: 15, pm10: 28, no2: 38, o3: 78, aqi: 58 },
  { date: "2024-01-15", location: "SOMA", pm25: 25, pm10: 45, no2: 58, o3: 102, aqi: 78 },
  { date: "2024-01-15", location: "Castro", pm25: 19, pm10: 35, no2: 42, o3: 85, aqi: 68 },
]

export function DataPreview() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-500" />
            Data Preview
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              air_quality_2024.csv
            </Badge>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Data Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-xs text-gray-600">Total Rows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-xs text-gray-600">Columns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">98.5%</div>
              <div className="text-xs text-gray-600">Data Quality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">15</div>
              <div className="text-xs text-gray-600">Missing Values</div>
            </div>
          </div>

          {/* Data Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>PM2.5</TableHead>
                  <TableHead>PM10</TableHead>
                  <TableHead>NO2</TableHead>
                  <TableHead>O3</TableHead>
                  <TableHead>AQI</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.date}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.pm25}</TableCell>
                    <TableCell>{row.pm10}</TableCell>
                    <TableCell>{row.no2}</TableCell>
                    <TableCell>{row.o3}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          row.aqi <= 50
                            ? "bg-green-50 text-green-700"
                            : row.aqi <= 100
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                        }
                      >
                        {row.aqi}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center">
            <Button variant="outline">Load More Rows</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
