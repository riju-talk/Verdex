
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Building, Leaf } from "lucide-react";

const policies = [
  {
    title: "Carbon Tax Implementation",
    category: "Economic Policy",
    priority: "High",
    timeframe: "6-12 months",
    icon: Building,
    description: "Implement graduated carbon pricing to incentivize emission reduction",
    benefits: ["Reduce industrial emissions by 25%", "Generate $2.3M annually", "Create green jobs"],
    challenges: ["Business resistance", "Implementation complexity", "Monitoring costs"],
    status: "Under Review"
  },
  {
    title: "Green Transportation Initiative",
    category: "Infrastructure",
    priority: "Medium",
    timeframe: "1-2 years",
    icon: Leaf,
    description: "Expand electric vehicle infrastructure and public transit",
    benefits: ["40% reduction in transport emissions", "Improved air quality", "Cost savings for citizens"],
    challenges: ["High initial investment", "Grid capacity", "Public adoption"],
    status: "Planning Phase"
  },
  {
    title: "Community Engagement Program",
    category: "Social Policy",
    priority: "Medium",
    timeframe: "3-6 months",
    icon: Users,
    description: "Launch citizen science and environmental education programs",
    benefits: ["Increased awareness", "Community participation", "Data collection"],
    challenges: ["Funding requirements", "Volunteer coordination", "Long-term sustainability"],
    status: "Ready to Implement"
  }
];

export function PolicyRecommendations() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-lg font-semibold">Policy Recommendations</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          Generate Report
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {policies.map((policy, index) => {
          const Icon = policy.icon;
          const getPriorityColor = (priority: string) => {
            switch (priority) {
              case "High": return "bg-red-100 text-red-800";
              case "Medium": return "bg-yellow-100 text-yellow-800";
              case "Low": return "bg-green-100 text-green-800";
              default: return "bg-gray-100 text-gray-800";
            }
          };

          const getStatusColor = (status: string) => {
            switch (status) {
              case "Ready to Implement": return "bg-green-100 text-green-800";
              case "Under Review": return "bg-blue-100 text-blue-800";
              case "Planning Phase": return "bg-purple-100 text-purple-800";
              default: return "bg-gray-100 text-gray-800";
            }
          };

          return (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">{policy.title}</h3>
                    <p className="text-sm text-gray-600">{policy.category}</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <Badge className={getPriorityColor(policy.priority)}>
                    {policy.priority} Priority
                  </Badge>
                  <Badge className={getStatusColor(policy.status)}>
                    {policy.status}
                  </Badge>
                </div>
              </div>

              <p className="text-gray-700">{policy.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>⏱️ Timeline: {policy.timeframe}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-green-700">Expected Benefits</h4>
                  <ul className="space-y-1">
                    {policy.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-orange-700">Implementation Challenges</h4>
                  <ul className="space-y-1">
                    {policy.challenges.map((challenge, cIndex) => (
                      <li key={cIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-orange-600 mt-1">⚠</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Export Summary
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
