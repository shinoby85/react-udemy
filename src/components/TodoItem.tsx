import {FC, ReactNode} from "react";
import classes from "./TodoItem.module.css";

const TodoItem: FC<{ text: string, children?: ReactNode, onRemoveItem: () => void }> = ({text, onRemoveItem}) => {
  return <li onClick={onRemoveItem} className={classes.item}>{text}</li>
}
export default TodoItem;