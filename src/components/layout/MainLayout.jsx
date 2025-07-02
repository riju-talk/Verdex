
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";

export function MainLayout({ children, title, description }) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      <Header />
      <div className="px-6 py-8 space-y-8">
        {(title || description) && (
          <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div>
              {title && (
                <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-gray-600 mt-2 text-lg">{description}</p>
              )}
            </div>
            {user && (
              <div className="flex items-center space-x-4 bg-white/80 rounded-xl px-4 py-3 backdrop-blur-sm border border-emerald-200">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-emerald-300"
                />
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-emerald-600">Level {user.level}</p>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
