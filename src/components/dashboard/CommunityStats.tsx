
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const communityData = [
  {
    title: "Active Members",
    value: "12,847",
    change: "+847 this month",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Missions Completed",
    value: "3,420",
    change: "+156 this week",
    icon: Target,
    color: "text-green-600"
  },
  {
    title: "CO₂ Saved Together",
    value: "2.4 tons",
    change: "+340kg this month",
    icon: TrendingUp,
    color: "text-emerald-600"
  },
  {
    title: "Achievements Unlocked",
    value: "1,892",
    change: "+23 today",
    icon: Award,
    color: "text-purple-600"
  }
];

const leaderboard = [
  { name: "EcoWarrior Sarah", points: 2847, rank: 1, badge: "Gold" },
  { name: "GreenThumb Mike", points: 2356, rank: 2, badge: "Silver" },
  { name: "ClimateChamp Lisa", points: 2123, rank: 3, badge: "Bronze" },
  { name: "SolarSam", points: 1987, rank: 4, badge: "Green" },
  { name: "RecycleRay", points: 1654, rank: 5, badge: "Blue" }
];

export function CommunityStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Community Impact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {communityData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm font-medium text-gray-700">{item.title}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-xl font-bold text-gray-900">{item.value}</span>
                  <p className="text-xs text-green-600">{item.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Top Contributors</h4>
          {leaderboard.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-600">#{user.rank}</span>
                <span className="text-sm font-medium">{user.name}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    user.badge === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                    user.badge === 'Silver' ? 'bg-gray-100 text-gray-800' :
                    user.badge === 'Bronze' ? 'bg-orange-100 text-orange-800' :
                    user.badge === 'Green' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}
                >
                  {user.badge}
                </Badge>
              </div>
              <span className="text-sm font-semibold text-emerald-600">{user.points} pts</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Monthly Goal Progress</span>
            <span>74%</span>
          </div>
          <Progress value={74} className="h-2" />
          <p className="text-xs text-gray-500">2,600 more points needed to reach community goal</p>
        </div>
      </CardContent>
    </Card>
  );
}
