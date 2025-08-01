import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { checkAuth } from "../../api/auth";

import { Loader } from "lucide-react";

function StudentDashboardLayout() {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(true);
    const[user, setUser] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        checkAuth()
            .then((res) => {
                if (!res) {
                    setIsAuth(false);
                    navigate("/login");
                }else{
                    setUser(res)
                }
            })
            .catch((err) => {
                console.error(err);
                setIsAuth(false);
                navigate("/login");
            })
            .finally(() => setLoading(false));
    }, [navigate]);


    return loading ? (
        <div className="min-h-screen flex items-center justify-center">
            <Loader className="h-16 w-16 animate-spin" />
        </div>
    ) : (
        <>
            <Navbar isAuth={isAuth} />

            <main className="mx-auto max-w-screen-lg p-4">
                <Outlet context={{user}} />
            </main>
        </>
    );
}

export default StudentDashboardLayout;
