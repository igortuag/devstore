import { api } from "@/app/data/api";
import { Product } from "@/app/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

async function getSearchResults(): Promise<Product[]> {
  const response = await api("products/search", {
    next: { revalidate: 60 * 60 }
  });
  const data = await response.json();
  return data;
}

export default async function Search({ searchParams }: SearchProps) {
  const query = searchParams.q;

  if (!query) {
    redirect("/");
  }

  const searchResults = await getSearchResults();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results for &quot;<span className="font-semibold">{query}</span>&quot;:
      </p>

      <div className="grid grid-cols-3 gap-6">
        {searchResults.map(({ id, title, slug, image, price }) => (
          <Link
            href={`/product/${slug}`}
            key={id}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden"
          >
            <Image
              src={image}
              className="group-hover:scale-105 transition-transform duration-200 ease-in-out"
              alt={title}
              width={480}
              height={480}
              quality={100}
            />

            <div className="absolute bottom-10 right-10 h-12 items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
