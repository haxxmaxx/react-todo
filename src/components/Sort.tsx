import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Sorting, TodoAction, TodoDispatch, TodoState } from "../types";

type SortProps = {
  todoState: TodoState;
  todoDispatch: TodoDispatch;
};

const Sort = ({ todoState, todoDispatch }: SortProps) => {
  const handleChange = (event: SelectChangeEvent) =>
    todoDispatch({ type: TodoAction.Sort, payload: { sorting: event.target.value as Sorting } });

  return (
    <FormControl>
      <InputLabel id="sorting">Sort</InputLabel>
      <Select
        size="small"
        labelId="sorting"
        value={todoState.sorting}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={Sorting.CreatedAsc}>{Sorting.CreatedAsc}</MenuItem>
        <MenuItem value={Sorting.CreatedDesc}>{Sorting.CreatedDesc}</MenuItem>
        <MenuItem value={Sorting.DueAsc}>{Sorting.DueAsc}</MenuItem>
        <MenuItem value={Sorting.DueDesc}>{Sorting.DueDesc}</MenuItem>
        <MenuItem value={Sorting.AlphaAsc}>{Sorting.AlphaAsc}</MenuItem>
        <MenuItem value={Sorting.AlphaDesc}>{Sorting.AlphaDesc}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
