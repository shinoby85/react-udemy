import {createContext, useReducer} from "react";

export const ADD_ITEM = 'add-item';
export const REMOVE_ITEM = 'remove-item';
export const CLEAR_CART = 'clear_cart'

const CartContext = createContext({
  items: [],
  addItem: (item) => {
  },
  removeItem: (id) => {
  },
  clearCart: () => {
  }
});

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1
        }
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({...action.item, quantity: 1});
      }
      return {
        ...state,
        items: updatedItems
      }
    }
    case REMOVE_ITEM: {
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
      const updatedItems = [...state.items];
      if (updatedItems[existingCartItemIndex].quantity > 1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1
        }
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.splice(existingCartItemIndex, 1);
      }
      return {
        ...state,
        items: updatedItems
      }
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: []
      }
    }
    default:
      return {...state};
  }
}

export function CartContextProvider({children}) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  }
  
  function addItem(item) {
    dispatchCartAction({
      type: ADD_ITEM,
      item: item
    });
  }
  
  function removeItem(id) {
    dispatchCartAction({type: REMOVE_ITEM, id});
  }
  
  function clearCart() {
    dispatchCartAction({type: CLEAR_CART})
  }
  
  console.log(cartContext.items);
  return <CartContext.Provider value={cartContext}>
    {children}
  </CartContext.Provider>;
}

export default CartContext;