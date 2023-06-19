"use client";

import { useEffect, useState } from "react";
import Product from "./Product";
import { ProductType } from "@utils/types";

const Home = () => {
  // get products from product context

  const [products, setProducts] = useState([] as any);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-center">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {products.map((product: ProductType) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
