
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "AI Analysis", path: "/ai-analysis" },
    { name: "Citizen Actions", path: "/citizen-actions" },
    { name: "Policy Tools", path: "/policy-tools" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Verdex</span>
          </div>
          
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            Live Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
}
