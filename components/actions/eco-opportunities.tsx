import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, ExternalLink, Navigation } from "lucide-react"

const opportunities = [
  {
    title: "Golden Gate Park Tree Planting",
    type: "Community Event",
    date: "Jan 20, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "Golden Gate Park, SF",
    distance: "0.8 miles",
    participants: 45,
    maxParticipants: 60,
    organizer: "SF Parks & Recreation",
    description: "Join us for a community tree planting event to restore native vegetation",
    impact: "Plant 50+ native trees",
    difficulty: "Easy",
  },
  {
    title: "Ocean Beach Cleanup",
    type: "Cleanup Event",
    date: "Jan 22, 2024",
    time: "8:00 AM - 11:00 AM",
    location: "Ocean Beach, SF",
    distance: "2.1 miles",
    participants: 78,
    maxParticipants: 100,
    organizer: "Surfrider Foundation",
    description: "Help remove plastic waste and debris from our beautiful coastline",
    impact: "Clean 2 miles of beach",
    difficulty: "Easy",
  },
  {
    title: "Urban Garden Workshop",
    type: "Educational",
    date: "Jan 25, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Mission Community Garden",
    distance: "1.5 miles",
    participants: 23,
    maxParticipants: 30,
    organizer: "Green City Growers",
    description: "Learn sustainable gardening techniques and start your own urban garden",
    impact: "Learn to grow food sustainably",
    difficulty: "Medium",
  },
  {
    title: "Bike to Work Challenge",
    type: "Challenge",
    date: "Jan 15 - Feb 15",
    time: "All day",
    location: "Citywide",
    distance: "Everywhere",
    participants: 234,
    maxParticipants: 500,
    organizer: "SF Bicycle Coalition",
    description: "30-day challenge to commute by bike and reduce carbon emissions",
    impact: "Reduce CO₂ by 500kg collectively",
    difficulty: "Medium",
  },
  {
    title: "Solar Panel Installation Training",
    type: "Training",
    date: "Jan 28, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "SF Community College",
    distance: "3.2 miles",
    participants: 12,
    maxParticipants: 20,
    organizer: "Solar SF Initiative",
    description: "Hands-on training for residential solar panel installation",
    impact: "Learn renewable energy skills",
    difficulty: "Hard",
  },
]

export function EcoOpportunities() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            Nearby Eco Opportunities
          </CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            San Francisco Area
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-sm">{opportunity.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {opportunity.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      opportunity.difficulty === "Easy"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : opportunity.difficulty === "Medium"
                          ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                          : "bg-red-50 text-red-700 border-red-200"
                    }
                  >
                    {opportunity.difficulty}
                  </Badge>
                </div>

                <p className="text-sm text-gray-600 mb-3">{opportunity.description}</p>

                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{opportunity.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{opportunity.distance} away</span>
                  </div>
                  <div>
                    <span>{opportunity.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>
                      {opportunity.participants}/{opportunity.maxParticipants}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">By {opportunity.organizer}</p>
                    <p className="text-xs font-medium text-green-600">💚 {opportunity.impact}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Navigation className="mr-2 h-3 w-3" />
                      Navigate
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Join Event
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Quick Filters */}
        <div className="pt-4 border-t">
          <h4 className="font-medium text-sm mb-3">Filter Opportunities</h4>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="cursor-pointer">
              All Types
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              This Week
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Within 2 miles
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Easy Level
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">
              Available Spots
            </Badge>
          </div>
        </div>

        {/* Create Event CTA */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm text-blue-900 mb-1">Organize Your Own Event</h4>
              <p className="text-xs text-blue-700">
                Create environmental initiatives in your community and invite others to join
              </p>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <ExternalLink className="mr-2 h-3 w-3" />
              Create Event
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
