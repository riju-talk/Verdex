import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Globe, Zap, Brain } from "lucide-react"

const stats = [
  {
    title: "Active Users",
    value: "12,847",
    description: "People using Verdex daily",
    icon: Users,
    color: "text-emerald-600",
  },
  {
    title: "Data Points",
    value: "2.3M",
    description: "Environmental measurements processed",
    icon: Globe,
    color: "text-blue-600",
  },
  {
    title: "AI Analyses",
    value: "45,231",
    description: "Datasets analyzed this month",
    icon: Brain,
    color: "text-amber-600",
  },
  {
    title: "Climate Actions",
    value: "89,456",
    description: "Eco-missions completed",
    icon: Zap,
    color: "text-green-600",
  },
]

export function LiveFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-200 bg-emerald-50 text-emerald-700">
            🌍 Platform Statistics
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making Real Environmental Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of users worldwide who are actively monitoring and improving our environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-medium text-gray-900 mb-1">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                No Registration Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Start exploring environmental data immediately. All features are accessible without creating an account.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Explore Dashboard</Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-amber-500" />
                Real-Time Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Access live environmental data from NASA, NOAA, and global sensor networks updated every minute.
              </p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">View Live Data</Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Community Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join a global community of environmental advocates working together for climate action.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Join Community</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
