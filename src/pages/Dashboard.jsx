
import { MainLayout } from "@/components/layout/MainLayout";
import { EcoOpportunities } from "@/components/dashboard/EcoOpportunities";
import { EnvironmentalImpact } from "@/components/dashboard/EnvironmentalImpact";
import { LiveMetrics } from "@/components/dashboard/LiveMetrics";
import { AlertsNotifications } from "@/components/dashboard/AlertsNotifications";
import { CommunityStats } from "@/components/dashboard/CommunityStats";

export default function Dashboard() {
  return (
    <MainLayout 
      title="Environmental Dashboard" 
      description="Real-time insights into your environmental impact"
    >
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
    </MainLayout>
  );
}
