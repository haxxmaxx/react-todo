import { TextField } from "@mui/material";
import { TodoAction, TodoDispatch } from "../types";

type FilterProps = {
  todoDispatch: TodoDispatch;
};

const Filter = ({ todoDispatch }: FilterProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    todoDispatch({ type: TodoAction.Filter, payload: { filter: event.target.value } });

  return (
    <TextField
      className="filter"
      placeholder="Filter..."
      type="search"
      variant="outlined"
      size="small"
      onChange={handleChange}
    />
  );
};

export default Filter;
