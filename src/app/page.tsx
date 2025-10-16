import ProductList from "@/components/product-list";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className="">
      <ProductList category={category} params="products" />
    </div>
  );
}
