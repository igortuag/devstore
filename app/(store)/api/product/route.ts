import data from "../products/data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return new Response("Product not found", { status: 404 });
  }

  return Response.json(product);
}
