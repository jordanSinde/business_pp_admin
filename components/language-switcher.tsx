"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="w-[40px]"
    >
      {language.toUpperCase()}
    </Button>
  );
}