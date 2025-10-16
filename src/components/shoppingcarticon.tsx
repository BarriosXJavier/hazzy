"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  return (
    <Link href="/cart" className={`relative w-4 h-4 text-gray-600 ${!hasHydrated ? 'opacity-0' : ''}`}>
      <ShoppingCart />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
