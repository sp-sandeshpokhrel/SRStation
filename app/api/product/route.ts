import { connectToDB } from "@utils/database";
import Product from "@models/Product";

export const GET = async (request: Request) => {
  try {
    await connectToDB();
    const product = await Product.find({});
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    await connectToDB();
    const productData = await request.json();
    console.log(productData);

    const title = productData.title;
    const description = productData.description;
    const category = productData.category;
    const price = productData.price;
    const image = productData.image;
    const product = await Product.create({
      title,
      description,
      price,
      category,
      image,
    });

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Couldn't Create Product", { status: 500 });
  }
};
