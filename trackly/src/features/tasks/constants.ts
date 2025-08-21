import { Models } from "node-appwrite";

// Define possible task statuses
export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  IN_REVIEW = "IN_REVIEW",
  BACKLOG = "BACKLOG",
}

// Define Task type
export type Task = Models.Document & {
  name: string;
  status: TaskStatus;
  assignee: { name: string; imageUrl: string };
  project: { name: string; imageUrl: string };
  position: number;
  dueDate: string;
};
