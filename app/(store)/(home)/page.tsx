import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-3 gap-6">
      <Link
        href="/"
        className="col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-ai-side.png"
          alt="Moletom AI Side"
          width={860}
          height={860}
          quality={100}
        />
      </Link>
    </div>
  );
}
