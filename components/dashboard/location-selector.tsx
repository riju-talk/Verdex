import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Navigation, Star } from "lucide-react"

const savedLocations = [
  { name: "San Francisco, CA", coordinates: "37.7749, -122.4194", favorite: true },
  { name: "New York, NY", coordinates: "40.7128, -74.0060", favorite: false },
  { name: "London, UK", coordinates: "51.5074, -0.1278", favorite: true },
  { name: "Tokyo, Japan", coordinates: "35.6762, 139.6503", favorite: false },
]

export function LocationSelector() {
  return (
    <Card className="border-0 shadow-lg h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-emerald-600" />
          Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search location..." className="pl-10" />
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Navigation className="mr-2 h-4 w-4" />
          Use Current Location
        </Button>

        <div className="space-y-2">
          <h4 className="font-medium text-sm text-gray-700">Saved Locations</h4>
          {savedLocations.map((location, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{location.name}</span>
                  {location.favorite && <Star className="h-3 w-3 text-yellow-500 fill-current" />}
                </div>
                <span className="text-xs text-gray-500">{location.coordinates}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="text-center">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              📍 San Francisco, CA
            </Badge>
            <p className="text-xs text-gray-500 mt-2">Currently viewing</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
