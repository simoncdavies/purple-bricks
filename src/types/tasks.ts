export enum TaskActions {
  Add = "TaskAdd",
  Edit = "TaskEdit",
  Complete = "TaskComplete",
  Delete = "TaskDelete",
}

export enum TaskStatus {
  Pending = "pending",
  Active = "active",
  Complete = "complete",
  Deleted = "deleted",
}

export interface TaskType {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface TaskElement extends TaskType {
  markAsComplete: (taskID: number) => void;
  deleteTask: (taskID: number) => void;
  editTaskForm: (taskID: number) => void;
}

export interface TaskListType {
  tasks: TaskType[];
}
