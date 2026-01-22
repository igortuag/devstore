"use client";

import { useSearchParams } from "next/dist/client/components/navigation";

export function CurrentSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <p className="text-sm">
      Results for: <span className="font-semibold">{query}</span>
    </p>
  );
}
