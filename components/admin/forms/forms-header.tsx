"use client";

import { Button } from "@/components/ui/button";
import { CreateTemplateDialog } from "./create-template-dialog";
import { SendFollowUpDialog } from "./send-follow-up-dialog";
import { useState } from "react";

export function FormsHeader() {
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [showSendFollowUp, setShowSendFollowUp] = useState(false);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Formulaires</h1>
        <p className="text-muted-foreground mt-2">
          Gérez les formulaires de demande de partenariat
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <Button 
          className="w-full sm:w-auto" 
          onClick={() => setShowCreateTemplate(true)}
        >
          Créer un modèle
        </Button>
        <Button 
          className="w-full sm:w-auto"
          onClick={() => setShowSendFollowUp(true)}
        >
          Envoyer un suivi
        </Button>
      </div>
      <CreateTemplateDialog 
        open={showCreateTemplate} 
        onOpenChange={setShowCreateTemplate} 
      />
      <SendFollowUpDialog 
        open={showSendFollowUp} 
        onOpenChange={setShowSendFollowUp} 
      />
    </div>
  );
}