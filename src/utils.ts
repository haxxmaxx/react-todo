import { Todo } from "./types";

export const generateId = (title: string) => {
  const kebabCaseTitle = title.replace(/\s+/g, "-").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 10000);

  return `${kebabCaseTitle}-${randomNumber}`;
};

export const createNewTodo = (formData: FormData) => {
  const formProps: Record<string, string> = {};
  for (const [label, value] of formData) {
    formProps[label] = value as string;
  }

  return {
    ...formProps,
    id: generateId(formProps.title),
  } as Todo;
};

export const hasTodoChanged = (oldTodo: Todo, newTodo: Todo) => {
  return (
    newTodo.title !== oldTodo.title ||
    newTodo.description !== oldTodo.description ||
    newTodo.description !== oldTodo.description
  );
};
