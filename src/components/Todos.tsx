import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

//Using React.FC is discouraged

// const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

export default function Todos() {
  const { todos, removeTodo } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} onRemoveTodo={removeTodo} />
      ))}
    </ul>
  );
}
