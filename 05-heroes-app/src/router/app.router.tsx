import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

// Layout component
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";

// Page components
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";

// Lazy load
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));
const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "heroes/1",
                element: <HeroPage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
]);
