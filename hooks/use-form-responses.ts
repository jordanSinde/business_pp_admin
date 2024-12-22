import { useState } from "react";

interface FormResponse {
  id: string;
  templateName: string;
  period: string;
  totalCompanies: number;
  responses: number;
  responseRate: number;
}

export function useFormResponses() {
  const [forms] = useState<FormResponse[]>([
    {
      id: "1",
      templateName: "Suivi Trimestriel des Partenariats",
      period: "Q1 2024",
      totalCompanies: 25,
      responses: 22,
      responseRate: 88
    },
    {
      id: "2",
      templateName: "Évaluation d'Impact Économique",
      period: "2023",
      totalCompanies: 40,
      responses: 35,
      responseRate: 87
    }
  ]);

  return { forms };
}