import { useState } from "react";
import { TaskType, TaskActions, TaskStatus } from "../../types/tasks.ts";
import { useAppContext } from "../../context/context.tsx";
import Task from "../task/task.component.tsx";
import TaskForm from "../task-form/task-form.component.tsx";
import "./task-list.component.css";

const TaskList = () => {
  const { state, dispatch } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [taskID, setTaskID] = useState(0);

  const markAsComplete = (taskID: number) => {
    dispatch({
      type: TaskActions.Complete,
      taskID,
    });
  };

  const deleteTask = (taskID: number) => {
    dispatch({
      type: TaskActions.Delete,
      taskID,
    });
  };

  const newTaskForm = () => {
    setShowForm(true);
    setTaskID(0);
  };

  const editTaskForm = (taskID: number) => {
    setShowForm(true);
    setTaskID(taskID);
  };

  const visibleTasks: TaskType[] = state.tasks.filter(
    (task: TaskType) => task.status !== TaskStatus.Deleted,
  );

  return (
    <>
      <section className="task-create">
        <button
          type="button"
          onClick={() => newTaskForm()}
          className="task-create__btn"
        >
          Create New Task
        </button>
      </section>

      <section className="task-list">
        {visibleTasks.map((task: TaskType) => (
          <Task
            key={`task-${task.id}`}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            markAsComplete={markAsComplete}
            deleteTask={deleteTask}
            editTaskForm={editTaskForm}
          />
        ))}
      </section>

      {showForm && <TaskForm id={taskID} hideForm={() => setShowForm(false)} />}
    </>
  );
};

export default TaskList;
