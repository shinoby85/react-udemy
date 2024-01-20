import reactLogo from '../assets/react-core-concepts.png';
import './Header.css';
export default function Header() {
  const imgAltText = 'Stylized atom';
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const titleStyles = {
    fontFamily: '"Roboto Condensed", sans-serif',
    fontSize: '5rem',
    margin: '0',
    background: 'linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))'
  }

  return (
    <header>
      <img src={reactLogo} alt={imgAltText}/>
      <h1 style={titleStyles}>React Essentials</h1>
      <p >
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}