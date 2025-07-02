
-- Verdex Environmental Intelligence Platform Database Schema
-- PostgreSQL Database Structure

-- Users table for authentication and profile data
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    auth_provider VARCHAR(50) NOT NULL, -- 'google' or 'twitter'
    provider_id VARCHAR(255) NOT NULL,
    level INTEGER DEFAULT 1,
    xp INTEGER DEFAULT 0,
    total_points INTEGER DEFAULT 0,
    streak_days INTEGER DEFAULT 0,
    last_login TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT users_email_check CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
    CONSTRAINT users_level_check CHECK (level >= 1),
    CONSTRAINT users_xp_check CHECK (xp >= 0),
    CONSTRAINT users_points_check CHECK (total_points >= 0)
);

-- Environmental data metrics
CREATE TABLE environmental_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_type VARCHAR(50) NOT NULL, -- 'air_quality', 'temperature', 'humidity', etc.
    value DECIMAL(10,2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    source VARCHAR(100) NOT NULL,
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_metrics_type_date (metric_type, recorded_at),
    INDEX idx_metrics_location (location_lat, location_lng)
);

-- Mission definitions
CREATE TABLE missions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    difficulty VARCHAR(20) DEFAULT 'Easy', -- 'Easy', 'Medium', 'Hard'
    category VARCHAR(50) NOT NULL, -- 'Water Conservation', 'Energy Saving', etc.
    points_reward INTEGER NOT NULL,
    xp_reward INTEGER NOT NULL,
    time_limit_hours INTEGER, -- NULL for no time limit
    max_participants INTEGER, -- NULL for unlimited
    current_participants INTEGER DEFAULT 0,
    requirements JSONB, -- Store mission requirements as JSON
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT missions_difficulty_check CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    CONSTRAINT missions_points_check CHECK (points_reward > 0),
    CONSTRAINT missions_xp_check CHECK (xp_reward > 0)
);

-- User mission progress and completions
CREATE TABLE user_missions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    mission_id UUID NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'Active', -- 'Active', 'Completed', 'Failed', 'Abandoned'
    progress_percentage INTEGER DEFAULT 0,
    progress_data JSONB, -- Store specific progress metrics
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    
    UNIQUE(user_id, mission_id),
    CONSTRAINT user_missions_progress_check CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    CONSTRAINT user_missions_status_check CHECK (status IN ('Active', 'Completed', 'Failed', 'Abandoned'))
);

-- User achievements
CREATE TABLE achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    rarity VARCHAR(20) DEFAULT 'Common', -- 'Common', 'Rare', 'Epic', 'Legendary'
    icon VARCHAR(100),
    criteria JSONB NOT NULL, -- Achievement unlock criteria
    points_reward INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT achievements_rarity_check CHECK (rarity IN ('Common', 'Rare', 'Epic', 'Legendary'))
);

-- User earned achievements
CREATE TABLE user_achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    achievement_id UUID NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(user_id, achievement_id)
);

-- Community projects
CREATE TABLE community_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    organizer_id UUID NOT NULL REFERENCES users(id),
    location VARCHAR(255),
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'Planning', -- 'Planning', 'Active', 'Recruiting', 'Completed', 'Cancelled'
    impact_metrics JSONB, -- Store project impact data
    requirements TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT projects_status_check CHECK (status IN ('Planning', 'Active', 'Recruiting', 'Completed', 'Cancelled'))
);

-- User participation in community projects
CREATE TABLE project_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES community_projects(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'Participant', -- 'Organizer', 'Volunteer', 'Participant'
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(project_id, user_id)
);

-- Uploaded documents for AI analysis
CREATE TABLE uploaded_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    file_size INTEGER NOT NULL, -- in bytes
    storage_path TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'Uploaded', -- 'Uploaded', 'Processing', 'Analyzed', 'Failed'
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    analyzed_at TIMESTAMP WITH TIME ZONE,
    
    CONSTRAINT documents_status_check CHECK (status IN ('Uploaded', 'Processing', 'Analyzed', 'Failed'))
);

-- AI analysis results
CREATE TABLE document_analyses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID NOT NULL REFERENCES uploaded_documents(id) ON DELETE CASCADE,
    analysis_type VARCHAR(50) NOT NULL, -- 'environmental_impact', 'policy_analysis', etc.
    confidence_score DECIMAL(3,2), -- 0.00 to 1.00
    insights JSONB NOT NULL, -- Store AI-generated insights
    recommendations JSONB, -- Store recommendations
    summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT analyses_confidence_check CHECK (confidence_score >= 0 AND confidence_score <= 1)
);

