import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";

export function Header() {
  const {items} = useContext(CartContext);
  const totalCartItems = items.reduce((totalNumberOfItems, item) => totalNumberOfItems + item.quantity, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=""/>
        <h1>React Food</h1>
      </div>
      <Button textOnly>Cart ({totalCartItems})</Button>
    </header>
  );
}