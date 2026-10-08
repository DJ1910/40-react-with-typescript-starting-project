import { ReactNode } from "react";
import Todo from "../models/todos";
import classes from "./TodoItem.module.css";

type prop = {
  children?: ReactNode;
  item: Todo;
  onRemoveTodo: (id: string) => void;
};

export default function TodoItem(props: prop) {
  return (
    <li
      className={classes.item}
      onClick={() => props.onRemoveTodo(props.item.id)}
    >
      {props.item.text}
    </li>
  );
}
