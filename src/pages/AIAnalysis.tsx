
import { Header } from "@/components/Header";
import { DocumentUploader } from "@/components/ai-analysis/DocumentUploader";
import { InsightsPanel } from "@/components/ai-analysis/InsightsPanel";
import { PolicyRecommendations } from "@/components/ai-analysis/PolicyRecommendations";

export default function AIAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Analysis Studio</h1>
            <p className="text-gray-600">Upload documents and get intelligent environmental insights</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <DocumentUploader />
          </div>
          <div className="xl:col-span-2 space-y-6">
            <InsightsPanel />
            <PolicyRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
}
