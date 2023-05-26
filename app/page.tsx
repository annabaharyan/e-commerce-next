import Product from "@/src/components/Product";
import { ProductType } from "@/types";

export default async function Home() {
  const productsResponse = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await productsResponse.json();

  return (
    <main className="max-w-screen-xl mx-auto p-4 md:p5 mt-44">
      <section className="flex flex-col space-y-12 ">
        <h1 className=" text-5xl sm:font-semibold md:font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          OUR PRODUCTS
        </h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
