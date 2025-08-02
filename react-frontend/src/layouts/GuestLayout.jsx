import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { checkAuth } from "../api/auth";
import { Loader } from "lucide-react";

function GuestLayout() {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        checkAuth()
            .then((res) => {
                if (res) setIsAuth(true);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [navigate]);

    return loading ? (
        <div className="min-h-screen flex items-center justify-center">
            <Loader className="h-16 w-16 animate-spin" />
        </div>
    ) : isAuth ? (
        <Navigate to="/" replace />
    ) : (
        <>
            <Navbar isAuth={isAuth} />

            <main className="mx-auto max-w-screen-lg p-4">
                <Outlet />
            </main>
        </>
    );
}

export default GuestLayout;
