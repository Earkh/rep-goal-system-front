import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "components/layout/layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AppRootProps = {
  queryClient: QueryClient;
};

export const AppRoot = ({ queryClient }: AppRootProps) => {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        key={location.pathname}
        fallback={<div>Something went wrong!</div>}
      >
        <Layout>
          <Outlet />
        </Layout>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
