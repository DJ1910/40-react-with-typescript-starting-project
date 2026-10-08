import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

export default function NewTodo() {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodo: onAddTodo } = useContext(TodosContext);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim() === "") {
      //throw an error
      todoTextInputRef.current!.value = "";
      return;
    }

    onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}
