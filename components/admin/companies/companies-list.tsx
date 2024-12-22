"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RejectionDialog } from "./rejection-dialog";
import { CompaniesFilters } from "./companies-filters";
import { CompanyActions } from "./company-actions";
import { useCompanies } from "@/hooks/use-companies";
import { useLanguage } from "@/lib/i18n/language-context";

export function CompaniesList() {
  const { t } = useLanguage();
  const [filters, setFilters] = useState({
    type: "all",
    domain: "all",
    subdomain: "all",
  });
  const [rejectionDialog, setRejectionDialog] = useState<{
    open: boolean;
    companyId: number | null;
  }>({ open: false, companyId: null });

  const { companies, filteredCompanies } = useCompanies(filters);

  const handleReject = (companyId: number) => {
    setRejectionDialog({ open: true, companyId });
  };

  return (
    <div className="space-y-6">
      <CompaniesFilters
        {...filters}
        onTypeChange={(type) => setFilters((prev) => ({ ...prev, type }))}
        onDomainChange={(domain) => setFilters((prev) => ({ ...prev, domain }))}
        onSubdomainChange={(subdomain) => setFilters((prev) => ({ ...prev, subdomain }))}
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("companies.table.name")}</TableHead>
              <TableHead>{t("companies.table.type")}</TableHead>
              <TableHead>{t("companies.table.domain")}</TableHead>
              <TableHead>{t("companies.table.subdomain")}</TableHead>
              <TableHead>{t("companies.table.status")}</TableHead>
              <TableHead>{t("companies.table.employees")}</TableHead>
              <TableHead className="w-[250px]">{t("common.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium">{company.name}</TableCell>
                <TableCell>{company.type}</TableCell>
                <TableCell>{company.domain}</TableCell>
                <TableCell>{company.subdomain}</TableCell>
                <TableCell>
                  <Badge variant={company.status === t("common.active") ? "default" : "secondary"}>
                    {company.status}
                  </Badge>
                </TableCell>
                <TableCell>{company.employees}</TableCell>
                <TableCell>
                  <CompanyActions
                    status={company.status}
                    onApprove={() => {
                      // Handle approval
                    }}
                    onReject={() => handleReject(company.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <RejectionDialog
        open={rejectionDialog.open}
        companyId={rejectionDialog.companyId}
        onOpenChange={(open) =>
          setRejectionDialog({ open, companyId: open ? rejectionDialog.companyId : null })
        }
      />
    </div>
  );
}