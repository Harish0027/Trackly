"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DottedSeparator } from "@/components/dotted-separator";
import React, { useState } from "react";
import { Loader, LogOut } from "lucide-react";

const UserButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const name = "Harish";
  const email = "sutarharish143@gmail.com";

  const avatarFallback = name
    ? name[0].toUpperCase()
    : email
    ? email[0].toUpperCase()
    : "U";

  if (loading) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition border border-neutral-200">
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px] transition border border-neutral-200">
            <AvatarFallback className="bg-neutral-200 text-xl font-medium text-neutral-500 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">
            {name ||"User"}
        </p>
        <p className="text-xs text-neutral-500">
            {email}
        </p>
          </div>
        </div>
        <DottedSeparator className="mb-1" />
        <DropdownMenuItem className="h-10 flex items-center justify-center text-amber-700 cursor-pointer">
            <LogOut  className="size-4 mr-2">
                Log Out
            </LogOut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
