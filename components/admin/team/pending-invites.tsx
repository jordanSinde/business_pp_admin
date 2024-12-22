"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pendingInvites = [
  {
    id: 1,
    email: "thomas.bernard@exemple.com",
    role: "Admin Niveau 1",
    sentAt: "2024-03-15T10:00:00",
    expiresAt: "2024-03-22T10:00:00"
  },
  {
    id: 2,
    email: "sophie.martin@exemple.com",
    role: "Admin Niveau 2",
    sentAt: "2024-03-14T15:30:00",
    expiresAt: "2024-03-21T15:30:00"
  }
];

export function PendingInvites() {
  return (
    <div className="rounded-md border">
      <div className="p-6">
        <h2 className="text-xl font-semibold">Invitations en attente</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Invitations envoyées mais pas encore acceptées
        </p>
      </div>
      <div className="divide-y">
        {pendingInvites.map((invite) => (
          <div
            key={invite.id}
            className="flex items-center justify-between p-6"
          >
            <div>
              <div className="font-medium">{invite.email}</div>
              <div className="text-sm text-muted-foreground">
                Invité le {new Date(invite.sentAt).toLocaleDateString()}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">{invite.role}</Badge>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive"
                onClick={() => {/* Handle cancellation */}}
              >
                Annuler
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {/* Handle resend */}}
              >
                Renvoyer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}