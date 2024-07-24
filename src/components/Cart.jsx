import Modal from "./Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormater} from "../utils/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const {items, addItem, removeItem} = useContext(CartContext);
  const {progress, hideCart, showCheckout} = useContext(UserProgressContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)
  
  function handleCloseCart() {
    hideCart();
  }
  
  function handleGoToCheckout() {
    showCheckout();
  }
  
  return <Modal className="cart" open={progress === 'cart'} onClose={progress === 'cart' ? handleCloseCart : null}>
    <h2>Your Cart</h2>
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onIncrease={() => addItem(item)}
          onDecrease={() => removeItem(item.id)}
        />))}
    </ul>
    <p className="cart-total">{currencyFormater.format(cartTotal)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={handleCloseCart}>Close</Button>
      {items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
    
    </p>
  </Modal>
}