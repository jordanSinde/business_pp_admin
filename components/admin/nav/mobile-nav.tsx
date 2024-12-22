"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavItems } from "./nav-items";
import { UserMenu } from "./user-menu";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <div className="flex h-full flex-col bg-card px-6">
          <div className="flex h-16 shrink-0 items-center">
            <h2 className="text-lg font-semibold">Administration</h2>
          </div>
          <NavItems onNavigate={() => setOpen(false)} />
          <UserMenu onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}