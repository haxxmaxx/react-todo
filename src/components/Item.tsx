import { Checkbox, TextField } from "@mui/material";
import { Todo, TodoAction, TodoDispatch } from "../types";
import { memo, useState } from "react";
import { hasTodoChanged } from "../utils";

type TodoEntryProps = {
  todo: Todo;
  todoDispatch: TodoDispatch;
  updateTodo: (formData: Todo) => void;
};

const Item = (props: TodoEntryProps) => {
  const { todo, todoDispatch, updateTodo } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);

  const id = `entry-${todo.id}`;

  const handleCheck = () => {
    setIsChecked(!isChecked);
    todoDispatch({
      type: TodoAction.updateChecked,
      payload: { checkedId: todo.id },
    });
  };

  const handleSubmit = () => {
    const newTodo = { title, description, date, id: todo.id };

    if (hasTodoChanged(todo, newTodo)) {
      updateTodo(newTodo);
    }
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLFormElement>) => {
    if (evt.key === "Enter") {
      handleSubmit();
    }
  };

  const handleBlur = (evt: React.FocusEvent) => {
    const entryIsBlurred = !evt.relatedTarget?.closest(`#${id}`);
    const formElement = evt.target.closest(`#${id}`);

    if (entryIsBlurred && formElement) {
      handleSubmit();
    }
  };

  const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(evt.target.value);

  const handleDescriptionChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(evt.target.value);

  const handleDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => setDate(evt.target.value);

  return (
    <div className="todo-entry" id={id}>
      <Checkbox checked={isChecked} onChange={handleCheck} />
      <form onBlur={handleBlur} onKeyUp={handleKeyUp}>
        <TextField size="small" value={title} onChange={handleTitleChange} />
        <TextField size="small" value={description} onChange={handleDescriptionChange} />
        <TextField size="small" value={date} onChange={handleDateChange} />
      </form>
    </div>
  );
};

export default memo(Item);
