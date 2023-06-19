"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ProductForm from "@components/ProductForm";

const CreateProductForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending data to a server
    console.log(productData);
    const res = await fetch(`/api/product`, {
      method: "POST",
      body: JSON.stringify(productData),
    });
    if (res.status === 201) {
      router.push("/admin");
    } else {
      console.log("Something went wrong");
    }
    // Reset form fields
  };

  if (status === "unauthenticated") {
    return redirect("/");
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <ProductForm
        type="Create"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        productData={productData}
      />
    </div>
  );
};

export default CreateProductForm;
