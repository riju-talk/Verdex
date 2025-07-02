import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, Crown, TrendingUp } from "lucide-react"

const leaderboardData = [
  {
    rank: 1,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 3450,
    level: 6,
    badge: "Climate Champion",
    weeklyGain: 245,
    location: "San Francisco",
  },
  {
    rank: 2,
    name: "Marcus Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 3210,
    level: 5,
    badge: "Carbon Crusher",
    weeklyGain: 189,
    location: "Oakland",
  },
  {
    rank: 3,
    name: "Lisa Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 2980,
    level: 5,
    badge: "Eco Educator",
    weeklyGain: 167,
    location: "Berkeley",
  },
  {
    rank: 4,
    name: "David Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 2750,
    level: 4,
    badge: "Green Guardian",
    weeklyGain: 134,
    location: "San Jose",
  },
  {
    rank: 5,
    name: "Sarah Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 2650,
    level: 4,
    badge: "Waste Warrior",
    weeklyGain: 156,
    location: "Palo Alto",
  },
  {
    rank: 6,
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 1250,
    level: 3,
    badge: "EcoWarrior",
    weeklyGain: 89,
    location: "San Francisco",
    isCurrentUser: true,
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="h-4 w-4 text-yellow-500" />
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />
    case 3:
      return <Award className="h-4 w-4 text-amber-600" />
    default:
      return <span className="text-sm font-bold text-gray-500">#{rank}</span>
  }
}

export function Leaderboard() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Regional Leaderboard
          </CardTitle>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Bay Area
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <div
              key={user.rank}
              className={`text-center p-3 rounded-lg ${
                index === 0
                  ? "bg-yellow-50 border-2 border-yellow-200"
                  : index === 1
                    ? "bg-gray-50 border-2 border-gray-200"
                    : "bg-amber-50 border-2 border-amber-200"
              }`}
            >
              <div className="flex justify-center mb-2">{getRankIcon(user.rank)}</div>
              <Avatar className="h-8 w-8 mx-auto mb-2">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="text-xs">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-xs font-medium truncate">{user.name}</div>
              <div className="text-xs text-gray-600">{user.points.toLocaleString()}</div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="space-y-2">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                user.isCurrentUser ? "bg-green-50 border-2 border-green-200" : "hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-center justify-center w-8">{getRankIcon(user.rank)}</div>

              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="text-xs">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`font-medium text-sm truncate ${user.isCurrentUser ? "text-green-900" : ""}`}>
                    {user.name}
                  </span>
                  {user.isCurrentUser && (
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">You</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Level {user.level}</span>
                  <span>•</span>
                  <span>{user.location}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-sm">{user.points.toLocaleString()}</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>+{user.weeklyGain}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competition Info */}
        <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <span className="font-medium text-sm text-yellow-900">Monthly Challenge</span>
          </div>
          <p className="text-xs text-yellow-700 mb-2">
            Top 10 eco-warriors win prizes! Current prize pool: $500 in eco-friendly products.
          </p>
          <div className="text-xs text-yellow-600">
            <strong>6 days remaining</strong> in this month's competition
          </div>
        </div>

        {/* View Full Leaderboard */}
        <Button variant="outline" className="w-full">
          View Full Regional Leaderboard
        </Button>
      </CardContent>
    </Card>
  )
}
