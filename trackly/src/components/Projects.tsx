"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Projects = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const workSpaceId = segments[2]; 

  const projects = [
    { id: "p1", name: "Project One" },
    { id: "p2", name: "Project Two" },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Projects</p>
        {workSpaceId && (
          <Link href={`/workspaces/${workSpaceId}/project/create`}>
            <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
          </Link>
        )}
      </div>

      {projects.length > 0 ? (
        projects.map((project) => {
          const href = `/workspaces/${workSpaceId}/project/${project.id}`;
          const isActive = pathname === href;

          return (
            <Link href={href} key={project.id}>
              <div
                className={cn(
                  "flex items-center gap-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
                  isActive &&
                    "bg-white shadow-sm hover:opacity-100 text-primary"
                )}
              >
                <span className="truncate">{project.name}</span>
              </div>
            </Link>
          );
        })
      ) : (
        <p className="text-neutral-400 text-sm">No projects yet</p>
      )}
    </div>
  );
};

export default Projects;
