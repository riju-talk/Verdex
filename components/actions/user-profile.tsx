import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { User, Award, TreePine, Recycle, Car } from "lucide-react"

const badges = [
  { name: "Tree Planter", icon: TreePine, color: "text-green-600", bgColor: "bg-green-100" },
  { name: "Recycling Hero", icon: Recycle, color: "text-blue-600", bgColor: "bg-blue-100" },
  { name: "Carbon Saver", icon: Car, color: "text-purple-600", bgColor: "bg-purple-100" },
]

export function UserProfile() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="h-8 w-8 text-white" />
        </div>
        <CardTitle>Sarah Chen</CardTitle>
        <Badge className="bg-green-100 text-green-800 border-green-200">Level 3 EcoWarrior</Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Points and Progress */}
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">1,250</div>
          <div className="text-sm text-gray-600 mb-4">EcoPoints Earned</div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Level 4</span>
              <span>750/1000</span>
            </div>
            <Progress value={75} className="h-3" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-xl font-bold text-green-600">23</div>
            <div className="text-xs text-gray-600">Missions Completed</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">156kg</div>
            <div className="text-xs text-gray-600">CO₂ Saved</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-xl font-bold text-purple-600">8</div>
            <div className="text-xs text-gray-600">Badges Earned</div>
          </div>
          <div className="text-center p-3 bg-amber-50 rounded-lg">
            <div className="text-xl font-bold text-amber-600">42</div>
            <div className="text-xs text-gray-600">Days Streak</div>
          </div>
        </div>

        {/* Recent Badges */}
        <div>
          <h4 className="font-medium text-sm mb-3">Recent Badges</h4>
          <div className="space-y-2">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${badge.bgColor}`}>
                  <badge.icon className={`h-4 w-4 ${badge.color}`} />
                </div>
                <div>
                  <p className="font-medium text-sm">{badge.name}</p>
                  <p className="text-xs text-gray-600">Earned 2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700">
          <Award className="mr-2 h-4 w-4" />
          View All Achievements
        </Button>
      </CardContent>
    </Card>
  )
}
