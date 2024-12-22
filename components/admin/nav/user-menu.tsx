"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";

interface UserMenuProps {
  onNavigate?: () => void;
}

export function UserMenu({ onNavigate }: UserMenuProps) {
  return (
    <div className="mt-auto">
      <Link
        href="/logout"
        onClick={onNavigate}
        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <LogOut className="h-6 w-6 shrink-0" />
        Déconnexion
      </Link>
    </div>
  );
}