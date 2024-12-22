"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFormResponses } from "@/hooks/use-form-responses";

interface FormResponsesListProps {
  onViewResponses: (formId: string) => void;
}

export function FormResponsesList({ onViewResponses }: FormResponsesListProps) {
  const { forms } = useFormResponses();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Modèle</TableHead>
            <TableHead>Période</TableHead>
            <TableHead>Entreprises</TableHead>
            <TableHead>Réponses</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form) => (
            <TableRow key={form.id}>
              <TableCell className="font-medium">{form.templateName}</TableCell>
              <TableCell>{form.period}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {form.totalCompanies} entreprises
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={form.responseRate >= 75 ? "default" : "secondary"}>
                  {form.responses}/{form.totalCompanies} ({form.responseRate}%)
                </Badge>
              </TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onViewResponses(form.id)}
                >
                  Voir les réponses
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}