import data from "../data.json";
import { z } from "zod";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return new Response("Product not found", { status: 404 });
  }

  return Response.json(product);
}
