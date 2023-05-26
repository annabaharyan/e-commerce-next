"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import { useState } from "react";

type Props = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: Props) {
  const [isloading, setIsLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 p-5 ${
            isloading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isloading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </>
  );
}
