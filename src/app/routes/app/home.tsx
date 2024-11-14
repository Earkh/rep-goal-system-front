import { Link } from "react-router-dom";
import { ROUTES } from "@/routes.ts";

export const HomeRoute = () => {
  return (
    <div>
      <h1 className="text-xl">Home</h1>
      <ul>
        <li>
          <Link to={ROUTES.WORKOUT}>Workout</Link>
        </li>
        <li>
          <Link to={ROUTES.ROUTINE}>Routines</Link>
        </li>
        <li>
          <Link to={ROUTES.EXERCISE}>Exercises</Link>
        </li>
      </ul>
    </div>
  );
};
