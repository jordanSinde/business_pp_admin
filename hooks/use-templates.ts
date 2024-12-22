import { useState } from "react";

interface Template {
  id: string;
  name: string;
  description: string;
  questions: Array<{
    id: string;
    text: string;
    type: "text" | "number" | "choice";
    required: boolean;
  }>;
  usageCount: number;
}

export function useTemplates() {
  const [templates] = useState<Template[]>([
    {
      id: "1",
      name: "Suivi Trimestriel des Partenariats",
      description: "Évaluation trimestrielle des progrès et défis",
      questions: [
        {
          id: "q1",
          text: "Quels sont les principaux objectifs atteints ce trimestre ?",
          type: "text",
          required: true
        },
        {
          id: "q2",
          text: "Nombre de projets collaboratifs en cours",
          type: "number",
          required: true
        }
      ],
      usageCount: 45
    },
    {
      id: "2",
      name: "Évaluation d'Impact Économique",
      description: "Mesure de l'impact économique des partenariats",
      questions: [
        {
          id: "q1",
          text: "Chiffre d'affaires généré par les partenariats (en millions FCFA)",
          type: "number",
          required: true
        },
        {
          id: "q2",
          text: "Emplois créés grâce aux partenariats",
          type: "number",
          required: true
        }
      ],
      usageCount: 12
    }
  ]);

  return { templates };
}