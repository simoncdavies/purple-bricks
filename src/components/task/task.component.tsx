import { TaskElement, TaskStatus } from "../../types/tasks.ts";
import "./task.component.css";

const Task = ({
  id,
  title,
  description,
  status,
  markAsComplete,
  deleteTask,
  editTaskForm,
}: TaskElement) => {
  return (
    <div className="task">
      <div className="task__details">
        <h1 className="task__title">{title}</h1>
        <p className="task__description">{description}</p>
        <p className="task__status">{status}</p>
      </div>
      <div className="task__actions">
        {status !== TaskStatus.Complete && (
          <button
            type="button"
            className="task__btn task__btn--complete"
            onClick={() => markAsComplete(id)}
          >
            Mark as Complete{" "}
          </button>
        )}
        <button
          type="button"
          className="task__btn task__btn--delete"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="task__btn task__btn--edit"
          onClick={() => editTaskForm(id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Task;
