"use client";

import { useState, useEffect, useMemo } from "react";

interface Company {
  id: number;
  name: string;
  type: string;
  domain: string;
  subdomain: string;
  status: string;
  employees: string;
}

interface Filters {
  type: string;
  domain: string;
  subdomain: string;
}

const companiesData = [
  {
    id: 1,
    name: "Tech Solutions Cameroun",
    type: "Locale",
    domain: "Technologies",
    subdomain: "Logiciel",
    status: "En attente",
    employees: "50-100",
  },
  {
    id: 2,
    name: "Global Investments Ltd",
    type: "Étrangère",
    domain: "Finance",
    subdomain: "Conseil",
    status: "En attente",
    employees: "100-250",
  },
  {
    id: 3,
    name: "HealthTech Africa",
    type: "Locale",
    domain: "Santé",
    subdomain: "Matériel",
    status: "Active",
    employees: "25-50",
  },
];

export function useCompanies(filters: Filters) {
  const [companies] = useState<Company[]>(companiesData);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      if (filters.type !== "all" && company.type !== filters.type) return false;
      if (filters.domain !== "all" && company.domain !== filters.domain) return false;
      if (filters.subdomain !== "all" && company.subdomain !== filters.subdomain) return false;
      return true;
    });
  }, [companies, filters]);

  return {
    companies,
    filteredCompanies,
  };
}