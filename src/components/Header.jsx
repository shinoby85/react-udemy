import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export function Header() {
  const {items} = useContext(CartContext);
  const {showCart} = useContext(UserProgressContext);
  const totalCartItems = items.reduce((totalNumberOfItems, item) => totalNumberOfItems + item.quantity, 0);
  
  function handleShowCart() {
    showCart();
  }
  
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=""/>
        <h1>React Food</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
    </header>
  );
}