
import { Header } from "@/components/Header";
import { EcoOpportunities } from "@/components/dashboard/EcoOpportunities";
import { EnvironmentalImpact } from "@/components/dashboard/EnvironmentalImpact";
import { LiveMetrics } from "@/components/dashboard/LiveMetrics";
import { AlertsNotifications } from "@/components/dashboard/AlertsNotifications";
import { CommunityStats } from "@/components/dashboard/CommunityStats";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Environmental Dashboard</h1>
            <p className="text-gray-600">Real-time insights into your environmental impact</p>
          </div>
        </div>

        <LiveMetrics />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <EcoOpportunities />
            <EnvironmentalImpact />
          </div>
          <div className="space-y-6">
            <AlertsNotifications />
            <CommunityStats />
          </div>
        </div>
      </div>
    </div>
  );
}
