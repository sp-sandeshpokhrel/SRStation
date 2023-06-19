"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { Sessions } from "@utils/types";
import { ProductType } from "@utils/types";
import { useRouter } from "next/navigation";

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  const { data: sessions } = useSession();
  const router = useRouter();
  const [productData, setProductData] = useState({} as ProductType);
  const session = sessions as Sessions;

  const handleDelete = async () => {
    const isConfirmed = await window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      const res = await fetch(`/api/product/${params.id}`, {
        method: "DELETE",
      });
      if (res.status === 201) {
        router.push("/admin");
      }
    }
  };

  useEffect(() => {
    async function getProduct() {
      console.log(params.id);
      const res = await fetch(`/api/product/${params.id}`);
      const data = await res.json();
      setProductData(data);
      console.log(data);
    }
    getProduct();
  }, []);
  return (
    <div className="container mx-auto lg:mb-14 px-4 py-8">
      {/* Large Screen */}

      <div className="hidden lg:flex lg:items-center">
        <div className="w-1/2 pr-8">
          <img
            src={productData.image}
            alt="Product"
            className="w-full h-auto rounded-[10px]"
          />
        </div>
        <div className="w-1/2">
          <div className="w-24">
            {session?.user && (
              <div className="flex flex-row  gap-4 border-t border-gray-100 pt-3">
                <a href={`/admin/product/${productData._id}`}>
                  <button
                    className="rounded-[10px] px-6 py-2 mb-4 bg-blue-500 text-white hover:bg-blue-800"
                    // onClick={handleEdit}
                  >
                    Edit
                  </button>
                </a>
                <button
                  className="rounded-[10px] px-6 py-2 mb-4 bg-red-500 text-white hover:bg-red-800"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold mb-4">{productData.title}</h2>
          <p className="text-gray-700 mb-4">{productData.price}</p>
          {/* <p className="text-gray-700 mb-4">Quantity: 10</p> */}
          <p className="text-gray-700">{productData.description}</p>
          <button className="rounded-[10px] px-8 py-2 mt-4 mb-4 bg-green-500 text-white w-auto hover:bg-green-800">
            <FaWhatsapp className="w-full h-10" /> Buy on WhatsApp
          </button>
        </div>
      </div>

      {/* Medium and Small Screen */}
      <div className="lg:hidden">
        <img
          src={productData.image}
          alt="Product"
          className="w-full h-auto mb-4 rounded-[10px]"
        />
        <div>
          {session?.user && (
            <div className=" flex flex-row gap-4 border-t border-gray-100 pt-3">
              <button
                className="rounded-[10px] px-6 py-2  mb-4 bg-blue-500 text-white hover:bg-blue-800"
                // onClick={handleEdit}
              >
                Edit
              </button>
              <button
                className="rounded-[10px] px-6 py-2 mb-4 bg-red-500 text-white hover:bg-red-800"
                // onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <h2 className="text-2xl font-bold mb-4">{productData.title}</h2>
        <p className="text-gray-700 mb-4">{productData.price}</p>
        {/* <p className="text-gray-700 mb-4">Quantity: 10</p> */}
        <p className="text-gray-700">{productData.description}</p>
        <button className="rounded-[10px] px-8 py-2 mt-4 mb-4 bg-green-500 text-white w-auto  hover:bg-green-800">
          <FaWhatsapp className="w-full h-10" /> Buy on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
