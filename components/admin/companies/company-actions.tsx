"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

interface CompanyActionsProps {
  status: string;
  onApprove: () => void;
  onReject: () => void;
}

export function CompanyActions({ status, onApprove, onReject }: CompanyActionsProps) {
  const { t } = useLanguage();

  if (status !== t("common.pending")) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="default"
        size="sm"
        className="flex-1 sm:flex-none min-w-[100px]"
        onClick={onApprove}
      >
        {t("common.approve")}
      </Button>
      <Button
        variant="destructive"
        size="sm"
        className="flex-1 sm:flex-none min-w-[100px]"
        onClick={onReject}
      >
        {t("common.reject")}
      </Button>
    </div>
  );
}