"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompanyFilters } from "@/hooks/use-company-filters";

interface CompanyFilterProps {
  onCompaniesSelected: (companies: string[]) => void;
}

export function CompanyFilter({ onCompaniesSelected }: CompanyFilterProps) {
  const [type, setType] = useState("");
  const [domain, setDomain] = useState("");
  const [subdomain, setSubdomain] = useState("");
  
  const { 
    types, 
    domains, 
    subdomains,
    filteredCompanies 
  } = useCompanyFilters({ type, domain });

  const handleTypeChange = (value: string) => {
    setType(value);
    setDomain("");
    setSubdomain("");
    onCompaniesSelected(filteredCompanies);
  };

  const handleDomainChange = (value: string) => {
    setDomain(value);
    setSubdomain("");
    onCompaniesSelected(filteredCompanies);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Type d'entreprise</Label>
        <Select value={type} onValueChange={handleTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Domaine</Label>
        <Select value={domain} onValueChange={handleDomainChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un domaine" />
          </SelectTrigger>
          <SelectContent>
            {domains.map((domain) => (
              <SelectItem key={domain.id} value={domain.id}>
                {domain.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Sous-domaine</Label>
        <Select 
          value={subdomain} 
          onValueChange={(value) => {
            setSubdomain(value);
            onCompaniesSelected(filteredCompanies);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un sous-domaine" />
          </SelectTrigger>
          <SelectContent>
            {subdomains.map((subdomain) => (
              <SelectItem key={subdomain.id} value={subdomain.id}>
                {subdomain.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}