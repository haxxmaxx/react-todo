import { Pagination as MuiPagination } from "@mui/material";
import { TodoAction, TodoDispatch, TodoState } from "../types";
import { TODOS_PER_PAGE } from "../constants";

type PaginationProps = {
  todoState: TodoState;
  todoDispatch: TodoDispatch;
};

const Pagination = ({ todoState, todoDispatch }: PaginationProps) => {
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) =>
    todoDispatch({ type: TodoAction.SetPage, payload: { page } });

  if (todoState.filteredTodos.length <= TODOS_PER_PAGE) {
    return null;
  }

  return (
    <div className="flex center">
      <MuiPagination
        count={todoState.pageCount}
        page={todoState.page}
        color="primary"
        onChange={handlePageChange}
      />
    </div>
  );
};
export default Pagination;
