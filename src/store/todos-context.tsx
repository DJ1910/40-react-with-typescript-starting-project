import { createContext, ReactNode, useState } from "react";
import Todo from "../models/todos";

type todosContextObj = {
  todos: Todo[];
  addTodo: (enteredText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<todosContextObj>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

type prop = { children?: ReactNode };

export default function TodosContextProvider(props: prop) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(enteredText: string) {
    const newTodo = new Todo(enteredText);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function removeTodoHandler(id: string) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  const contextValue: todosContextObj = {
    todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
}
