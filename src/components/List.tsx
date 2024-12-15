import { Typography } from "@mui/material";
import Item from "./Item";
import { Todo, TodoDispatch } from "../types";

type ListProps = {
  visibleTodos: Todo[];
  todoDispatch: TodoDispatch;
  updateTodo: (formData: FormData, oldTodo: Todo) => Promise<void>;
};

const List = ({ visibleTodos, todoDispatch, updateTodo }: ListProps) => {
  if (!visibleTodos.length) {
    return <Typography className="no-todos">Nothing left to do, go have a 🍺!</Typography>;
  }

  return (
    <ul className="flex-column list">
      {visibleTodos.map((todo, todoIdx) => {
        const showDivider = todoIdx !== 9 && todoIdx !== visibleTodos.length - 1;
        return (
          <Item
            key={todo.id}
            todo={todo}
            todoDispatch={todoDispatch}
            updateTodo={updateTodo}
            showDivider={showDivider}
          />
        );
      })}
    </ul>
  );
};

export default List;
