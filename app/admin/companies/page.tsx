import { CompaniesHeader } from "@/components/admin/companies/companies-header";
import { CompaniesList } from "@/components/admin/companies/companies-list";

export default function CompaniesPage() {
  return (
    <div className="space-y-8">
      <CompaniesHeader />
      <CompaniesList />
    </div>
  );
}