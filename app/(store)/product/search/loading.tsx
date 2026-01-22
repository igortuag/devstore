import { Skeleton } from "@/app/components/skeleton";
import { CurrentSearch } from "./current-search";
import { Suspense } from "react";

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <Skeleton key={index} className="h-[400px]" />
        ))}
      </div>
    </div>
  );
}
