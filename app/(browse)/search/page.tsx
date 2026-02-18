import { redirect } from "next/navigation";

import { Results, ResultsSkeleton } from "./_components/results";
import { Suspense } from "react";

type SearchPageProps = {
  searchParams: Promise<{
    term?: string;
  }>;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { term } = await searchParams;
  if (!term) redirect("/");

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results term={term} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
