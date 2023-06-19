"use client";

import React from "react";
import ProductList from "@components/ProductList";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { Sessions } from "@utils/types";
import { useRouter } from "next/navigation";

const Admin = () => {
  const { data: sessions } = useSession();
  const session = sessions as Sessions;
  const router = useRouter();

  const handleCreateProduct = () => {
    router.push("/admin/product");
  };

  return (
    <div className="container mx-auto p-4 min-h-[563px]">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {session?.user ? (
        <>
          <div className="flex justify-end mb-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={handleCreateProduct}
            >
              Create Product
            </button>
            <a href="/api/auth/signout">
              <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                <FaSignOutAlt className="mr-1" /> Sign Out
              </button>
            </a>
          </div>

          <ProductList />
        </>
      ) : (
        <div className="flex justify-end mb-4">
          <a href="/api/auth/signin">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              <FaSignInAlt className="mr-1" /> Sign In
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Admin;
