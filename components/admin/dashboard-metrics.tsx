"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Users2, HandshakeIcon, FileText } from "lucide-react";

const metrics = [
  {
    title: "Entreprises Locales",
    value: "124",
    description: "+4.5% depuis le mois dernier",
    icon: Building2,
  },
  {
    title: "Entreprises Étrangères",
    value: "89",
    description: "+2.1% depuis le mois dernier",
    icon: Users2,
  },
  {
    title: "Partenariats Actifs",
    value: "45",
    description: "+12.5% depuis le mois dernier",
    icon: HandshakeIcon,
  },
  {
    title: "Formulaires en Attente",
    value: "23",
    description: "À traiter cette semaine",
    icon: FileText,
  },
];

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}