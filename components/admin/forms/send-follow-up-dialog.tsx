"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CompanyFilter } from "./company-filter";
import { useTemplates } from "@/hooks/use-templates";

interface SendFollowUpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SendFollowUpDialog({ open, onOpenChange }: SendFollowUpDialogProps) {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const { templates } = useTemplates();

  const handleSubmit = () => {
    // Handle sending follow-up forms
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Envoyer un formulaire de suivi</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Modèle de formulaire</Label>
            <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un modèle" />
              </SelectTrigger>
              <SelectContent>
                {templates.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <CompanyFilter onCompaniesSelected={setSelectedCompanies} />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Envoyer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}