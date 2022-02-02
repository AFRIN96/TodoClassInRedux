import "./styles.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}
