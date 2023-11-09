import {PropsWithChildren} from "react";

export default function CoreConcept({image, title, description}: PropsWithChildren<{}>) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}