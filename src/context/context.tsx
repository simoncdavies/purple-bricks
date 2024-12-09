import React, { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducers/tasks";
import { TaskReducerAction } from "../types/actions";
import { StateType } from "../types/state";
import { taskData } from "../data/tasks";

interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<TaskReducerAction>;
}

interface ProviderProps {
  children: React.ReactNode; // Define children as a required prop
}

const Context = createContext<ContextType | undefined>(undefined);

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, taskData);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useAppContext = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
