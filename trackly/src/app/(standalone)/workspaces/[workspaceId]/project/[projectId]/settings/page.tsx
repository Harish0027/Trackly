import EditProjectForm from "@/features/projects/components/edit-project-form";

export default function ProjectIdSettingsPage() {
  const projectData = {
    name: "My Awesome Project",
    id: "project123",
    workspaceId: "workspace456",
    inviteCode: "join-my-project"
  };

  return (
    <div>
      <EditProjectForm initialValues={projectData} />
    </div>
  );
}
