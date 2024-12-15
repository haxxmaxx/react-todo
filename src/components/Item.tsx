import { Checkbox, Divider } from "@mui/material";
import { FormName, Todo, TodoAction, TodoDispatch } from "../types";
import { memo, useState } from "react";
import ItemInput from "./ItemInput";

type TodoEntryProps = {
  todo: Todo;
  todoDispatch: TodoDispatch;
  updateTodo: (formData: FormData, oldTodo: Todo) => void;
  showDivider: boolean;
};

const Item = ({ todo, todoDispatch, updateTodo, showDivider }: TodoEntryProps) => {
  const [isChecked, setIsChecked] = useState(false);

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
    }
  };

  return (
    <li className="flex-column">
      <div className="flex">
        <Checkbox className="checkbox" checked={isChecked} onChange={handleCheck} />
        <form className="flex-column item-form" onBlur={handleBlur} onKeyUp={handleKeyUp} id={id}>
          <ItemInput name={FormName.Title} value={todo.title} isChecked={isChecked} />
          <ItemInput
            name={FormName.Description}
            value={todo.description}
            isChecked={isChecked}
            isDetail
          />
          <ItemInput name={FormName.Date} value={todo.date} isChecked={isChecked} isDetail />
          {showDivider && <Divider className="item-divider" />}
        </form>
      </div>
    </li>
  );
};

export default memo(Item);
