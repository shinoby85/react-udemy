import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
  return async dispatch => {
    const getRequest = async () => {
      const response = await fetch('https://react-dummy-6d7c9-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }
      return await response.json();
    }
    try {
      const cartData = await getRequest();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity || 0,
      }));
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Fetch cart data successfully'
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed.'
      }));
    }
  }
}

export const sendCartData = (cart) => {
  return async dispatch => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }));
    const sendRequest = async () => {
      const response = await fetch('https://react-dummy-6d7c9-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity || 0,
        }),
      })
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
      // const responseData = await response.json();
    }
    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data successfully'
      }))
    } catch (err) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed.'
      }));
    }
  }
}