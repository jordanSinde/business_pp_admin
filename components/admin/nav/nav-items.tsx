"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Building2,
  Users,
  FileText,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Tableau de bord", href: "/admin", icon: BarChart3 },
  { name: "Entreprises", href: "/admin/companies", icon: Building2 },
  { name: "Équipe", href: "/admin/team", icon: Users },
  { name: "Formulaires", href: "/admin/forms", icon: FileText },
  { name: "Paramètres", href: "/admin/settings", icon: Settings },
];

interface NavItemsProps {
  onNavigate?: () => void;
}

export function NavItems({ onNavigate }: NavItemsProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}