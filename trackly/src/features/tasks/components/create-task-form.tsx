"use client";

import DatePicker from "@/components/date-picker";
import { DottedSeparator } from "@/components/dotted-separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SelectGroup,
  Select,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProjectAvatar from "@/features/projects/components/project-avatar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TaskStatus } from "../constants";

interface CreateTaskFormProps {
  onCancel: () => void;
  projectOptions: { id: string; name: string; imageUrl: string }[];
  memberOptions: { id: string; name: string }[];
}

interface FormData {
  name: string;
  dueDate?: Date;
  assigneeId?: string;
  status?: TaskStatus;
  project?: string; // or projectId if you prefer
}

export default function CreateTaskForm({
  onCancel,
  projectOptions,
  memberOptions,
}: CreateTaskFormProps) {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      dueDate: undefined,
      assigneeId: undefined,
    },
  });

  const [isPending, setIsPending] = useState(false);

  const onSubmit = (values: FormData) => {
    console.log("Task created:", values);
    console.log("Projects available:", projectOptions);
    console.log("Members available:", memberOptions);
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-4">
        <CardTitle className="text-xl font-bold">Create a new task</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              {/* Task name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter task name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Due date */}
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <FormControl>
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Pick a due date"
                        className="w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Assignee */}
              <FormField
                control={form.control}
                name="assigneeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assignee</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Assignee" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        {memberOptions.map((member) => {
                          const avatarFallback = member.name[0]?.toUpperCase();
                          return (
                            <SelectItem key={member.id} value={member.id}>
                              <div className="flex items-center gap-x-2">
                                <Avatar className="size-10 hover:opacity-75 transition border border-neutral-200">
                                  <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
                                    {avatarFallback}
                                  </AvatarFallback>
                                </Avatar>
                                {member.name}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                       <SelectItem value={TaskStatus.BACKLOG}>
                         Backlog
                       </SelectItem>

                        <SelectItem value={TaskStatus.IN_PROGRESS}>
                         In Progress
                       </SelectItem>
                        <SelectItem value={TaskStatus.IN_REVIEW}>
                         In review
                       </SelectItem>
                        <SelectItem value={TaskStatus.TODO}>
                         Todo
                       </SelectItem>
                        <SelectItem value={TaskStatus.DONE}>
                         Done
                       </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

                <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Project" />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage />
                      <SelectContent>
                        {projectOptions.map((project) => {
                          const avatarFallback = project.name[0]?.toUpperCase();
                          return (
                            <SelectItem key={project.id} value={project.id}>
                              <div className="flex items-center gap-x-2">
                                <ProjectAvatar className="size-6" name={project.name} image={project.imageUrl} />
                                {project.name}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <DottedSeparator className="py-7" />

            {/* Footer buttons */}
            <div className="flex items-center justify-between">
              <Button
                type="button"
                size="lg"
                variant="secondary"
                onClick={onCancel}
                disabled={isPending}
                className={cn(!onCancel && "invisible")}
              >
                Cancel
              </Button>
              <Button type="submit" size="lg" disabled={isPending}>
                Create Task
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
