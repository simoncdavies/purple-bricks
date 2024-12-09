import React, { useState, useEffect } from "react";
import { TaskType, TaskStatus, TaskActions } from "../../types/tasks.ts";
import { useAppContext } from "../../context/context.tsx";
import "./task-form.component.css";

const TaskForm = ({ id, hideForm }: { id: number; hideForm: () => void }) => {
  const { state, dispatch } = useAppContext();
  const task = id ? state.tasks.find((task: TaskType) => task.id === id) : null;
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || TaskStatus.Pending);

  useEffect(() => {
    const task = state.tasks.find((task: TaskType) => task.id === id);
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setStatus(task?.status || TaskStatus.Pending);
  }, [id, state.tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch({
        type: TaskActions.Edit,
        taskID: id,
        text: title,
        description,
        status,
      });
    } else {
      dispatch({ type: TaskActions.Add, text: title, description, status });
    }
    hideForm();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-form__field">
        <label htmlFor="task-title" className="task-form__label">
          Title
        </label>
        <input
          type="text"
          id="task-title"
          value={title}
          className="task-form__input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="task-form__field">
        <label htmlFor="task-description" className="task-form__label">
          Description
        </label>
        <textarea
          id="task-description"
          className="task-form__textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="task-form__field">
        <label htmlFor="task-status" className="task-form__label">
          Status
        </label>
        <select
          id="task-status"
          value={status}
          className="task-form__select"
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          {Object.values(TaskStatus)
            .filter((status: TaskStatus) => status !== TaskStatus.Deleted)
            .map((statusValue) => (
              <option key={statusValue} value={statusValue}>
                {statusValue}
              </option>
            ))}
        </select>
      </div>
      <button type="submit" className="task-form__btn task-form__btn--submit">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
