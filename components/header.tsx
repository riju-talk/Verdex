import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Verdex</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Dashboard
          </a>
          <a href="/analysis" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            AI Analysis
          </a>
          <a href="/actions" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Citizen Actions
          </a>
          <a href="/policy" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Policy Tools
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            <ExternalLink className="mr-2 h-4 w-4" />
            <a href="/dashboard">Live Dashboard</a>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
