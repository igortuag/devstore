import { api } from "@/app/data/api";
import { Product } from "@/app/data/types/product";
import Image from "next/image";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function getProductBySlug(slug: string): Promise<Product> {
  const response = await api("product/" + slug);
  const data = await response.json();
  return data;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt="Sample Product"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% algodão orgânico e 12% poliéster reciclado.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            $129
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de $10,75
          </span>
        </div>
      </div>
    </div>
  );
}
