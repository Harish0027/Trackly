import { Button } from '@/components/ui/button';
import ProjectAvatar from '@/features/projects/components/project-avatar';
import TaskViewSwitcher from '@/features/tasks/components/task-view-switcher';
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ProjectIdPageProps {
  params: {
    projectId: string;
    workSpaceId: string;
  };
}

const initialValues = {
  name: "harish",
  imageUrl: "https://via.placeholder.com/150", // sample image URL
};

const ProjectIdPage = ({ params }: ProjectIdPageProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={initialValues.name}
            image={initialValues.imageUrl}
            className="w-8 h-8"
          />
          <p className="text-lg font-semibold">{initialValues.name}</p>
        </div>
        <div>
          <Button asChild variant="secondary" size="xs">
            <Link href={`/workspaces/${params.workSpaceId}/project/${params.projectId}/settings`}>
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>
      <TaskViewSwitcher/>
    </div>
  );
};

export default ProjectIdPage;
