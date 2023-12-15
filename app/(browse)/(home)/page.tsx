import { Suspense } from "react";

import { Results, ResultsSkeleton } from "./_components/results";

export default function Home() {
  return (
    <div>
      <h1 className="h-full p-8 max-w-screen-2xl mx-auto">
        <Suspense fallback={<ResultsSkeleton />}>
          <Results />
        </Suspense>
      </h1>
    </div>
  );
}
