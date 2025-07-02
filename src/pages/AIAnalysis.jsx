
import { MainLayout } from "@/components/layout/MainLayout";
import { DocumentUploader } from "@/components/ai-analysis/DocumentUploader";
import { InsightsPanel } from "@/components/ai-analysis/InsightsPanel";
import { PolicyRecommendations } from "@/components/ai-analysis/PolicyRecommendations";

export default function AIAnalysis() {
  return (
    <MainLayout 
      title="AI Analysis Studio" 
      description="Upload documents and get intelligent environmental insights"
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-1">
          <DocumentUploader />
        </div>
        <div className="xl:col-span-2 space-y-6">
          <InsightsPanel />
          <PolicyRecommendations />
        </div>
      </div>
    </MainLayout>
  );
}
