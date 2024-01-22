export default function CoreConcept({image, title, description}) {
  return (
    <li className="w-40 text-center flex flex-col items-center">
      <img className="h-16 w-24 object-cover" src={image} alt={title}/>
      <h3 className="my-2 mx-0 md:my-[24px] hover:text-amber-500">{title}</h3>
      <p className="text-sm">{description}</p>
    </li>
  );
}