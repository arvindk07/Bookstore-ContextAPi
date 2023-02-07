import * as CartActionTypes from "./Types";
import CartContext from "./Context";
import { useReducer, useContext } from "react";
import CartReducer from "./Reducer";

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (book) => {
    // check if the book is already there then increase the qty by 1
    // else add that book into the cart with qty1

    let updatedCart = [];
    const isBookInCart = state.cart.some((product) => product.id === book.id);
    if (!isBookInCart) {
      updatedCart = [...state.cart, { ...book, qty: 1 }];
    } else {
      updatedCart = state.cart.map((product) => {
        if (product.id === book.id) {
          product.qty++;
        }
        return product;
      });
    }
    dispatch({
      type: CartActionTypes.UPDATE_CART,
      payload: updatedCart,
    });
  };

  const clearCart = () => {
    dispatch({
      payload: [],
      type: CartActionTypes.UPDATE_CART,
    });
  };

  const removeProduct = (book) => {
    // check if book  qty > 1
    // if yes then decrease the qty by 1
    // else remove the book from the cart

    let updatedCart = [];
    const cartBook = state.cart.find((product) => product.id === book.id);
    if (cartBook.qty === 1) {
      // remove the book from the cart
      updatedCart = state.cart.filter((product) => product.id !== book.id);
    } else {
      updatedCart = state.cart.map((product) => {
        if (product.id === book.id) {
          product.qty--;
        }
        return product;
      });
    }
    dispatch({
      payload: updatedCart,
      type: CartActionTypes.UPDATE_CART,
    });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
