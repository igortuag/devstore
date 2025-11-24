import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-9000 px-5 py-3 ring-zinc-700 ">
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            placeholder="Find products"
            className="bg-transparent outline-none flex-1 text-sm placeholder:text-zinc-500 text-white"
          />
        </form>
      </div>
      <div className="flex items-center gap-4"></div>
    </header>
  );
}
