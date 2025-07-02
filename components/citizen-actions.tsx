import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, Award, Recycle, Car, TreePine, Users, Target, Star } from "lucide-react"

const missions = [
  {
    title: "Recycle 10 items this week",
    description: "Find nearby recycling centers and track your impact",
    progress: 70,
    reward: "50 EcoPoints",
    icon: Recycle,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Join a carpool group",
    description: "Reduce carbon footprint by sharing rides",
    progress: 0,
    reward: "100 EcoPoints",
    icon: Car,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Plant a tree in your area",
    description: "Participate in local reforestation efforts",
    progress: 100,
    reward: "200 EcoPoints",
    icon: TreePine,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export function CitizenActions() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-green-200 bg-green-50 text-green-700">
            📲 Citizen Eco Actions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gamified Climate Action</h2>
          <p className="mt-4 text-lg text-gray-600">
            Location-based missions, rewards system, and personalized eco-habits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile & Stats */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>EcoWarrior Level 3</CardTitle>
                <CardDescription>Sarah Chen • San Francisco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1,250</div>
                  <div className="text-sm text-gray-600">EcoPoints Earned</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level 4</span>
                    <span>750/1000</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="font-semibold text-green-600">23</div>
                    <div className="text-xs text-gray-600">Missions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">156</div>
                    <div className="text-xs text-gray-600">CO₂ Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">8</div>
                    <div className="text-xs text-gray-600">Badges</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Recent Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Tree Planter</p>
                      <p className="text-xs text-gray-600">Planted 5 trees</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Recycle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Recycling Hero</p>
                      <p className="text-xs text-gray-600">100 items recycled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Missions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  Active Climate Missions
                </CardTitle>
                <CardDescription>Complete missions to earn EcoPoints and make real impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {missions.map((mission, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${mission.bgColor}`}>
                        <mission.icon className={`h-5 w-5 ${mission.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{mission.title}</h4>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            {mission.reward}
                          </Badge>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">{mission.description}</p>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{mission.progress}%</span>
                          </div>
                          <Progress value={mission.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  Nearby Eco Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Recycling Center</p>
                      <p className="text-xs text-gray-600">0.3 miles away • Open until 6 PM</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Navigate
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Community Garden</p>
                      <p className="text-xs text-gray-600">0.7 miles away • Volunteer event today</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Carpool Group</p>
                      <p className="text-xs text-gray-600">Downtown route • 3 spots available</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
