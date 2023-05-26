import { ProductType } from "@/types";
import Link from "next/link";
import React from "react";
import ProductImage from "./ProductImage";

type Props = { product: ProductType };

export default function Product({ product }: Props) {
  return (
    <Link
      prefetch={false}
      href={`/product/${product.id}`}
      className=" h-96 flex flex-col items-center p-5 border rounded hover:scale-105  transition-transform duration-500 ease-in-out hover:opacity-80"
    >
      <div className="relative w-full max-h-72 flex-1">
  
        <ProductImage product={product} fill />
      </div>
      <div className="flex justify-center content-center flex-wrap font-semibold gap-x-5 ">
        <h2 className="w-44 truncate">{product.title}</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">{product.price} $</p>
      </div>
      <div>
        <p className="w-64 italic text-xs line-clamp-3 text-gray-600">
          {product.description}
        </p>
      </div>
    </Link>
  );
}
