"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/i18n/language-context";

interface RejectionDialogProps {
  open: boolean;
  companyId: number | null;
  onOpenChange: (open: boolean) => void;
}

export function RejectionDialog({ open, companyId, onOpenChange }: RejectionDialogProps) {
  const { t } = useLanguage();
  const [rejectionReason, setRejectionReason] = useState("");

  const handleConfirmRejection = () => {
    if (!rejectionReason.trim()) return;
    
    // Handle rejection with reason
    console.log(`Rejecting company ${companyId} with reason: ${rejectionReason}`);
    onOpenChange(false);
    setRejectionReason("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("companies.rejection.title")}</DialogTitle>
          <DialogDescription>
            {t("companies.rejection.description")}
          </DialogDescription>
        </DialogHeader>
        <Textarea
          value={rejectionReason}
          onChange={(e) => setRejectionReason(e.target.value)}
          placeholder={t("companies.rejection.placeholder")}
          className="min-h-[100px]"
        />
        <DialogFooter>
          <Button 
            variant="destructive" 
            onClick={handleConfirmRejection}
            disabled={!rejectionReason.trim()}
          >
            {t("companies.rejection.confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}