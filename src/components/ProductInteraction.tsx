"use client";

import { ProductType } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?{params.toString()}`, { scroll: false });
  };

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("Product Added To Cart");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/*SIZE*/}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div>
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*COLOR*/}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex flex-col gap-2 text-xs">
          <span className="text-gray-500">Color</span>
          <div>
            {product.sizes.map((color) => (
              <div
                className={`cursor-pointer border-1 p-[2px] ${
                  selectedColor === color ? "border-gray-300" : "border-white"
                }`}
                key={color}
                onClick={() => handleTypeChange("color", color)}
              >
                <div
                  className={`w-6 h-6 `}
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*QUANTITY*/}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 ">Quantity</span>
        <div className="flex items-center gap-2">
          <Button
            className="cursor-pointer border-1 border-gray-300 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Button
            className="cursor-pointer border-1 border-gray-300 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Button
        className="flex text-white px-4 py-2 rounded-md shadow-lg items-center justify-center gap-2 cursor-pointer text-sm font-medium"
        onClick={handleAddToCart}
      >
        <Plus />
        Add to Cart
      </Button>
      <Button className="ring-1 ring-gray-400 shadow-lg text-gray-400 px-4 py-2 rounded-md items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <ShoppingCart />
        Buy this item
      </Button>
    </div>
  );
};

export default ProductInteraction;
