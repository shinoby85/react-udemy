import {createContext, useReducer} from "react";

export const ADD_ITEM = 'add-item';
export const REMOVE_ITEM = 'remove-item';

const CartContext = createContext({
  items: [],
  addItem: (item) => {
  },
  removeItem: (id) => {
  },
});

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItems = {
          ...existingItem,
          quantity: existingItem.quantity + 1
        }
        updatedItems[existingCartItemIndex] = updatedItems;
      } else {
        updatedItems.push({...action.item, quantity: 1});
      }
      return {
        ...state,
        items: updatedItems
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}

export function CartContextProvider({children}) {
  useReducer(cartReducer, {items: []});
  return <CartContext.Provider value={}>
    {children}
  </CartContext.Provider>;
}

export default CartContext;