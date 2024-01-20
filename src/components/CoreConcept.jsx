import coreStyles from './CoreConcept.module.css'
// export default function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
export default function CoreConcept({image, title, description}) {
  return (
    <li className={coreStyles.list}>
      <img className={coreStyles.image} src={image} alt={title}/>
      <h3 className={coreStyles.list__title}>{title}</h3>
      <p className={coreStyles.list__article}>{description}</p>
    </li>
  );
}