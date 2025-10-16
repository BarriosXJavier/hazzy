import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Enter name"
          {...register("name")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <Input
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          {...register("email")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          phone
        </label>
        <Input
          type="text"
          id="phone"
          placeholder="+25074344975"
          {...register("phone")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <Input
          type="text"
          id="address"
          placeholder="123 Main Street"
          {...register("address")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.address && (
          <p className="text-red-500 text-xs">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          city
        </label>
        <Input
          type="city"
          id="city"
          placeholder="Enter city"
          {...register("city")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.city && (
          <p className="text-red-500 text-xs">{errors.city.message}</p>
        )}
      </div>
      <Button
        className="w-full bg-gray-800 text-white p-2 rounded-md cursor-pointer flex items-center justify-center gap-2"
        type="submit"
      >
        Continue
        <ArrowRight className="w-3 h-3 hover:bg-gray-900 transition-all duration-300" />
      </Button>
    </form>
  );
};

export default ShippingForm;
