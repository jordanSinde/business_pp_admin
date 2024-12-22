import { useState, useEffect } from "react";

interface FormResponse {
  companyId: string;
  companyName: string;
  companyType: string;
  submittedAt: string;
  answers: Array<{
    question: string;
    answer: string;
  }>;
}

interface FormDetail {
  id: string;
  templateName: string;
  period: string;
  responseRate: number;
  responses: FormResponse[];
}

export function useFormDetails(formId: string | null) {
  const [form, setForm] = useState<FormDetail | null>(null);

  useEffect(() => {
    if (!formId) return;

    // Simulated data - In production, this would fetch from an API
    setForm({
      id: formId,
      templateName: "Suivi Trimestriel des Partenariats",
      period: "Q1 2024",
      responseRate: 88,
      responses: [
        {
          companyId: "1",
          companyName: "Tech Solutions Cameroun",
          companyType: "Locale",
          submittedAt: "15 Mars 2024",
          answers: [
            {
              question: "Quels sont les principaux objectifs atteints ce trimestre ?",
              answer: "Lancement réussi de 2 projets collaboratifs dans le domaine du développement logiciel. Formation de 15 développeurs locaux."
            },
            {
              question: "Nombre de projets collaboratifs en cours",
              answer: "3"
            }
          ]
        },
        {
          companyId: "2",
          companyName: "Global Investments Ltd",
          companyType: "Étrangère",
          submittedAt: "14 Mars 2024",
          answers: [
            {
              question: "Quels sont les principaux objectifs atteints ce trimestre ?",
              answer: "Investissement de 500M FCFA dans les startups locales. Création d'un programme de mentorat pour entrepreneurs."
            },
            {
              question: "Nombre de projets collaboratifs en cours",
              answer: "5"
            }
          ]
        }
      ]
    });
  }, [formId]);

  return { form };
}