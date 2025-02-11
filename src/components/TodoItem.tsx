import {FC, ReactNode} from "react";

const TodoItem: FC<{ text: string, children?: ReactNode }> = ({text}) => {
  return <li>{text}</li>
}
export default TodoItem;