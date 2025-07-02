
import { MainLayout } from "@/components/layout/MainLayout";
import { MissionsBoard } from "@/components/citizen-actions/MissionsBoard";
import { UserProgress } from "@/components/citizen-actions/UserProgress";
import { CommunityProjects } from "@/components/citizen-actions/CommunityProjects";

export default function CitizenActions() {
  return (
    <MainLayout 
      title="Citizen Eco Actions" 
      description="Join missions, earn rewards, and make a difference in your community"
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-1">
          <UserProgress />
        </div>
        <div className="xl:col-span-3 space-y-6">
          <MissionsBoard />
          <CommunityProjects />
        </div>
      </div>
    </MainLayout>
  );
}
