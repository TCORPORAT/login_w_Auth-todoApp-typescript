// @ts-nocheck
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return (
        <Todo
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )
    })}
  </ul>
}