import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";

export function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=""/>
        <h1>React Food</h1>
      </div>
      <Button textOnly>Cart (0)</Button>
    </header>
  );
}