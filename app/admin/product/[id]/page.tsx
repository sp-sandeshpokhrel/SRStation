"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import ProductForm from "@components/ProductForm";

type EditProductFormProps = {
  params: {
    id: string;
  };
};

const EditProductForm = ({ params }: EditProductFormProps) => {
  const { data: sessions, status } = useSession();
  const router = useRouter();

  const [productData, setProductData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    async function getProduct() {
      console.log(params.id);
      const res = await fetch(`/api/product/${params.id}`);
      const data = await res.json();
      setProductData(data);
    }
    getProduct();
  }, [params.id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending data to a server
    console.log(productData);
    const res = await fetch(`/api/product/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(productData),
    });

    if (res.status === 201) {
      router.push("/admin");
    } else {
      console.log("Something went wrong");
    }
    // Reset form fields
    setProductData({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  };

  if (status === "unauthenticated") {
    return redirect("/");
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <ProductForm
        type="Edit"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        productData={productData}
      />
    </div>
  );
};

export default EditProductForm;
