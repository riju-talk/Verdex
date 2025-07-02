
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Star, TrendingUp, Target } from "lucide-react";

const userStats = {
  level: 7,
  currentXP: 2847,
  nextLevelXP: 3000,
  totalMissions: 23,
  completedMissions: 18,
  streak: 12,
  rank: "Eco Warrior",
  totalPoints: 5420
};

const achievements = [
  { name: "First Steps", description: "Complete your first mission", earned: true, rarity: "Common" },
  { name: "Water Saver", description: "Save 1000L of water", earned: true, rarity: "Common" },
  { name: "Tree Hugger", description: "Plant 10 trees", earned: true, rarity: "Rare" },
  { name: "Energy Master", description: "Reduce energy usage by 50%", earned: false, rarity: "Epic" },
  { name: "Climate Champion", description: "Complete 50 missions", earned: false, rarity: "Legendary" }
];

const recentActivity = [
  { action: "Completed Water Conservation Challenge", points: 150, time: "2 hours ago" },
  { action: "Updated Tree Planting Progress", points: 50, time: "1 day ago" },
  { action: "Joined Community Clean-up", points: 200, time: "3 days ago" },
  { action: "Earned Energy Expert Badge", points: 100, time: "1 week ago" }
];

export function UserProgress() {
  const progressToNextLevel = (userStats.currentXP / userStats.nextLevelXP) * 100;
  const missionCompletion = (userStats.completedMissions / userStats.totalMissions) * 100;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-100 text-gray-800";
      case "Rare": return "bg-blue-100 text-blue-800";
      case "Epic": return "bg-purple-100 text-purple-800";
      case "Legendary": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Your Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-emerald-600">L{userStats.level}</span>
            </div>
            <h3 className="font-semibold text-lg">{userStats.rank}</h3>
            <p className="text-gray-600">{userStats.totalPoints} total points</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Level Progress</span>
              <span>{userStats.currentXP}/{userStats.nextLevelXP} XP</span>
            </div>
            <Progress value={progressToNextLevel} className="h-3" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600">{userStats.streak}</div>
              <div className="text-xs text-gray-600">Day Streak</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{Math.round(missionCompletion)}%</div>
              <div className="text-xs text-gray-600">Missions Complete</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-lg font-semibold">Achievements</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-3 rounded-lg border ${achievement.earned ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200 opacity-60'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {achievement.earned ? (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  ) : (
                    <Star className="w-5 h-5 text-gray-400" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
                <Badge className={getRarityColor(achievement.rarity)}>
                  {achievement.rarity}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <span className="text-sm font-semibold text-emerald-600">+{activity.points} pts</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
