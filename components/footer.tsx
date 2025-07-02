import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl">Verdex</span>
              <Badge variant="outline" className="ml-2 border-emerald-400 bg-emerald-900 text-emerald-300">
                Environmental Intelligence
              </Badge>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering 1 billion people to act on climate through AI-powered environmental monitoring, real-time
              insights, and collaborative citizen science.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Analysis Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Citizen Actions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Policy Toolkit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Educational Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Verdex. Built for environmental impact. Open source and community-driven.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
