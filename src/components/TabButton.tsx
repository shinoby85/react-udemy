import {PropsWithChildren} from "react";

export default function TabButton({children, isSelected, ...props}: PropsWithChildren<{}>) {
  return <li>
    <button className={isSelected ? 'active' : null} {...props}>{children}</button>
  </li>
}