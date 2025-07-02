import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Brain, Users, GraduationCap, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Satellite,
    title: "Live Environment Dashboard",
    description: "Real-time monitoring with NASA/NOAA APIs, air quality sensors, and interactive maps",
    status: "Live",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Brain,
    title: "AI-Powered Eco Analysis Studio",
    description: "Upload datasets, run ML models, get AI explanations and predictions",
    status: "Live",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Citizen Eco Actions",
    description: "Location-based climate missions, rewards system, and eco-habit suggestions",
    status: "Live",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: GraduationCap,
    title: "Education & Policy Toolkit",
    description: "Environmental curriculum hub and AI-powered policy draft generator",
    status: "Live",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Core Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Four powerful modules working together to democratize environmental intelligence
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className={`absolute top-0 left-0 w-full h-1 ${feature.bgColor.replace("bg-", "bg-gradient-to-r from-").replace("-50", "-400 to-" + feature.bgColor.split("-")[1] + "-600")}`}
              />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`rounded-lg p-2 ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Live
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
