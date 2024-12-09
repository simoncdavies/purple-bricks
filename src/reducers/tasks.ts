import { TaskType, TaskActions, TaskStatus } from "../types/tasks.ts";
import { StateType } from "../types/state.ts";
import { TaskReducerAction } from "../types/actions.ts";

export const taskReducer = (state: StateType, action: TaskReducerAction) => {
  switch (action.type) {
    case TaskActions.Add: {
      const newID =
        Math.max(...state.tasks.map((task: TaskType) => task.id)) + 1;
      const newTask: TaskType = {
        id: newID,
        title: action.text,
        description: action.description,
        status: action.status,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActions.Edit: {
      return {
        ...state,
        tasks: state.tasks.map((task: TaskType) =>
          task.id === action.taskID
            ? {
                ...task,
                title: action.text,
                description: action.description,
                status: action.status,
              }
            : task,
        ),
      };
    }
    case TaskActions.Complete:
      return {
        ...state,
        tasks: state.tasks.map((task: TaskType) =>
          task.id === action.taskID
            ? { ...task, status: TaskStatus.Complete }
            : task,
        ),
      };
    case TaskActions.Delete: {
      return {
        ...state,
        tasks: state.tasks.map((task: TaskType) =>
          task.id === action.taskID
            ? { ...task, status: TaskStatus.Deleted }
            : task,
        ),
      };
    }
    default:
      return state;
  }
};
