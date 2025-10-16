import {
  PaymentFormInputs,
  paymentFormSchema,
  ShippingFormInputs,
  shippingFormSchema,
} from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from "./shoppingcarticon";
import Image from "next/image";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name On Card
        </label>
        <Input
          type="text"
          id="cardHolder"
          placeholder="Enter name"
          {...register("cardHolder")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cardHolder && (
          <p className="text-red-500 text-xs">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <Input
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9101 1121"
          {...register("cardNumber")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <Input
          type="text"
          id="expirationDate"
          placeholder="01/32"
          {...register("expirationDate")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.expirationDate && (
          <p className="text-red-500 text-xs">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <Input
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cvv && (
          <p className="text-red-500 text-xs">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=25&fit=crop"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=25&fit=crop"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=50&h=25&fit=crop"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <Button
        className="w-full bg-gray-800 text-white p-2 rounded-md cursor-pointer flex items-center justify-center gap-2"
        type="submit"
      >
        Checkout
        <ShoppingCart className="w-3 h-3 hover:bg-gray-900 transition-all duration-300" />
      </Button>
    </form>
  );
};

export default PaymentForm;
