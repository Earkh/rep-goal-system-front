
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

export const AppRoot = () => {
  const location = useLocation();
  return (
    <ErrorBoundary
      key={location.pathname}
      fallback={<div>Something went wrong!</div>}
    >
      <Outlet/>
    </ErrorBoundary>
  );
}