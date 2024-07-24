import Modal from "../Modal.jsx";
import {useContext} from "react";
import CartContext from "../../store/CartContext.jsx";
import {currencyFormater} from "../../utils/formatting.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";

export default function Checkout() {
  const {items} = useContext(CartContext);
  const {progress, hideCheckout} = useContext(UserProgressContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)
  
  function handleClose() {
    hideCheckout();
  }
  
  return <Modal open={progress === 'checkout'} onClose={progress === 'checkout' ? handleClose : null}>
    <form action="">
      <h2>Checkout</h2>
      <p>Total amount: {currencyFormater.format(cartTotal)}</p>
      <Input label="Full Name" type="text" id="full-name"/>
      <Input label="E-mail Address" type="email" id="email"/>
      <Input label="Street" type="text" id="street"/>
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code"/>
        <Input label="City" type="text" id="city"/>
      </div>
      <div className="modal-actions">
        <Button type="button" textOnly onClick={handleClose}>Close</Button>
        <Button>Submit Order</Button>
      </div>
    </form>
  </Modal>
}