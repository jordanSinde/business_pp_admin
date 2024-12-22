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
import { useTemplates } from "@/hooks/use-templates";

export function FormTemplatesList() {
  const { templates } = useTemplates();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom du modèle</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Utilisation</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell className="font-medium">{template.name}</TableCell>
              <TableCell>{template.description}</TableCell>
              <TableCell>{template.questions.length} questions</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {template.usageCount} fois utilisé
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  Modifier
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}