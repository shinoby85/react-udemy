import logoImg from "../assets/logo.jpg";

export function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=""/>
        <h1>React Food</h1>
      </div>
      <button>Cart (0)</button>
    </header>
  );
}