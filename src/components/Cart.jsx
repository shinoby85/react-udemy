import Modal from "./Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormater} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Cart() {
  const {items} = useContext(CartContext);
  const {progress, hideCart} = useContext(UserProgressContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)
  
  function handleHideCart() {
    hideCart();
  }
  
  return <Modal className="cart" open={progress === 'cart'}>
    <h2>Your Cart</h2>
    <ul>
      {items.map((item) => (<li key={item.id}>{item.name}-{item.quantity}</li>))}
    </ul>
    <p className="cart-total">{currencyFormater.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={hideCart}>Close</Button>
      <Button>Go to Checkout</Button>
    </p>
  </Modal>
}