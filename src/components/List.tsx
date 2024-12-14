import Item from "./Item";
import { Todo, TodoDispatch } from "../types";

type ListProps = {
  visibleTodos: Todo[];
  todoDispatch: TodoDispatch;
  updateTodo: (formData: FormData, oldTodo: Todo) => Promise<void>;
};

const List = ({ visibleTodos, todoDispatch, updateTodo }: ListProps) => {
  if (!visibleTodos.length) {
    return <p>No todos found</p>;
  }

  return (
    <ul className="flex-column list">
      {visibleTodos.map((todo) => (
        <Item key={todo.id} todo={todo} todoDispatch={todoDispatch} updateTodo={updateTodo} />
      ))}
    </ul>
  );
};

export default List;
