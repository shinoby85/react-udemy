import reactLogo from '../assets/react-core-concepts.png';
import hStyle from './Header.module.css';
export default function Header() {
  const imgAltText = 'Stylized atom';
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <header className={hStyle.header}>
      <img className={hStyle.image} src={reactLogo} alt={imgAltText}/>
      <h1 className={hStyle.title}>React Essentials</h1>
      <p className={hStyle.article}>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}