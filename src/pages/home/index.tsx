import "./index.scss";
import { TodoList } from "../../components/todos/todoList/TodoList";
import { TodoStore } from "../../store/TodoStore";
import { NavBar } from "../../components/navBar";

export function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <TodoList todoStore={TodoStore} />
      </div>
    </>
  );
}
