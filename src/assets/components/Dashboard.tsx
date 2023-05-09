// @ts-nocheck
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { NewTodoForm } from "./TodoForm";
import { data } from "../data";

interface storageValue {
    id:string;
    title:string;
    completed:boolean;
}

export default function DashboardPage() {
  const [todos, setTodos] = useState(() => {
    const localValue:storageValue[] = localStorage.getItem("ITEMS");
    if (localValue === null) return data;
    return JSON.parse(localValue);
  });

  console.log(todos)

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id : string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo:string) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h4 className="header">Todo List</h4>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
