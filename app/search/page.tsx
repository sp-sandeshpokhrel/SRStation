"use client";

import React, { useEffect, useState } from "react";
import Product from "@components/Product";
import { ProductType } from "@utils/types";

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([] as ProductType[]);
  const [allProducts, setAllProducts] = useState([] as ProductType[]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(searchTerm);

    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic based on the sortOption state
    console.log("Search button clicked");
  };

  useEffect(() => {
    if (searchTerm !== "" && searchTerm !== undefined) {
      setProducts([]);
      allProducts.filter((product: ProductType) => {
        if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          setProducts((prev) => [...prev, product]);
        }
      });
    } else {
      setProducts(allProducts);
    }
  }, [searchTerm]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data);
      setAllProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            onChange={handleChange}
            value={searchTerm}
            className="border border-gray-300 px-2 py-1 rounded mr-2"
            placeholder="Search"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Search Results</h2>
      </div>
      {/* {here make product list} */}
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
    </div>
  );
};

export default SearchPage;
