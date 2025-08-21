"use client";

import React, { useState } from "react";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Loader, PlusIcon } from "lucide-react";

import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
import { DataFilters } from "./data-filters";
import { TaskStatus, Task } from "../constants";
import { DataTable } from "./data-table";
import { columns } from "./column";

export default function TaskViewSwitcher() {
  const [view, setView] = useState<"table" | "kanban" | "calendar">("table");
  const [showForm, setShowForm] = useState(false);

  const handleCancel = () => setShowForm(false);

  const mockTasks: Task[] = [
    {
      $id: "1",
      $collectionId: "tasks",
      $databaseId: "default",
      $createdAt: new Date().toISOString(),
      $updatedAt: new Date().toISOString(),
      $permissions: [],
      $sequence: 1,
      name: "Setup project repository",
      status: TaskStatus.TODO,
      assignee: { name: "Alice", imageUrl: "/avatars/alice.jpg" },
      project: { name: "Project Alpha", imageUrl: "/projects/alpha.jpg" },
      position: 1,
      dueDate: "2025-08-20",
    },
    {
      $id: "2",
      $collectionId: "tasks",
      $databaseId: "default",
      $createdAt: new Date().toISOString(),
      $updatedAt: new Date().toISOString(),
      $permissions: [],
      $sequence: 2,
      name: "Design database schema",
      status: TaskStatus.IN_PROGRESS,
      assignee: { name: "Bob", imageUrl: "/avatars/bob.jpg" },
      project: { name: "Project Alpha", imageUrl: "/projects/alpha.jpg" },
      position: 2,
      dueDate: "2025-08-22",
    },
    {
      $id: "3",
      $collectionId: "tasks",
      $databaseId: "default",
      $createdAt: new Date().toISOString(),
      $updatedAt: new Date().toISOString(),
      $permissions: [],
      $sequence: 3,
      name: "Implement authentication",
      status: TaskStatus.IN_REVIEW,
      assignee: { name: "Charlie", imageUrl: "/avatars/charlie.jpg" },
      project: { name: "Project Beta", imageUrl: "/projects/beta.jpg" },
      position: 3,
      dueDate: "2025-08-25",
    },
    {
      $id: "4",
      $collectionId: "tasks",
      $databaseId: "default",
      $createdAt: new Date().toISOString(),
      $updatedAt: new Date().toISOString(),
      $permissions: [],
      $sequence: 4,
      name: "Create landing page",
      status: TaskStatus.DONE,
      assignee: { name: "Alice", imageUrl: "/avatars/alice.jpg" },
      project: { name: "Project Beta", imageUrl: "/projects/beta.jpg" },
      position: 4,
      dueDate: "2025-08-15",
    },
  ];

  if (showForm) return <CreateTaskFormWrapper onCancel={handleCancel} />;

  const isLoading = false;

  return (
    <div>
      <Tabs
        value={view}
        onValueChange={(val) => setView(val as "table" | "kanban" | "calendar")}
        className="flex-1 w-full border rounded-lg"
      >
        <div className="h-full flex flex-col overflow-auto p-4">
          <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
            <TabsList className="w-full lg:w-auto">
              <TabsTrigger value="table" className="w-full lg:w-auto h-8">
                Table
              </TabsTrigger>
              <TabsTrigger value="kanban" className="w-full lg:w-auto h-8">
                Kanban
              </TabsTrigger>
              <TabsTrigger value="calendar" className="w-full lg:w-auto h-8">
                Calendar
              </TabsTrigger>
            </TabsList>
            <Button size="sm" className="w-full lg:w-auto" onClick={() => setShowForm(true)}>
              <PlusIcon className="size-4 mr-2" />
              New
            </Button>
          </div>

          <DottedSeparator className="my-4" />
          <DataFilters />
          <DottedSeparator className="my-6" />

          {isLoading ? (
            <div className="w-full border rounded-lg h-[200px] flex flex-col items-center justify-center">
              <Loader className="size-5 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              <TabsContent value="table" className="mt-0">
                <DataTable columns={columns} data={mockTasks} />
              </TabsContent>
              <TabsContent value="kanban" className="mt-0">
                Data kanban
              </TabsContent>
              <TabsContent value="calendar" className="mt-0">
                Data Calendar
              </TabsContent>
            </>
          )}
        </div>
      </Tabs>
    </div>
  );
}
