import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-3 gap-6">
      <Link
        href="/"
        className="group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-ai-side.png"
          alt="Moletom AI Side"
          className="group-hover:scale-105 transition-transform duration-200 ease-in-out"
          width={920}
          height={920}
          quality={100}
        />
      </Link>

      <Link
        href="/"
        className="group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-200 ease-in-out"
          alt="Moletom Java"
          width={920}
          height={920}
          quality={100}
        />
      </Link>

      <Link
        href="/"
        className="group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          className="group-hover:scale-105 transition-transform duration-200 ease-in-out"
          alt="Camiseta Do While 2022"
          width={920}
          height={920}
          quality={100}
        />
      </Link>
    </div>
  );
}
