import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Brain, Users, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <span className="text-emerald-700">Verdex</span>
            <br />
            <span className="text-gray-700">Environmental Intelligence</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            The full-stack platform that empowers <strong>1 billion people</strong> to act on climate through AI-powered
            environmental monitoring, real-time insights, and collaborative citizen science.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border">
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">Real-time Data</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border">
              <Brain className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium">AI Analysis</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border">
              <Users className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Citizen Science</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Policy Tools</span>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <a href="/dashboard" className="flex items-center">
                Explore Live Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              View GitHub Repo
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Think of it as:</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Badge variant="secondary">GitHub</Badge>
              <span className="text-gray-400">+</span>
              <Badge variant="secondary">Kaggle</Badge>
              <span className="text-gray-400">+</span>
              <Badge variant="secondary">Notion</Badge>
              <span className="text-gray-400">+</span>
              <Badge variant="secondary">Google Earth Engine</Badge>
            </div>
            <p className="text-sm text-gray-500 mt-2">for sustainable living and environmental action</p>
          </div>
        </div>
      </div>
    </section>
  )
}
