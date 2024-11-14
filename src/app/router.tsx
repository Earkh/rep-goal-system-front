import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AppRoot } from "./routes/app/root";
import { ROUTES } from "@/routes.ts";

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppRoot queryClient={queryClient} />,
      children: [
        {
          path: "",
          element: <Navigate to={ROUTES.HOME} replace />,
        },
        {
          path: ROUTES.HOME,
          lazy: async () => {
            const { HomeRoute } = await import("./routes/app/home");
            return { Component: HomeRoute };
          },
        },
        {
          path: ROUTES.EXERCISE,
          lazy: async () => {
            const { ExerciseRoute } = await import("./routes/app/exercise");
            return { Component: ExerciseRoute };
          },
        },
        {
          path: ROUTES.ROUTINE,
          lazy: async () => {
            const { RoutineRoute } = await import("./routes/app/routine");
            return { Component: RoutineRoute };
          },
        },
        {
          path: ROUTES.WORKOUT,
          lazy: async () => {
            const { WorkoutRoute } = await import("./routes/app/workout");
            return { Component: WorkoutRoute };
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
