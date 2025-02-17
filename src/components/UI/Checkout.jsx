import Modal from "../Modal.jsx";
import {useActionState, useContext} from "react";
import CartContext from "../../store/CartContext.jsx";
import {currencyFormater} from "../../utils/formatting.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import useHttp from "../../hooks/useHttp.js";
import Error from "../Error.jsx";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function Checkout() {
  const {items, clearCart} = useContext(CartContext);
  const {progress, hideCheckout} = useContext(UserProgressContext);
  const {
    data,
    error,
    sendRequest,
    clearData
  } = useHttp('http://localhost:3000/orders', requestConfig);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)

  function handleClose() {
    hideCheckout();
  }

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData
        }
      }));
  }

  const [formState, formAction, isSending] = useActionState(checkoutAction, null);

  let action = (
    <>
      <Button type="button" textOnly onClick={handleClose}>Close</Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    action = <span>Sending order data...</span>
  }

  if (data && !error) {
    return (
      <Modal open={progress === 'checkout'} onClose={handleClose}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>Info message</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return <Modal open={progress === 'checkout'} onClose={progress === 'checkout' ? handleClose : null}>
    <form action={formAction}>
      <h2>Checkout</h2>
      <p>Total amount: {currencyFormater.format(cartTotal)}</p>
      <Input label="Full Name" type="text" id="name"/>
      <Input label="E-mail Address" type="email" id="email"/>
      <Input label="Street" type="text" id="street"/>
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code"/>
        <Input label="City" type="text" id="city"/>
      </div>
      {error && <Error title="Failed to submit order" message={error}/>}
      <p className="modal-actions">
        {action}
      </p>
    </form>
  </Modal>
}