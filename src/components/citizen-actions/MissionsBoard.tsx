
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Clock, Users, Leaf, Droplets, Zap, Recycle, TreePine } from "lucide-react";

const missions = [
  {
    id: 1,
    title: "Water Conservation Challenge",
    description: "Reduce water usage by 20% this week",
    difficulty: "Easy",
    points: 150,
    timeLeft: "3 days left",
    progress: 65,
    category: "Water",
    icon: Droplets,
    participants: 234,
    reward: "Water Saver Badge",
    status: "active"
  },
  {
    id: 2,
    title: "Zero Waste Weekend",
    description: "Complete a weekend without producing any waste",
    difficulty: "Hard",
    points: 500,
    timeLeft: "5 days left",
    progress: 0,
    category: "Waste",
    icon: Recycle,
    participants: 89,
    reward: "Waste Warrior Title + Premium Features",
    status: "available"
  },
  {
    id: 3,
    title: "Plant a Tree Initiative",
    description: "Plant 5 trees in your community this month",
    difficulty: "Medium",
    points: 300,
    timeLeft: "12 days left",
    progress: 40,
    category: "Nature",
    icon: TreePine,
    participants: 156,
    reward: "Green Thumb Certificate",
    status: "active"
  },
  {
    id: 4,
    title: "Energy Efficiency Audit",
    description: "Complete a home energy audit and implement 3 improvements",
    difficulty: "Medium",
    points: 250,
    timeLeft: "1 week left",
    progress: 85,
    category: "Energy",
    icon: Zap,
    participants: 67,
    reward: "Energy Expert Badge",
    status: "active"
  },
  {
    id: 5,
    title: "Community Clean-up",
    description: "Organize or participate in a neighborhood cleanup event",
    difficulty: "Easy",
    points: 200,
    timeLeft: "Completed",
    progress: 100,
    category: "Community",
    icon: Users,
    participants: 45,
    reward: "Community Leader Badge",
    status: "completed"
  }
];

export function MissionsBoard() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "border-blue-200 bg-blue-50";
      case "completed": return "border-green-200 bg-green-50";
      case "available": return "border-gray-200 bg-white";
      default: return "border-gray-200 bg-white";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-lg font-semibold">Eco Missions</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          View All Missions
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {missions.map((mission) => {
          const Icon = mission.icon;
          return (
            <div key={mission.id} className={`p-4 rounded-lg border-2 ${getStatusColor(mission.status)}`}>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-emerald-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">{mission.title}</h3>
                      <p className="text-sm text-gray-600">{mission.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge className={getDifficultyColor(mission.difficulty)}>
                      {mission.difficulty}
                    </Badge>
                    <span className="text-sm font-semibold text-emerald-600">{mission.points} pts</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{mission.timeLeft}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{mission.participants} participants</span>
                  </div>
                </div>

                {mission.status !== "available" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{mission.progress}%</span>
                    </div>
                    <Progress value={mission.progress} className="h-2" />
                  </div>
                )}

                <div className="bg-yellow-50 p-2 rounded text-sm">
                  <span className="font-medium text-yellow-800">🏆 Reward: </span>
                  <span className="text-yellow-700">{mission.reward}</span>
                </div>

                <div className="flex space-x-2">
                  {mission.status === "available" && (
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Start Mission
                    </Button>
                  )}
                  {mission.status === "active" && (
                    <>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Update Progress
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </>
                  )}
                  {mission.status === "completed" && (
                    <Button size="sm" variant="outline" disabled>
                      ✓ Completed
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
