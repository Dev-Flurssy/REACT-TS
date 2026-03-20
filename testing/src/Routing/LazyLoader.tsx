import { lazy, Suspense } from "react";

const LazyLoader = () => {
  const Cmp = lazy(() => import("./Home"));
  const Cdp = lazy(() => import("./About"));
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Cmp />
      </Suspense>
      <Suspense fallback={<div>Loading... Please wait </div>}>
        <Cdp />
      </Suspense>
    </div>
  );
};

export default LazyLoader;
