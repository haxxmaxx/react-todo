import { Button, Divider, TextField } from "@mui/material";
import { FormName } from "../types";

type AddProps = {
  addTodo: (formData: FormData) => Promise<void>;
};

const Add = ({ addTodo }: AddProps) => {
  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    addTodo(formData);
    evt.target.reset();
  };

  return (
    <form className="flex-column add-form" onSubmit={handleSubmit}>
      <div className="flex-column add-title-and-description">
        <TextField size="small" name={FormName.Title} placeholder="Todo..." />
        <TextField size="small" name={FormName.Description} placeholder="Description..." />
      </div>
      <div className="flex add-date-and-submit">
        <TextField size="small" name={FormName.Date} placeholder="date... (YY-MM-DD)" />
        <Button
          className="add-submit"
          variant="contained"
          disableElevation
          type="submit"
          size="small"
        >
          Add
        </Button>
      </div>
      <Divider />
    </form>
  );
};

export default Add;
