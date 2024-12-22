import { TeamHeader } from "@/components/admin/team/team-header";
import { TeamMembers } from "@/components/admin/team/team-members";
import { PendingInvites } from "@/components/admin/team/pending-invites";

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <TeamHeader />
      <TeamMembers />
      <PendingInvites />
    </div>
  );
}