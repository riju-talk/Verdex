
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, MapPin, Calendar, Target, TreePine, Droplets, Recycle } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "San Francisco Bay Cleanup",
    description: "Community-driven initiative to remove plastic waste from the bay area",
    location: "San Francisco Bay",
    category: "Water Conservation",
    icon: Droplets,
    organizer: "Bay Area Environmental Group",
    participants: 234,
    maxParticipants: 300,
    startDate: "March 15, 2024",
    endDate: "March 17, 2024",
    progress: 78,
    impact: "2.4 tons of waste removed",
    status: "active",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Urban Forest Initiative",
    description: "Plant 1000 native trees across the city to improve air quality",
    location: "Multiple locations",
    category: "Reforestation",
    icon: TreePine,
    organizer: "Green City Coalition",
    participants: 156,
    maxParticipants: 500,
    startDate: "April 1, 2024",
    endDate: "June 30, 2024",
    progress: 34,
    impact: "340 trees planted so far",
    status: "recruiting",
    difficulty: "Medium"
  },
  {
    id: 3,
    title: "Zero Waste Campus",
    description: "Transform university campus into a zero-waste facility",
    location: "UC Berkeley",
    category: "Waste Reduction",
    icon: Recycle,
    organizer: "Student Environmental Alliance",
    participants: 89,
    maxParticipants: 200,
    startDate: "February 1, 2024",
    endDate: "May 31, 2024",
    progress: 67,
    impact: "60% waste reduction achieved",
    status: "active",
    difficulty: "Hard"
  }
];

export function CommunityProjects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "recruiting": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-lg font-semibold">Community Projects</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          Start New Project
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project) => {
          const Icon = project.icon;
          const participationRate = (project.participants / project.maxParticipants) * 100;

          return (
            <div key={project.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.startDate} - {project.endDate}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{project.participants}/{project.maxParticipants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>By {project.organizer}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Project Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
                <p className="text-sm text-emerald-600 font-medium">🎯 {project.impact}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Participation</span>
                  <span>{Math.round(participationRate)}% full</span>
                </div>
                <Progress value={participationRate} className="h-2" />
              </div>

              <div className="flex space-x-2">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  Join Project
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Share
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
