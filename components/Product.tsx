"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ProductType } from "@utils/types";

const Product: React.FC<ProductType> = ({ ...product }) => {
  return (
    <a href={`/product/${product._id}`}>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="rounded-[10px] px-8 py-2 mt-4 mb-4 bg-green-500 text-white w-auto  hover:bg-green-800">
            <FaWhatsapp className="w-full h-10" /> Buy on WhatsApp
          </button>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">
          {product.category}
        </div>

        <h2 className="font-semibold mb-1">{product.title}</h2>

        <h2 className="font-semibbold">$ {product.price}</h2>
      </div>
    </a>
  );
};

export default Product;
