
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, AlertCircle, Lightbulb, Download } from "lucide-react";

const insights = [
  {
    type: "trend",
    title: "Carbon Emission Patterns",
    description: "Analysis shows 15% increase in industrial emissions during peak hours",
    confidence: 87,
    impact: "High",
    recommendations: [
      "Implement staggered work schedules",
      "Increase public transport frequency",
      "Promote remote work policies"
    ]
  },
  {
    type: "alert",
    title: "Air Quality Deterioration",
    description: "PM2.5 levels consistently above WHO guidelines in residential areas",
    confidence: 92,
    impact: "Critical",
    recommendations: [
      "Deploy air purification systems",
      "Restrict vehicle access during peak pollution",
      "Increase urban green spaces"
    ]
  },
  {
    type: "opportunity",
    title: "Renewable Energy Potential",
    description: "Solar panel efficiency could be increased by 23% with optimal positioning",
    confidence: 78,
    impact: "Medium",
    recommendations: [
      "Optimize solar panel angles",
      "Clear vegetation blocking panels",
      "Upgrade to newer panel technology"
    ]
  }
];

export function InsightsPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-emerald-600" />
          <CardTitle className="text-lg font-semibold">AI-Generated Insights</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {insights.map((insight, index) => {
          const getIcon = () => {
            switch (insight.type) {
              case "trend": return TrendingUp;
              case "alert": return AlertCircle;
              case "opportunity": return Lightbulb;
              default: return Brain;
            }
          };
          const Icon = getIcon();

          const getColor = () => {
            switch (insight.impact) {
              case "Critical": return "bg-red-100 text-red-800";
              case "High": return "bg-orange-100 text-orange-800";
              case "Medium": return "bg-yellow-100 text-yellow-800";
              default: return "bg-gray-100 text-gray-800";
            }
          };

          return (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-medium text-gray-900">{insight.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getColor()}>
                    {insight.impact} Impact
                  </Badge>
                  <span className="text-xs text-gray-500">{insight.confidence}% confidence</span>
                </div>
              </div>

              <p className="text-gray-700">{insight.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Confidence Score</span>
                  <span className="text-sm text-gray-900">{insight.confidence}%</span>
                </div>
                <Progress value={insight.confidence} className="h-2" />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Recommended Actions:</h4>
                <ul className="space-y-1">
                  {insight.recommendations.map((rec, recIndex) => (
                    <li key={recIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
