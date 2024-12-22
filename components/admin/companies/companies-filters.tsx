"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/i18n/language-context";

interface CompaniesFiltersProps {
  type: string;
  domain: string;
  subdomain: string;
  onTypeChange: (value: string) => void;
  onDomainChange: (value: string) => void;
  onSubdomainChange: (value: string) => void;
}

export function CompaniesFilters({
  type,
  domain,
  subdomain,
  onTypeChange,
  onDomainChange,
  onSubdomainChange,
}: CompaniesFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="space-y-2 flex-1">
        <Label>{t("companies.filters.type")}</Label>
        <Select value={type} onValueChange={onTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder={t("companies.filters.allTypes")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("companies.filters.allTypes")}</SelectItem>
            <SelectItem value="local">{t("companies.filters.local")}</SelectItem>
            <SelectItem value="foreign">{t("companies.filters.foreign")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 flex-1">
        <Label>{t("companies.filters.domain")}</Label>
        <Select value={domain} onValueChange={onDomainChange}>
          <SelectTrigger>
            <SelectValue placeholder={t("companies.filters.allDomains")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("companies.filters.allDomains")}</SelectItem>
            <SelectItem value="tech">{t("companies.filters.tech")}</SelectItem>
            <SelectItem value="finance">{t("companies.filters.finance")}</SelectItem>
            <SelectItem value="health">{t("companies.filters.health")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 flex-1">
        <Label>{t("companies.filters.subdomain")}</Label>
        <Select value={subdomain} onValueChange={onSubdomainChange}>
          <SelectTrigger>
            <SelectValue placeholder={t("companies.filters.allSubdomains")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("companies.filters.allSubdomains")}</SelectItem>
            <SelectItem value="software">{t("companies.filters.software")}</SelectItem>
            <SelectItem value="hardware">{t("companies.filters.hardware")}</SelectItem>
            <SelectItem value="consulting">{t("companies.filters.consulting")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}