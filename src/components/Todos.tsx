import {FC, ReactNode} from "react";
import Todo from "../models/todo.ts";

const Todos: FC<{
  children?: ReactNode; items: Todo[]
}> = (props) => {
  return (
    <ul>
      {props.items.map(item => (<li key={item.id}>{item.text}</li>))}
    </ul>
  )
}

export default Todos;