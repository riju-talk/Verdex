
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('verdex_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setShowLoginModal(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (provider, userData) => {
    try {
      // Simulate API call to backend
      const user = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        avatar: userData.avatar,
        provider: provider,
        createdAt: new Date().toISOString(),
        level: 1,
        xp: 0,
        totalPoints: 0,
        streak: 0,
        completedMissions: 0,
        achievements: []
      };

      setUser(user);
      localStorage.setItem('verdex_user', JSON.stringify(user));
      setShowLoginModal(false);
      
      // TODO: Replace with actual API call
      // await api.post('/auth/login', { provider, userData });
      
      return user;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('verdex_user');
    setShowLoginModal(true);
  };

  const updateUserProgress = (progressData) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      ...progressData,
      lastUpdated: new Date().toISOString()
    };
    
    setUser(updatedUser);
    localStorage.setItem('verdex_user', JSON.stringify(updatedUser));
    
    // TODO: Sync with backend
    // api.post('/user/progress', progressData);
  };

  const value = {
    user,
    isLoading,
    showLoginModal,
    login,
    logout,
    updateUserProgress,
    setShowLoginModal
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
