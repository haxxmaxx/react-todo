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
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-inputs">
        <TextField
          className=".add-text-input"
          size="small"
          name={FormName.Title}
          placeholder="Todo..."
        />
        <TextField
          className=".add-text-input"
          size="small"
          name={FormName.Description}
          placeholder="Description..."
        />
      </div>
      <div className="add-date-and-submit">
        <TextField size="small" name={FormName.Date} placeholder="date..." />
        <Button className="add-submit" type="submit" size="small">
          Add
        </Button>
      </div>
      <Divider />
    </form>
  );
};

export default Add;
