import reactLogo from '../assets/react-core-concepts.png';
import './Header.css';
export default function Header() {
  const imgAltText = 'Stylized atom';
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  const isHighlight = true;

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <header>
      <img src={reactLogo} alt={imgAltText}/>
      <h1 className={`header__title ${isHighlight && 'highlight-text'} `}>React Essentials</h1>
      <p >
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}