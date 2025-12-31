"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchForm() {
  const { push } = useRouter();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = Object.fromEntries(formData.entries());
    const query = data.q as string;

    if (!query) {
      return;
    }

    push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-9000 px-5 py-3 ring-zinc-700 "
      onSubmit={handleSearch}
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        placeholder="Find products"
        className="bg-transparent outline-none flex-1 text-sm placeholder:text-zinc-500 text-white"
        required
      />
    </form>
  );
}
