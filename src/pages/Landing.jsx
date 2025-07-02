
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Brain, 
  Target, 
  Users, 
  FileText, 
  TrendingUp, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Live Environmental Dashboards",
    description: "Track local and global environmental metrics such as air quality, water levels, carbon emissions, and temperature trends.",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Brain,
    title: "AI Analysis & Policy Recommendations",
    description: "Uses machine learning to interpret environmental data and generate policy insights, climate risk assessments, and actionable recommendations.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Target,
    title: "Gamified Missions for Users",
    description: "Encourages eco-conscious behavior through missions, challenges, and rewards—making sustainability engaging and community-driven.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: FileText,
    title: "Smart File & Document Analyzer",
    description: "Upload environmental reports or policy documents and receive intelligent inferences, summaries, and suggested improvements.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Users,
    title: "Citizen Science & Community Action",
    description: "Supports collaborative initiatives by enabling users to contribute data, ideas, and participate in verified community projects.",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: Shield,
    title: "Real-Time Environmental Monitoring",
    description: "Continuous monitoring of environmental parameters with instant alerts and notifications for critical changes.",
    color: "bg-red-100 text-red-600"
  }
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "2.4M", label: "CO₂ Saved (kg)" },
  { value: "1,200+", label: "Missions Completed" },
  { value: "95%", label: "Accuracy Rate" }
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Environmental Scientist",
    content: "Verdex has revolutionized how we approach environmental monitoring. The AI insights are incredibly accurate.",
    avatar: "SC"
  },
  {
    name: "Mark Rodriguez",
    role: "Policy Maker",
    content: "The policy recommendations feature has helped us create more effective environmental legislation.",
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "Community Leader",
    content: "The gamification aspect has gotten our entire community engaged in sustainability efforts.",
    avatar: "EJ"
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Verdex
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">Testimonials</a>
              <Link to="/dashboard">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Launch Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
            🌱 AI-Powered Environmental Intelligence
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Environmental Intelligence
            </span>
            <br />
            <span className="text-gray-800">for a Sustainable Future</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Verdex empowers individuals, organizations, and communities to make informed environmental decisions through 
            real-time monitoring, AI analytics, and gamified sustainability missions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-emerald-200 hover:bg-emerald-50">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features for Environmental Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to monitor, analyze, and act on environmental data with AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Bridging Data and Action for <span className="text-emerald-600">Climate Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Verdex combines cutting-edge AI technology with real-time environmental data to create actionable insights. 
                Our platform transforms complex environmental information into clear, engaging experiences that drive meaningful change.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time environmental monitoring and alerts",
                  "AI-powered policy analysis and recommendations", 
                  "Gamified community engagement and missions",
                  "Intelligent document processing and insights"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                <Globe className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Join thousands of users worldwide who are making data-driven environmental decisions and contributing to a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Environmental Leaders</h2>
          <p className="text-xl text-gray-600">See what our users are saying about Verdex</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-emerald-600">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Environmental Impact?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join the community of changemakers using data-driven insights to create a sustainable future.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Verdex</span>
              </div>
              <p className="text-gray-400">
                Environmental Intelligence for a Sustainable Future
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Dashboard</div>
                <div>AI Analysis</div>
                <div>Missions</div>
                <div>Policy Tools</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <div>Privacy</div>
                <div>Terms</div>
                <div>Security</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Verdex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
