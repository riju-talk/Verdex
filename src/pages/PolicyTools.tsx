
import { Header } from "@/components/Header";
import { PolicyRecommendations } from "@/components/ai-analysis/PolicyRecommendations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, BarChart3, Users, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const policyMetrics = [
  { title: "Policies Analyzed", value: "247", change: "+23 this month", icon: FileText },
  { title: "Implementation Rate", value: "68%", change: "+12% improvement", icon: TrendingUp },
  { title: "Stakeholders Engaged", value: "1,240", change: "+340 this quarter", icon: Users },
  { title: "Impact Assessments", value: "89", change: "+15 completed", icon: BarChart3 }
];

const activeInitiatives = [
  {
    title: "Carbon Neutrality by 2030",
    status: "In Progress",
    progress: 42,
    stakeholders: 12,
    lastUpdated: "2 days ago",
    priority: "High"
  },
  {
    title: "Renewable Energy Transition",
    status: "Under Review",
    progress: 78,
    stakeholders: 8,
    lastUpdated: "1 week ago",
    priority: "Medium"
  },
  {
    title: "Waste Reduction Program",
    status: "Implemented",
    progress: 95,
    stakeholders: 15,
    lastUpdated: "3 days ago",
    priority: "High"
  }
];

export default function PolicyTools() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Policy Tools</h1>
            <p className="text-gray-600">Analyze, track, and implement environmental policies effectively</p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Create New Policy
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {policyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-600">{metric.title}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                    <p className="text-xs text-green-600 mt-1">{metric.change}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="xl:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Active Initiatives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeInitiatives.map((initiative, index) => {
                const getStatusIcon = (status: string) => {
                  switch (status) {
                    case "Implemented": return CheckCircle;
                    case "In Progress": return TrendingUp;
                    case "Under Review": return AlertCircle;
                    default: return FileText;
                  }
                };
                const StatusIcon = getStatusIcon(initiative.status);

                const getStatusColor = (status: string) => {
                  switch (status) {
                    case "Implemented": return "bg-green-100 text-green-800";
                    case "In Progress": return "bg-blue-100 text-blue-800";
                    case "Under Review": return "bg-yellow-100 text-yellow-800";
                    default: return "bg-gray-100 text-gray-800";
                  }
                };

                const getPriorityColor = (priority: string) => {
                  switch (priority) {
                    case "High": return "bg-red-100 text-red-800";
                    case "Medium": return "bg-yellow-100 text-yellow-800";
                    case "Low": return "bg-green-100 text-green-800";
                    default: return "bg-gray-100 text-gray-800";
                  }
                };

                return (
                  <div key={index} className="border rounded-lg p-3 space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-gray-900">{initiative.title}</h4>
                      <Badge className={getPriorityColor(initiative.priority)}>
                        {initiative.priority}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <StatusIcon className="w-4 h-4 text-gray-500" />
                      <Badge className={getStatusColor(initiative.status)}>
                        {initiative.status}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{initiative.progress}%</span>
                      </div>
                      <Progress value={initiative.progress} className="h-2" />
                    </div>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{initiative.stakeholders} stakeholders</span>
                      <span>Updated {initiative.lastUpdated}</span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="xl:col-span-2">
            <PolicyRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
}
