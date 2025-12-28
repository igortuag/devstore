"use client";

import { useCart } from "../context/cart-context";

type AddToCartProps = {
  productId: string;
};

export function AddToCart({ productId }: AddToCartProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(productId);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="text-white mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold hover:bg-emerald-700"
    >
      Add to cart
    </button>
  );
}
