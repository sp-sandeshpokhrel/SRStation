import { ChangeEvent, FormEvent } from "react";

type ProductFormProps = {
  type: string;
  productData: {
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProductForm = ({
  type,
  productData,
  handleSubmit,
  handleChange,
}: ProductFormProps) => {
  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={productData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={productData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <input
          id="description"
          name="description"
          value={productData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 h-16 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={productData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          {type}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
