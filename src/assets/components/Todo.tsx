type propsType = {
    id: string;
    title: string;
    name : string;
    completed: boolean;
    toggleTodo: (id : string, event: boolean) => void;
    deleteTodo: (id : string) => void;
}
export default function Todo({completed, id, title, toggleTodo, deleteTodo }: propsType) {
    return (
        <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    );
  }