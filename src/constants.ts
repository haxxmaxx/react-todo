import { Sorting } from "./types";

export const TODOS_PER_PAGE = 8;

export const ENTRIES = 20;

export const DEBOUNCE_TIME = 1000;

export const DEFAULT_STATE = {
  sortedTodos: [],
  visibleTodos: [],
  filteredTodos: [],
  sorting: Sorting.CreatedAsc,
  filter: "",
  pageCount: 1,
  page: 1,
  checkedTodos: {},
};

export const BASE_URL = "http://localhost:3000";
