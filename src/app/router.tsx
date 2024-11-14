import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AppRoot } from "./routes/app/root";

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppRoot queryClient={queryClient} />,
      children: [
        {
          path: "",
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          lazy: async () => {
            const { HomeRoute } = await import("./routes/app/home");
            return { Component: HomeRoute };
          },
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
