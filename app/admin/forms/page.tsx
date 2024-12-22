"use client";

import { FormsList } from "@/components/admin/forms/forms-list";
import { FormsHeader } from "@/components/admin/forms/forms-header";

export default function FormsPage() {
  return (
    <div className="space-y-8">
      <FormsHeader />
      <FormsList />
    </div>
  );
}