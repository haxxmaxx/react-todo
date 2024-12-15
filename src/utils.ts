import { FormName, Todo } from "./types";

export const generateId = (title: string) => {
  const kebabCaseTitle = title.replace(/\s+/g, "-").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 10000);

  return `${kebabCaseTitle}-${randomNumber}`;
};

export const getFormProps = (formData: FormData) => {
  const formProps: Record<FormName, string> = {
    [FormName.Title]: "",
    [FormName.Description]: "",
    [FormName.Date]: "",
  };
  for (const [label, value] of formData) {
    formProps[label as FormName] = value as string;
  }

  return formProps;
};

export const createNewTodo = (formData: FormData) => {
  const formProps = getFormProps(formData);
  const dateNow = new Date();

  return {
    ...formProps,
    id: generateId(formProps.title),
    creationDate: dateNow.toISOString(),
  };
};

export const getUpdatedTodo = (formData: FormData, oldTodo: Todo) => ({
  ...oldTodo,
  ...getFormProps(formData),
});

export const hasTodoChanged = (oldTodo: Todo, updatedTodo: Todo) => {
  return (
    updatedTodo.title !== oldTodo.title ||
    updatedTodo.description !== oldTodo.description ||
    updatedTodo.date !== oldTodo.date
  );
};
