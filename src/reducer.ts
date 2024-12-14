import { TodoAction, TodoActionType, TodoState } from "./types";
import { updateCheckedTodos, getTodosOnPage, getUpdatedTodoLists } from "./reducer-utils";

const reducer = (state: TodoState, action: TodoActionType): TodoState => {
  const { payload, type } = action;
  switch (type) {
    case TodoAction.SetTodos: {
      const updatedTodoLists = getUpdatedTodoLists(
        payload.todos,
        state.filter,
        state.page,
        state.sorting
      );

      return { ...state, ...updatedTodoLists };
    }
    case TodoAction.Sort: {
      const updatedTodoLists = getUpdatedTodoLists(
        state.sortedTodos,
        state.filter,
        state.page,
        payload.sorting
      );
      return { ...state, ...updatedTodoLists, sorting: payload.sorting };
    }
    case TodoAction.Filter: {
      const paginationAndFilterData = getUpdatedTodoLists(
        state.sortedTodos,
        payload.filter,
        state.page
      );

      return { ...state, ...paginationAndFilterData, filter: payload.filter };
    }
    case TodoAction.SetPage: {
      const visibleTodos = getTodosOnPage(state.sortedTodos, payload.page);

      return { ...state, page: payload.page, visibleTodos };
    }
    case TodoAction.updateChecked: {
      const checkedTodos = updateCheckedTodos(state.checkedTodos, payload.checkedId);

      return { ...state, checkedTodos };
    }
    default:
      throw new Error(`Reducer called with invalid action type: ${type}`);
  }
};

export default reducer;
