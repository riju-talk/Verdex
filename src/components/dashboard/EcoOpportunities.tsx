
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users, Navigation } from "lucide-react";

const opportunities = [
  {
    title: "Golden Gate Park Tree Planting",
    type: "Community Event",
    difficulty: "Easy",
    description: "Join us for a community tree planting event to restore native vegetation",
    date: "Jan 20, 2024",
    time: "9:00 AM - 12:00 PM",
    distance: "0.8 miles away",
    participants: "45/60",
    organizer: "SF Parks & Recreation",
    impact: "Plant 50+ native trees",
  },
  {
    title: "Ocean Beach Cleanup",
    type: "Cleanup Event",
    difficulty: "Easy", 
    description: "Help remove plastic waste and debris from our beautiful coastline",
    date: "Jan 22, 2024",
    time: "8:00 AM - 11:00 AM",
    distance: "2.1 miles away",
    participants: "78/100",
    organizer: "Surfrider Foundation",
    impact: "Clean 2 miles of beach",
  },
  {
    title: "Urban Garden Workshop",
    type: "Educational",
    difficulty: "Medium",
    description: "Learn sustainable gardening techniques and start your own urban garden",
    date: "Jan 25, 2024", 
    time: "2:00 PM - 5:00 PM",
    distance: "1.5 miles away",
    participants: "23/30",
    organizer: "Green City Initiative",
    impact: "Learn sustainable practices",
  },
];

export function EcoOpportunities() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-lg font-semibold">Nearby Eco Opportunities</CardTitle>
        </div>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          San Francisco Area
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium text-gray-900">{opportunity.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {opportunity.type}
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      opportunity.difficulty === "Easy" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {opportunity.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{opportunity.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{opportunity.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{opportunity.distance}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{opportunity.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{opportunity.participants}</span>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-xs text-gray-600">By {opportunity.organizer}</p>
                  <p className="text-xs text-emerald-600 font-medium">✓ {opportunity.impact}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Navigation className="w-3 h-3 mr-1" />
                Navigate
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Join Event
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
