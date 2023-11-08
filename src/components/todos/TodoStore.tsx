import React, { useState } from "react";
import { observable, makeObservable, action, computed } from "mobx";
import { observer } from "mobx-react";

interface TodoItem {
  id: number;
  title: string;
  isCompleted: boolean;
}

export class TodoStoreImpl {
  todos: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      status: computed,
    });
  }

  addTodo(title: string) {
    const item: TodoItem = {
      id: +Math.random().toFixed(2),
      title,
      isCompleted: false,
    };

    this.todos.push(item);
  }
  toggleTodo(id: number) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].isCompleted = !this.todos[index].isCompleted;
    }
  }

  get status() {
    let completed = 0,
      remaining = 0;
    this.todos.forEach((todo) => {
      if (todo.isCompleted) {
        completed++;
      } else {
        remaining++;
      }
    });
    return { completed, remaining };
  }
}

export const TodoStore = new TodoStoreImpl();
