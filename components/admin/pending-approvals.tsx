"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// ... rest of the imports

export function PendingApprovals() {
  const [rejectionReason, setRejectionReason] = useState("");

  return (
    <div className="space-y-4">
      {/* ... existing table code ... */}
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Motif du rejet</DialogTitle>
            <DialogDescription>
              Veuillez spécifier la raison du rejet de cette demande.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            placeholder="Saisissez le motif du rejet..."
          />
          <DialogFooter>
            <Button variant="destructive">
              Confirmer le rejet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}