"use client";

import React from "react";
import { useRouter } from 'next/navigation'; // ✅ Correct for App Router
import { RiAddCircleFill } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Link from "next/link";

const WorkSpaceSwitcher = () => {
  const router = useRouter();

  const workspaces = [
    {
      id: "ws1",
      name: "Marketing Team",
    },
    {
      id: "ws2",
      name: "Engineering Team",
    },
    {
      id: "ws3",
      name: "Design Squad",
    },
    {
      id: "ws4",
      name: "Product Management",
    },
  ];

  const handleChange = (value:string) => {
    router.push(`/workspaces/${value}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Workspaces</p>
        <Link href={"/workspaces/create"}>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
        </Link>
      </div>

      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {workspaces.map((workspace) => (
            <SelectItem key={workspace.id} value={workspace.id}>
              {workspace.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default WorkSpaceSwitcher;
