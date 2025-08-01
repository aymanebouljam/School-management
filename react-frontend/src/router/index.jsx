import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/student/Dashboard";
import Layout from "../layouts/Layout";
import GuestLayout from "../layouts/GuestLayout";
import StudentDashboardLayout from "../layouts/student/StudentDashboardLayout";
import Logout from "../pages/student/Logout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        element: <StudentDashboardLayout />,
        children: [
            {
                path: "/student/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
        ],
    },
]);
