
import React from 'react';
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function AuthenticatedLayout({ children }) {
  const { user, isLoading, showLoginModal } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-white">V</span>
          </div>
          <LoadingSpinner size="lg" />
          <p className="text-gray-600">Loading Verdex...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`min-h-screen transition-all duration-300 ${showLoginModal ? 'blur-sm' : ''}`}>
        {children}
      </div>
      <LoginModal />
    </>
  );
}
