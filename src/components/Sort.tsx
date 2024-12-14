import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Sorting, TodoAction, TodoDispatch, TodoState } from "../types";

type SortProps = {
  todoState: TodoState;
  todoDispatch: TodoDispatch;
};

const Sort = ({ todoState, todoDispatch }: SortProps) => {
  const handleChange = (event: SelectChangeEvent) =>
    todoDispatch({ type: TodoAction.Sort, payload: { sorting: event.target.value as Sorting } });

  return (
    <Select size="small" value={todoState.sorting} label="Age" onChange={handleChange}>
      <MenuItem value={Sorting.AlphaAsc}>{Sorting.AlphaAsc}</MenuItem>
      <MenuItem value={Sorting.AlphaDesc}>{Sorting.AlphaDesc}</MenuItem>
      <MenuItem value={Sorting.CreatedAsc}>{Sorting.CreatedAsc}</MenuItem>
      <MenuItem value={Sorting.CreatedDesc}>{Sorting.CreatedDesc}</MenuItem>
    </Select>
  );
};

export default Sort;
