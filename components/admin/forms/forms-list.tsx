"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormResponsesDialog } from "./form-responses-dialog";
import { FormTemplatesList } from "./form-templates-list";
import { FormResponsesList } from "./form-responses-list";

export function FormsList() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  return (
    <Tabs defaultValue="templates" className="space-y-6">
      <TabsList className="grid w-full max-w-[400px] grid-cols-2">
        <TabsTrigger value="templates">Modèles</TabsTrigger>
        <TabsTrigger value="responses">Réponses</TabsTrigger>
      </TabsList>
      
      <TabsContent value="templates">
        <FormTemplatesList />
      </TabsContent>
      
      <TabsContent value="responses">
        <FormResponsesList onViewResponses={setSelectedForm} />
      </TabsContent>

      <FormResponsesDialog
        formId={selectedForm}
        open={!!selectedForm}
        onOpenChange={() => setSelectedForm(null)}
      />
    </Tabs>
  );
}