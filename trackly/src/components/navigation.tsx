"use client"

import { cn } from "@/lib/utils";
import { SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UserIcon,
    activeIcon: UserIcon,
  },
];

const Navigation = () => {
  const pathname=usePathname();
  const params=useParams();
  const workspaceId=params.workspaceId;
  return (
    <div>
      <ul className="flex flex-col">
        {routes.map((item) => {
         const fullHref = `/workspaces/${workspaceId}/${item.href}`;
          const isActive = false;
          const Icon = isActive ? item.activeIcon : item.icon;

          return (
            <Link href={fullHref} key={fullHref}>
              <div
                className={cn(
                  "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                  isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
                )}
              >
                <Icon className="size-5 text-neutral-500" />
                {item.label}:{workspaceId}
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
