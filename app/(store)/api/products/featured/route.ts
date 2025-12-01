import data from "../data.json";

export async function GET() {
  const featuredProductIds = data.products.filter(
    (product) => product.featured
  );

  return Response.json(featuredProductIds);
}
