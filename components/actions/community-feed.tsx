import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Users, Camera, MapPin } from "lucide-react"

const feedPosts = [
  {
    id: 1,
    user: {
      name: "Maria Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "EcoWarrior Level 4",
      location: "Mission District, SF",
    },
    timestamp: "2 hours ago",
    content:
      "Just completed the Ocean Beach cleanup! Removed 15 lbs of plastic waste with an amazing group of volunteers. The beach looks so much better! 🌊♻️",
    image: "/placeholder.svg?height=200&width=400",
    mission: "Ocean Beach Cleanup",
    likes: 23,
    comments: 8,
    shares: 4,
    impact: "15 lbs plastic removed",
  },
  {
    id: 2,
    user: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "EcoWarrior Level 2",
      location: "SOMA, SF",
    },
    timestamp: "5 hours ago",
    content:
      "Week 3 of biking to work instead of driving! Already saved 45kg of CO₂ and feeling great. Who wants to join the challenge? 🚴‍♂️💚",
    mission: "Bike to Work Challenge",
    likes: 31,
    comments: 12,
    shares: 7,
    impact: "45kg CO₂ saved",
  },
  {
    id: 3,
    user: {
      name: "Sarah Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "EcoWarrior Level 5",
      location: "Richmond, SF",
    },
    timestamp: "1 day ago",
    content:
      "Planted 12 native California poppies in my front yard today! They'll provide food for local pollinators and add beautiful color to the neighborhood. 🌺🐝",
    image: "/placeholder.svg?height=200&width=400",
    mission: "Native Plant Garden",
    likes: 45,
    comments: 15,
    shares: 9,
    impact: "12 native plants added",
  },
  {
    id: 4,
    user: {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      level: "EcoWarrior Level 3",
      location: "Castro, SF",
    },
    timestamp: "2 days ago",
    content:
      "Organized a neighborhood composting workshop! 8 families learned how to turn food scraps into garden gold. Next workshop is this Saturday - DM me for details! 🌱",
    mission: "Community Education",
    likes: 28,
    comments: 6,
    shares: 12,
    impact: "8 families educated",
  },
]

export function CommunityFeed() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" />
            Community Feed
          </CardTitle>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            San Francisco Community
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {feedPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            {/* User Header */}
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                <AvatarFallback>
                  {post.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{post.user.name}</span>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                    {post.user.level}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin className="h-3 w-3" />
                  <span>{post.user.location}</span>
                  <span>•</span>
                  <span>{post.timestamp}</span>
                </div>
              </div>
            </div>

            {/* Mission Badge */}
            {post.mission && (
              <Badge variant="outline" className="mb-3 bg-blue-50 text-blue-700 border-blue-200">
                🎯 {post.mission}
              </Badge>
            )}

            {/* Content */}
            <p className="text-sm text-gray-700 mb-3">{post.content}</p>

            {/* Image */}
            {post.image && (
              <div className="mb-3">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post content"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}

            {/* Impact Badge */}
            <div className="mb-3">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">💚 {post.impact}</Badge>
            </div>

            {/* Engagement */}
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                  <Heart className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-500">
                  <Share2 className="mr-2 h-4 w-4" />
                  {post.shares}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">Load More Posts</Button>
        </div>

        {/* Share Your Impact CTA */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm text-green-900 mb-1">Share Your Impact</h4>
              <p className="text-xs text-green-700">
                Inspire others by sharing your environmental actions and achievements
              </p>
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Camera className="mr-2 h-3 w-3" />
              Create Post
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
