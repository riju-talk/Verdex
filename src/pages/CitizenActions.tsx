
import { Header } from "@/components/Header";
import { MissionsBoard } from "@/components/citizen-actions/MissionsBoard";
import { UserProgress } from "@/components/citizen-actions/UserProgress";
import { CommunityProjects } from "@/components/citizen-actions/CommunityProjects";

export default function CitizenActions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-6 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Citizen Eco Actions</h1>
            <p className="text-gray-600">Join missions, earn rewards, and make a difference in your community</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-1">
            <UserProgress />
          </div>
          <div className="xl:col-span-3 space-y-6">
            <MissionsBoard />
            <CommunityProjects />
          </div>
        </div>
      </div>
    </div>
  );
}