-- Policy recommendations and tools
CREATE TABLE policy_recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    priority VARCHAR(20) DEFAULT 'Medium', -- 'Low', 'Medium', 'High', 'Critical'
    status VARCHAR(30) DEFAULT 'Draft', -- 'Draft', 'Under Review', 'Approved', 'Implemented'
    stakeholders JSONB, -- List of stakeholders
    timeline_months INTEGER,
    expected_impact JSONB, -- Expected environmental impact
    implementation_cost DECIMAL(12,2),
    benefits TEXT,
    challenges TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT policy_priority_check CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
    CONSTRAINT policy_status_check CHECK (status IN ('Draft', 'Under Review', 'Approved', 'Implemented'))
);

-- User activity log for tracking engagement
CREATE TABLE user_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    activity_type VARCHAR(50) NOT NULL, -- 'mission_completed', 'document_uploaded', etc.
    activity_data JSONB, -- Store activity-specific data
    points_earned INTEGER DEFAULT 0,
    xp_earned INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    INDEX idx_activities_user_date (user_id, created_at),
    INDEX idx_activities_type (activity_type)
);

-- Real-time environmental alerts
CREATE TABLE environmental_alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    alert_type VARCHAR(100) NOT NULL, -- 'air_quality_warning', 'temperature_spike', etc.
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    severity VARCHAR(20) DEFAULT 'Medium', -- 'Low', 'Medium', 'High', 'Critical'
    location VARCHAR(255),
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    source_data JSONB, -- Original data that triggered the alert
    is_active BOOLEAN DEFAULT true,
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT alerts_severity_check CHECK (severity IN ('Low', 'Medium', 'High', 'Critical')),
    INDEX idx_alerts_location_severity (location_lat, location_lng, severity),
    INDEX idx_alerts_active_date (is_active, created_at)
);

-- User notification preferences and delivery
CREATE TABLE user_notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    notification_type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    read_at TIMESTAMP WITH TIME ZONE,
    
    INDEX idx_notifications_user_unread (user_id, is_read, created_at)
);

-- Triggers for automatic updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_policy_recommendations_updated_at BEFORE UPDATE ON policy_recommendations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_provider ON users(auth_provider, provider_id);
CREATE INDEX idx_missions_active ON missions(is_active, difficulty);
CREATE INDEX idx_user_missions_status ON user_missions(user_id, status);
CREATE INDEX idx_documents_user_status ON uploaded_documents(user_id, status);
CREATE INDEX idx_community_projects_status ON community_projects(status, start_date);

-- Sample data insertion
INSERT INTO achievements (name, description, rarity, criteria, points_reward) VALUES 
('First Steps', 'Complete your first mission', 'Common', '{"missions_completed": 1}', 50),
('Water Saver', 'Save 1000L of water', 'Common', '{"water_saved_liters": 1000}', 100),
('Tree Hugger', 'Plant 10 trees', 'Rare', '{"trees_planted": 10}', 250),
('Energy Master', 'Reduce energy usage by 50%', 'Epic', '{"energy_reduction_percent": 50}', 500),
('Climate Champion', 'Complete 50 missions', 'Legendary', '{"missions_completed": 50}', 1000);

INSERT INTO missions (title, description, difficulty, category, points_reward, xp_reward, requirements) VALUES 
('Water Conservation Challenge', 'Reduce your water usage by tracking and minimizing consumption for one week', 'Easy', 'Water Conservation', 150, 100, '{"duration_days": 7, "target_reduction": 20}'),
('Community Tree Planting', 'Join a local tree planting initiative in your area', 'Medium', 'Environmental Action', 300, 200, '{"participants_min": 5, "trees_target": 10}'),
('Energy Audit Expert', 'Conduct a comprehensive energy audit of your home or workplace', 'Hard', 'Energy Efficiency', 500, 350, '{"audit_categories": ["lighting", "heating", "appliances"], "improvements_min": 3}'),
('Plastic-Free Week', 'Eliminate single-use plastics from your daily routine for one week', 'Medium', 'Waste Reduction', 200, 150, '{"duration_days": 7, "plastic_alternatives": 5}'),
('Carbon Footprint Tracker', 'Track and analyze your carbon footprint for one month', 'Easy', 'Carbon Awareness', 100, 75, '{"duration_days": 30, "categories": ["transport", "food", "energy"]});
