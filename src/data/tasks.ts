import { TaskList as TaskListType, TaskStatus } from "../types/tasks.ts";

export const taskData: TaskListType = {
  tasks: [
    {
      id: 1,
      title: "task item",
      description: "task description",
      status: TaskStatus.Active,
    },
    {
      id: 2,
      title: "task item 2",
      description: "task description",
      status: TaskStatus.Active,
    },
    {
      id: 3,
      title: "task item 3",
      description: "task description",
      status: TaskStatus.Complete,
    },
    {
      id: 4,
      title: "task item 4",
      description: "task description",
      status: TaskStatus.Deleted,
    },
  ],
};
