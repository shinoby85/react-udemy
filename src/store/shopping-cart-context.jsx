import {createContext, useReducer, useState} from "react";
import {DUMMY_PRODUCTS} from "../dummy-products.js";
import {ADD_ITEM, UPDATE_ITEM} from "./constants.js";

export const CartContext = createContext({
  items: [],
  shoppingCartDispatch: () => {}
});

function shoppingCartReducer(state, action) {
  switch (action.type) {
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
    case UPDATE_ITEM: {
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
    default: return state;
  }
}

export default function CartContextProvider({children}) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []});
  const ctxValue = {
    items: shoppingCartState.items,
    shoppingCartDispatch
  }

  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>
}