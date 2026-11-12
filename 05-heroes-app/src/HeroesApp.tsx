import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const HeroesApp = () => {
  return (
    <div className="bg-gradient flex flex-col items-center justify-center min-h-screen">
      <RouterProvider router={appRouter} />
    </div>
  )
}
