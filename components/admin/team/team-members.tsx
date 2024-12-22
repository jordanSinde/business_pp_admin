"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@exemple.com",
    role: "Super Admin",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=75",
    lastActive: "Il y a 2 heures"
  },
  {
    id: 2,
    name: "Marie Claire",
    email: "marie.claire@exemple.com",
    role: "Admin Niveau 2",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=75",
    lastActive: "En ligne"
  },
  {
    id: 3,
    name: "Paul Martin",
    email: "paul.martin@exemple.com",
    role: "Admin Niveau 1",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&q=75",
    lastActive: "Il y a 1 jour"
  }
];

export function TeamMembers() {
  return (
    <div className="rounded-md border">
      <div className="p-6">
        <h2 className="text-xl font-semibold">Membres de l'équipe</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Liste des administrateurs actifs
        </p>
      </div>
      <div className="divide-y">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-6"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.imageUrl} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-muted-foreground">
                  {member.email}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={member.role === "Super Admin" ? "default" : "secondary"}>
                {member.role}
              </Badge>
              <div className="text-sm text-muted-foreground">
                {member.lastActive}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Modifier le rôle</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Révoquer l'accès
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}