"use client";

import { Sidebar } from "@/components/admin/sidebar";
import { Header } from "@/components/admin/header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      {/* Ajout de lg:pl-72 pour décaler le contenu de la largeur de la sidebar en version desktop */}
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-72">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}