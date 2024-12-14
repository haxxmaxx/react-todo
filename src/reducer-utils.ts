import { TODOS_PER_PAGE } from "./constants";
import { CheckedTodos, Sorting, Todo } from "./types";

// TODO: more cases
export const sortTodos = (todos: Todo[], sort?: string) => {
  switch (sort) {
    case Sorting.AlphaAsc:
      return todos.sort((a, b) => a.title.localeCompare(b.title));
    case Sorting.AlphaDesc:
      return todos.sort((a, b) => b.title.localeCompare(a.title));
    case Sorting.CreatedAsc:
      return todos.sort((a, b) =>
        a.creationDate.toString().localeCompare(b.creationDate.toString())
      ); // b.creationDate - a.creationDate);
    case Sorting.CreatedDesc:
      return todos.sort((a, b) =>
        b.creationDate.toString().localeCompare(a.creationDate.toString())
      );
    default:
      return todos;
  }
};

export const filterTodos = (todos: Todo[], filter: string) => {
  if (!todos.filter.length) {
    return todos;
  }

  return todos.filter((todo) =>
    todo.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};

export const getNumberOfPages = (todos: Todo[]) => Math.ceil(todos.length / TODOS_PER_PAGE);

export const getTodosOnPage = (todos: Todo[], page: number) => {
  const startIndex = (page - 1) * TODOS_PER_PAGE;
  const endIndex = page * TODOS_PER_PAGE;

  return todos.slice(startIndex, endIndex);
};

// Todo: name
export const getCappedPage = (pageCount: number, page: number) =>
  Math.min(Math.max(1, page), pageCount);

// TODO: name
export const getUpdatedTodoLists = (
  allTodos: Todo[],
  filter: string,
  oldPage: number,
  sort?: string
) => {
  const sortedTodos = sortTodos(allTodos, sort);
  const filteredTodos = filterTodos(sortedTodos, filter);
  const pageCount = getNumberOfPages(filteredTodos);
  const page = getCappedPage(pageCount, oldPage);
  const visibleTodos = getTodosOnPage(filteredTodos, page);

  return { sortedTodos, filteredTodos, visibleTodos, pageCount, page };
};

export const updateCheckedTodos = (checkedTodos: CheckedTodos, id: string) => {
  const newCheckedTodos = { ...checkedTodos };
  if (newCheckedTodos[id]) {
    delete newCheckedTodos[id];
  } else {
    newCheckedTodos[id] = true;
  }

  return newCheckedTodos;
};
