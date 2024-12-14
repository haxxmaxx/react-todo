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
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="sortLabel">Age</InputLabel>
      <Select labelId="sortLabel" value={todoState.sorting} label="Age" onChange={handleChange}>
        <MenuItem value={Sorting.AlphaAsc}>Alpha Ascending</MenuItem>
        <MenuItem value={Sorting.AlphaDesc}>Alpha Descending</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
