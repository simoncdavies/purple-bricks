import TaskList from "./components/task-list/task-list.component.tsx";
import { Provider } from "./context/context.tsx";

function App() {
  return (
    <Provider>
      <TaskList />
    </Provider>
  );
}

export default App;
