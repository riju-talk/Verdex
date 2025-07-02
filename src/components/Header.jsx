
import { Github, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "AI Analysis", path: "/ai-analysis" },
    { name: "Citizen Actions", path: "/citizen-actions" },
    { name: "Policy Tools", path: "/policy-tools" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-emerald-200/50 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Verdex
            </span>
          </Link>
          
          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-emerald-100 text-emerald-700 shadow-sm"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="border-emerald-200 hover:bg-emerald-50">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full border-2 border-emerald-300"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-sm border-emerald-200" align="end">
                <DropdownMenuItem className="flex-col items-start p-3">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-emerald-600">Level {user.level} • {user.totalPoints} pts</div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
