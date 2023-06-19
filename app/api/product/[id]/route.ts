import { connectToDB } from "@utils/database";
import Product from "@models/Product";

type Params = { params: { id: string } };

export const GET = async (request: Request, { params }: Params) => {
  try {
    await connectToDB();
    const product = await Product.findOne({ _id: params.id });

    console.log(product);
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Product not found", { status: 500 });
  }
};

export async function PATCH(req: Request, { params }: Params) {
  try {
    await connectToDB();
    const id = params.id;
    const product = await Product.findOne({
      _id: id,
    });
    if (!product) {
      return new Response("Product not found", {
        status: 401,
      });
    }
    const { title, description, price, category, image } = await req.json();
    product.title = title;
    product.description = description;
    product.price = price;
    product.category = category;
    product.image = image;
    await product.save();

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Internal Server Error while editing Job", {
      status: 500,
    });
  }
}

// function for calling delete job
export async function DELETE(request: Request, { params }: Params) {
  try {
    await connectToDB();
    const id = params.id;
    const product = await Product.findOne({
      _id: id,
    });
    if (!product) {
      return new Response("Product not found", {
        status: 401,
      });
    }
    const deletedJob = await Product.findByIdAndDelete(id);

    return new Response(`Deleted Job ID = ${deletedJob._id}`, { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Internal Server Error while deleting Job", {
      status: 500,
    });
  }
}
