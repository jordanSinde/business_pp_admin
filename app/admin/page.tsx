import { DashboardMetrics } from "@/components/admin/dashboard-metrics";
import { PendingApprovals } from "@/components/admin/pending-approvals";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
      <DashboardMetrics />
      <PendingApprovals />
    </div>
  );
}