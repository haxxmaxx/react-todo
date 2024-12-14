import { Checkbox, Divider } from "@mui/material";
import { FormName, Todo, TodoAction, TodoDispatch } from "../types";
import { memo, useState } from "react";
import ItemInput from "./ItemInput";

type TodoEntryProps = {
  todo: Todo;
  todoDispatch: TodoDispatch;
  updateTodo: (formData: FormData, oldTodo: Todo) => void;
};

const Item = (props: TodoEntryProps) => {
  const { todo, todoDispatch, updateTodo } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const id = `item-${todo.id}`;

  const handleCheck = () => {
    setIsChecked(!isChecked);
    todoDispatch({
      type: TodoAction.updateChecked,
      payload: { checkedId: todo.id },
    });
  };

  const handleSubmit = (target: HTMLFormElement) => {
    const formData = new FormData(target);
    updateTodo(formData, todo);
  };

  const handleKeyUp = (evt: React.KeyboardEvent<HTMLFormElement>) => {
    if (evt.key === "Enter") {
      handleSubmit(evt.currentTarget);
      evt.currentTarget.blur();
    }
  };

  const handleBlur = (evt: React.FocusEvent) => {
    const entryIsBlurred = !evt.relatedTarget?.closest(`#${id}`);
    const formElement = evt.target.closest(`#${id}`);

    if (entryIsBlurred && formElement) {
      handleSubmit(formElement as HTMLFormElement);
      setIsFocused(false);
    }
  };

  const updateFocus = () => setIsFocused(true);

  return (
    <li className="flex-column">
      <div className="flex">
        <Checkbox className="checkbox" checked={isChecked} onChange={handleCheck} />
        <form
          className="flex-column"
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          onFocus={updateFocus}
          id={id}
        >
          <ItemInput
            name={FormName.Title}
            value={todo.title}
            isFocused={isFocused}
            isChecked={isChecked}
          />
          <ItemInput
            name={FormName.Description}
            value={todo.description}
            isFocused={isFocused}
            isChecked={isChecked}
          />
          <ItemInput
            name={FormName.Date}
            value={todo.date}
            isFocused={isFocused}
            isChecked={isChecked}
          />
        </form>
      </div>
      <Divider variant="middle" />
    </li>
  );
};

export default memo(Item);
