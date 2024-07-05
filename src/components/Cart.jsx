import Modal from "./Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormater} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";

export default function Cart() {
  const {items} = useContext(CartContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)
  return <Modal className="cart">
    <h2>Your Cart</h2>
    <ul>
      {items.map((item) => (<li key={item.id}>{item.name}-{item.quantity}</li>))}
    </ul>
    <p className="cart-total">{currencyFormater.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly>Close</Button>
      <Button>Go to Checkout</Button>
    </p>
  </Modal>
}