import { Button, TextField } from "@mui/material";

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
    <form onSubmit={handleSubmit}>
      <TextField name="title" placeholder="Todo..." />
      <TextField name="description" placeholder="Description..." />
      <TextField name="date" placeholder="date..." />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default Add;
