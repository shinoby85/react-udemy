import {createContext, useReducer} from "react";
import {DUMMY_PRODUCTS} from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  shoppingCartDispatch: () => {
  }
});
export const ADD_ITEM = 'add-item-to-cart';
export const UPDATE_CART_ITEM = 'update-cart-item';

function reducerFn(state, action) {
  switch (action.name) {
    case ADD_ITEM: {
      const updatedItems = [...state.items];
      
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];
      
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
        updatedItems.push({
          id: action.payload.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: updatedItems,
      };
    }
    case UPDATE_CART_ITEM: {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );
      
      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };
      
      updatedItem.quantity += action.payload.amount;
      
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
      
      return {
        ...state,
        items: updatedItems,
      };
    }
    default: {
      return state;
    }
  }
}

export default function CartContextComponent({children}) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(reducerFn, {
    items: []
  });
  
  const ctx = {
    items: shoppingCartState.items,
    shoppingCartDispatch
  }
  return (
    <CartContext.Provider value={ctx}>
      {children}
    </CartContext.Provider>
  );
}