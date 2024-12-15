import { Todo, TodoDispatch, TodoState } from "../types";
import axios from "axios";
import { createNewTodo, getUpdatedTodo, hasTodoChanged } from "../utils";
import { useCallback, useEffect, useRef } from "react";
import { getTodos, patchTodos, postTodo, putTodo } from "./crud-utils";
import { BASE_URL, DEBOUNCE_TIME } from "../constants";
import { debounce } from "@mui/material";

axios.defaults.baseURL = BASE_URL;

const useTodoHandler = (todoState: TodoState, todoDispatch: TodoDispatch) => {
  const patchTodosDebouncer = debounce(async () => {
    await patchTodos(todoState.checkedTodos);
    await getTodos(todoDispatch);
  }, DEBOUNCE_TIME);

  const debouncerRef = useRef(patchTodosDebouncer);

  useEffect(() => {
    debouncerRef.current.clear();
    if (Object.keys(todoState.checkedTodos).length) {
      debouncerRef.current = patchTodosDebouncer;
      debouncerRef.current();
    }
  }, [todoState.checkedTodos]);

  // intitial fetch
  useEffect(() => {
    getTodos(todoDispatch);
  }, [todoDispatch]);

  // Since the items has updateTodo as a prop, I choose to memoize it.
  // That enables the Items to be memoized and only re-render when the todo prop changes
  const updateTodo = useCallback(
    async (formData: FormData, oldTodo: Todo) => {
      const updatedTodo = getUpdatedTodo(formData, oldTodo);
      if (!hasTodoChanged(oldTodo, updatedTodo)) {
        return;
      }

      await putTodo(updatedTodo);
      await getTodos(todoDispatch);
    },
    [todoDispatch]
  );

  // This one is memoized for consistency, it is not really a performance gain
  const addTodo = useCallback(
    async (formData: FormData) => {
      const newTodo = createNewTodo(formData);
      await postTodo(newTodo);
      await getTodos(todoDispatch);
    },
    [todoDispatch]
  );

  return { updateTodo, addTodo };
};

export default useTodoHandler;
