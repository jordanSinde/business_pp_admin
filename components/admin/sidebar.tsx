"use client";

import { NavItems } from "./nav/nav-items";
import { UserMenu } from "./nav/user-menu";

export function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <h2 className="text-lg font-semibold">Administration</h2>
        </div>
        <NavItems />
        <UserMenu />
      </div>
    </div>
  );
}