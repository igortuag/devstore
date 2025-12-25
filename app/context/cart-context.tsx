"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  productId: string;
  quantity: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: string) {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.productId === productId
      );

      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity = (
          parseInt(updatedItems[itemIndex].quantity) + 1
        ).toString();
        return updatedItems;
      } else {
        return [...prevItems, { productId, quantity: "1" }];
      }
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
