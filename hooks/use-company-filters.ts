import { useState, useEffect } from "react";

interface FilterOptions {
  type: string;
  domain: string;
}

export function useCompanyFilters({ type, domain }: FilterOptions) {
  const types = [
    { id: "local", name: "Locale" },
    { id: "foreign", name: "Étrangère" }
  ];

  const domains = [
    { id: "tech", name: "Technologies" },
    { id: "finance", name: "Finance" },
    { id: "health", name: "Santé" }
  ];

  const subdomains = [
    { id: "software", name: "Logiciel" },
    { id: "hardware", name: "Matériel" },
    { id: "consulting", name: "Conseil" }
  ];

  const filteredCompanies = [
    "Company 1",
    "Company 2",
    "Company 3"
  ];

  return {
    types,
    domains,
    subdomains,
    filteredCompanies
  };
}