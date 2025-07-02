import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, MapPin, Clock, Users, Zap } from "lucide-react"

const activeMissions = [
  {
    id: 1,
    title: "Recycle 15 items this week",
    description: "Find nearby recycling centers and track your recycling impact",
    progress: 73,
    target: 15,
    current: 11,
    timeLeft: "3 days",
    reward: 75,
    difficulty: "Easy",
    category: "Waste Reduction",
    participants: 234,
    location: "San Francisco Bay Area",
  },
  {
    id: 2,
    title: "Join a community cleanup event",
    description: "Participate in local environmental cleanup initiatives",
    progress: 0,
    target: 1,
    current: 0,
    timeLeft: "6 days",
    reward: 150,
    difficulty: "Medium",
    category: "Community Action",
    participants: 89,
    location: "Within 5 miles",
  },
  {
    id: 3,
    title: "Use public transport for 5 trips",
    description: "Reduce carbon footprint by choosing sustainable transportation",
    progress: 40,
    target: 5,
    current: 2,
    timeLeft: "4 days",
    reward: 100,
    difficulty: "Easy",
    category: "Transportation",
    participants: 156,
    location: "San Francisco",
  },
  {
    id: 4,
    title: "Plant native species in your garden",
    description: "Support local biodiversity by planting native plants",
    progress: 100,
    target: 3,
    current: 3,
    timeLeft: "Completed",
    reward: 200,
    difficulty: "Hard",
    category: "Biodiversity",
    participants: 67,
    location: "Your neighborhood",
  },
]

export function ActiveMissions() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Active Climate Missions
          </CardTitle>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            4 Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {activeMissions.map((mission) => (
          <div key={mission.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-sm">{mission.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      mission.difficulty === "Easy"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : mission.difficulty === "Medium"
                          ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                          : "bg-red-50 text-red-700 border-red-200"
                    }
                  >
                    {mission.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {mission.category}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{mission.description}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{mission.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{mission.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{mission.timeLeft}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      Progress: {mission.current}/{mission.target}
                    </span>
                    <span className="font-semibold">{mission.progress}%</span>
                  </div>
                  <Progress value={mission.progress} className="h-2" />
                </div>
              </div>

              <div className="ml-4 text-right">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-3">
                  <Zap className="mr-1 h-3 w-3" />
                  {mission.reward} pts
                </Badge>
                <div>
                  {mission.progress === 100 ? (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Claim Reward
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Mission Categories */}
        <div className="pt-4 border-t">
          <h4 className="font-medium text-sm mb-3">Explore More Missions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" size="sm" className="justify-start">
              🌱 Biodiversity
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              ♻️ Waste Reduction
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              🚌 Transportation
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              💡 Energy Saving
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
