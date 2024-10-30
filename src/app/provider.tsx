import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';



import { ErrorBoundary } from 'react-error-boundary';
import { queryConfig } from 'lib/react-query.tsx';
import { MainErrorFallback } from 'components/errors/main.tsx';


type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};