import axios from "axios";
import { CheckedTodos, Todo, TodoAction, TodoDispatch } from "../types";

export const getTodos = (todoDispatch: TodoDispatch) =>
  axios
    .get("/todos")
    .then((response) => {
      const todos = response.data as Todo[];
      todoDispatch({ type: TodoAction.SetTodos, payload: { todos } });
    })
    .catch((error) => console.error(error));

export const postTodo = (todo: Todo) =>
  axios
    .post("/todos", todo)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

export const putTodo = (todo: Todo) =>
  axios
    .put(`/todos/${todo.id}`, todo)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

export const patchTodos = (checkedTodos: CheckedTodos) =>
  axios
    .patch("/todos", checkedTodos)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
