"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useFormDetails } from "@/hooks/use-form-details";

interface FormResponsesDialogProps {
  formId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FormResponsesDialog({ formId, open, onOpenChange }: FormResponsesDialogProps) {
  const { form } = useFormDetails(formId);

  if (!form) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Réponses au formulaire: {form.templateName}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Période: {form.period}</span>
          <span>•</span>
          <span>Taux de réponse: {form.responseRate}%</span>
        </div>
        <ScrollArea className="h-full pr-4">
          {form.responses.map((response) => (
            <div
              key={response.companyId}
              className="mb-6 rounded-lg border p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{response.companyName}</h3>
                  <p className="text-sm text-muted-foreground">
                    Répondu le {response.submittedAt}
                  </p>
                </div>
                <Badge>{response.companyType}</Badge>
              </div>
              <div className="space-y-4">
                {response.answers.map((answer, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm font-medium">{answer.question}</p>
                    <p className="text-sm text-muted-foreground">
                      {answer.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}