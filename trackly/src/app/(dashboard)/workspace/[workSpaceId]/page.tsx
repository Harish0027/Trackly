"use client";

import { useParams } from "next/navigation";
import React from "react";

const WorkSpaceIdPage = () => {
  const params = useParams();
  const workspaceId = params.workSpaceId as string; // ensure it's typed

  return <div>Workspace ID: {workspaceId}</div>;
};

export default WorkSpaceIdPage;
