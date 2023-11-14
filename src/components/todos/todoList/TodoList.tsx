import React, { useState } from "react";
import "./todoList.scss";
import { observer } from "mobx-react";
import { TodoStoreImpl } from "../../../store/TodoStore";

interface TodoListProps {
  todoStore: TodoStoreImpl;
}

export const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const [val, setVal] = useState<string>("");

  return (
    <>
      <div className="todoList">
        <input
          className="todoList_input"
          value={val}
          placeholder="Enter Your task"
          type="text"
          onChange={(event) => {
            setVal(event.target.value);
          }}
        />
        <button
          className="todoList_button"
          onClick={() => {
            if (val) {
              todoStore.addTodo(val);
            }
            setVal("")
          }}
        >
          ➤
        </button>

        <div className="todoList_count">
          <div>
          Completed : {todoStore.status.completed}
          </div>
          <div>
          Remaining : {todoStore.status.remaining}
          </div>
         
         
        </div>
        <ul>
          {todoStore.todos.map((todo) => {
            return (
              <li
                className="todoList_list"
                onClick={() => {
                  todoStore.toggleTodo(todo.id);
                }}
              >
                <div className="todoList_check">
                  {" "}
                  [{todo.isCompleted ? "✔" : " "}] {"  "}
                </div>

                {todo.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});
