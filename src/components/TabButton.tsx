export default function TabButton({children, select, isSelected}) {
  return <li><button className={isSelected ? 'active' : null} onClick={select}>{children}</button></li>
}