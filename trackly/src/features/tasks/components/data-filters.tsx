"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListCheckIcon, Users, FolderKanban, Calendar as CalendarIcon } from "lucide-react";
import { TaskStatus } from "../constants";
import { useTaskFilters } from "../hooks/use-task-filters";
import DatePicker from "@/components/date-picker";

interface DataFilterProps {
  hideProjectFilter?: boolean;
}

const Projects = [
  { id: "p1", name: "Website Redesign", imageUrl: "/images/project1.png" },
  { id: "p2", name: "Mobile App", imageUrl: "/images/project2.png" },
  { id: "p3", name: "Marketing Campaign", imageUrl: "/images/project3.png" },
  { id: "p4", name: "Backend Refactor", imageUrl: "/images/project4.png" },
  { id: "p5", name: "New Feature Launch", imageUrl: "/images/project5.png" },
];

const Members = [
  { id: "m1", name: "Alice Johnson" },
  { id: "m2", name: "Bob Smith" },
  { id: "m3", name: "Charlie Lee" },
  { id: "m4", name: "Diana Ross" },
  { id: "m5", name: "Ethan Hunt" },
  { id: "m6", name: "Fiona Gallagher" },
];

export const DataFilters = ({ hideProjectFilter }: DataFilterProps) => {
  const { status, assigneeId, projectId, dueDate, setQuery } = useTaskFilters();

  // Handlers
  const onStatusChange = (value: string) => {
    setQuery({ status: value === "all" ? null : (value as TaskStatus) });
  };

  const onProjectChange = (value: string) => {
    setQuery({ projectId: value === "all" ? null : value });
  };

  const onMemberChange = (value: string) => {
    setQuery({ assigneeId: value === "all" ? null : value });
  };

  const onDueDateChange = (date: Date | undefined) => {
    setQuery({ dueDate: date ? date.toISOString() : null }); // ✅ store ISO string in query
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {/* Status Filter */}
      <Select defaultValue={status ?? undefined} onValueChange={onStatusChange}>
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <ListCheckIcon className="size-4 mr-2" />
            <SelectValue placeholder="All statuses" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectSeparator />
          <SelectItem value={TaskStatus.BACKLOG}>Backlog</SelectItem>
          <SelectItem value={TaskStatus.TODO}>Todo</SelectItem>
          <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
          <SelectItem value={TaskStatus.IN_REVIEW}>In Review</SelectItem>
          <SelectItem value={TaskStatus.DONE}>Done</SelectItem>
        </SelectContent>
      </Select>

      {/* Project Filter */}
      {!hideProjectFilter && (
        <Select defaultValue={projectId ?? undefined} onValueChange={onProjectChange}>
          <SelectTrigger className="w-full lg:w-auto h-8">
            <div className="flex items-center pr-2">
              <FolderKanban className="size-4 mr-2" />
              <SelectValue placeholder="All projects" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All projects</SelectItem>
            <SelectSeparator />
            {Projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                {project.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* Assignee Filter */}
      <Select defaultValue={assigneeId ?? undefined} onValueChange={onMemberChange}>
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <Users className="size-4 mr-2" />
            <SelectValue placeholder="All members" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All members</SelectItem>
          <SelectSeparator />
          {Members.map((member) => (
            <SelectItem key={member.id} value={member.id}>
              {member.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Due Date Filter → ✅ replaced Select with DatePicker */}
      <div className="w-full lg:w-auto h-8">
        <DatePicker
          value={dueDate ? new Date(dueDate) : undefined}
          onChange={onDueDateChange}
          placeholder="All due dates"
        />
      </div>
    </div>
  );
};
