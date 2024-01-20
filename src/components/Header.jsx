import reactLogo from '../assets/react-core-concepts.png';
import {styled} from 'styled-components';
export default function Header() {
  const imgAltText = 'Stylized atom';
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  const isRedColor=false;

  const CustomHeader = styled.header`
      text-align: center;
      margin: 3rem 0;
      & img{
          height: 5rem;
          width: 10rem;
          object-fit: cover;
      }
      & p {
          margin: 0;
          font-size: 1.25rem;
          color: ${(props)=>props.$colorText ? 'red' : '#8964b0'};
          font-family: "Roboto Condensed", sans-serif;
          
          &:hover{
              font-size: 2rem;
          }
      }      
  `
  const SecondHeader =styled.div`
    visibility: hidden;
  `
  // const CustomArticle = styled.p`
  //     margin: 0;
  //     font-size: 1.25rem;
  //     color: ${(props)=>props.$colorText ? 'red' : '#8964b0'};
  //     font-family: "Roboto Condensed", sans-serif;
  //     &:hover{
  //         font-size: 2rem;
  //     }
  // `
  const CustomTitle = styled.h1`
      margin: 0;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 5rem;
      background: linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  `

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <CustomHeader $colorText={isRedColor}>
      <img src={reactLogo} alt={imgAltText}/>
      <CustomTitle>React Essentials</CustomTitle>
      <SecondHeader>Second header</SecondHeader>
      <p >
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </CustomHeader>
  );
}