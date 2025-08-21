// CreateTaskFormWrapper.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Loader } from "lucide-react";
import CreateTaskForm from "./create-task-form";

interface CreateTasksFormWrapperProps {
  onCancel: () => void;
}

export const CreateTaskFormWrapper = ({ onCancel }: CreateTasksFormWrapperProps) => {
  const workspaceId = "ws2";
  const isLoading = false; // change to true when loading

  // Dummy data for projects
  const projects = {
    documents: [
      {
        $id: "p1",
        name: "Website Redesign",
        imageUrl: "https://via.placeholder.com/100?text=Project+1",
      },
      {
        $id: "p2",
        name: "Mobile App Launch",
        imageUrl: "https://via.placeholder.com/100?text=Project+2",
      },
      {
        $id: "p3",
        name: "Marketing Campaign",
        imageUrl: "https://via.placeholder.com/100?text=Project+3",
      },
    ],
  };

  // Dummy data for members
  const members = {
    documents: [
      { $id: "m1", name: "Alice Johnson" },
      { $id: "m2", name: "Bob Smith" },
      { $id: "m3", name: "Charlie Brown" },
    ],
  };

  // Mapping logic
  const projectOptions = projects.documents.map((project) => ({
    id: project.$id,
    name: project.name,
    imageUrl: project.imageUrl,
  }));

  const memberOptions = members.documents.map((member) => ({
    id: member.$id,
    name: member.name,
  }));

  if (isLoading) {
    return (
      <Card className="w-full h-[714px] border-none shadow-none">
        <CardContent className="flex items-center justify-center h-full">
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <CreateTaskForm
      onCancel={onCancel}
      projectOptions={projectOptions}
      memberOptions={memberOptions}
    />
  );
};
