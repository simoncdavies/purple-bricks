import { TaskActions, TaskStatus } from "./tasks.ts";

export type TaskReducerAction =
  | {
      type: TaskActions.Add;
      text: string;
      description: string;
      status: TaskStatus;
    }
  | {
      type: TaskActions.Edit;
      taskID: number;
      text: string;
      description: string;
      status: TaskStatus;
    }
  | {
      type: TaskActions.Complete | TaskActions.Delete;
      taskID: number;
    };
