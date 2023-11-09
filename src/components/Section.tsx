import {PropsWithChildren} from "react";

export default function Section({title, children, ...props}: PropsWithChildren<{}>) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}