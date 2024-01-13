export default function TabButton({children, isSelect, select}) {

  return (
    <button
      className={isSelect ? 'active' : null}
      onClick={select}
    >{children}</button>
  );
}