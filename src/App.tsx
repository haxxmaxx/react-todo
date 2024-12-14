import { useReducer } from "react";
import "./App.css";
import Add from "./components/Add";
import Pagination from "./components/Pagination";
import reducer from "./reducer";
import useTodoHandler from "./hooks/use-todo-handler";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import List from "./components/List";
import { DEFAULT_STATE } from "./constants";

function App() {
  const [todoState, todoDispatch] = useReducer(reducer, DEFAULT_STATE);
  const { addTodo, updateTodo } = useTodoHandler(todoState, todoDispatch);

  return (
    <>
      <Add addTodo={addTodo} />
      <div className="top-controls">
        <Filter todoDispatch={todoDispatch} />
        <Sort todoState={todoState} todoDispatch={todoDispatch} />
      </div>
      <List
        visibleTodos={todoState.visibleTodos}
        todoDispatch={todoDispatch}
        updateTodo={updateTodo}
      />
      <Pagination todoState={todoState} todoDispatch={todoDispatch} />
    </>
  );
}

export default App;
