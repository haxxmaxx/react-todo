export enum TodoAction {
  SetTodos,
  Sort,
  Filter,
  SetPage,
  updateChecked,
}

export enum Sorting {
  AlphaAsc = "Alpha Ascending",
  AlphaDesc = "Alpha Descending",
  CreatedAsc = "Created Ascending",
  CreatedDesc = "Created Descending",
  DueAsc = "Due Date Ascending",
  DueDesc = "Due Date Descending",
}

export enum FormName {
  Title = "title",
  Description = "description",
  Date = "date",
}

type SetTodosAction = {
  type: TodoAction.SetTodos;
  payload: { todos: Todo[] };
};
type SortAction = {
  type: TodoAction.Sort;
  payload: { sorting: Sorting };
};
type FilterAction = {
  type: TodoAction.Filter;
  payload: { filter: string };
};
type SetPageAction = {
  type: TodoAction.SetPage;
  payload: { page: number };
};
type UpdateCheckedAction = {
  type: TodoAction.updateChecked;
  payload: { checkedId: string };
};

export type TodoActionType =
  | SetTodosAction
  | SortAction
  | FilterAction
  | SetPageAction
  | UpdateCheckedAction;

export type TodoDispatch = React.Dispatch<TodoActionType>;

export type Todo = {
  title: string;
  description: string;
  date: string;
  id: string;
  creationDate: string;
};

export type CheckedTodos = Record<string, boolean>;

// TODO: use something indexed instead of array, for smarter lookups in lists
export type TodoState = {
  sortedTodos: Todo[]; // contains all todos sorted
  filteredTodos: Todo[]; // contains sorted and filtered todos
  visibleTodos: Todo[]; // contains sorted and filtered todos on current page
  checkedTodos: CheckedTodos;
  filter: string;
  sorting: Sorting;
  page: number;
  pageCount: number;
};
