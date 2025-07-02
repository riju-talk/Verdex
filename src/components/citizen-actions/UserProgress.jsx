
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Star, TrendingUp, Target, Zap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

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
  const { user, updateUserProgress } = useAuth();
  
  if (!user) return null;

  const nextLevelXP = user.level * 1000;
  const progressToNextLevel = (user.xp / nextLevelXP) * 100;
  const earnedAchievements = achievements.filter(a => a.earned).length;

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Common": return "bg-slate-100 text-slate-800 border-slate-300";
      case "Rare": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Epic": return "bg-purple-100 text-purple-800 border-purple-300";
      case "Legendary": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-emerald-200/50 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-emerald-600" />
            <span>Your Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-3">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <span className="text-3xl font-bold text-white">L{user.level}</span>
            </div>
            <h3 className="font-bold text-xl text-gray-900">Eco Warrior</h3>
            <p className="text-emerald-600 font-semibold">{user.totalPoints} total points</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-gray-700">Level Progress</span>
              <span className="text-emerald-600">{user.xp}/{nextLevelXP} XP</span>
            </div>
            <Progress value={progressToNextLevel} className="h-3 bg-emerald-100" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
              <div className="text-2xl font-bold text-emerald-700">{user.streak}</div>
              <div className="text-sm text-emerald-600 font-medium">Day Streak</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="text-2xl font-bold text-blue-700">{user.completedMissions}</div>
              <div className="text-sm text-blue-600 font-medium">Missions Done</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-emerald-200/50 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-xl font-semibold text-gray-900">Achievements</CardTitle>
          </div>
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300">
            {earnedAchievements}/{achievements.length}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              achievement.earned 
                ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 shadow-sm' 
                : 'bg-gray-50 border-gray-200 opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {achievement.earned ? (
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  ) : (
                    <Star className="w-6 h-6 text-gray-400" />
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
                <Badge className={`${getRarityColor(achievement.rarity)} border`}>
                  {achievement.rarity}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-emerald-200/50 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Activity</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-emerald-50 border border-emerald-100">
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">
                +{activity.points} pts
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
