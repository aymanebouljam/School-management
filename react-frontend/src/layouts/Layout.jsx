import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { checkAuth } from "../api/auth";


function Layout() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        checkAuth().then((res) => res && setIsAuth(true))
        .catch((err) => {
            console.error(err)
        })
    }, []);
    return (
        <>
            <NavBar isAuth={isAuth}/>

            <main className="mx-auto max-w-screen-lg p-4">
                <Outlet />
            </main>
            {/* <footer>Footer</footer> */}
        </>
    );
}

export default Layout;
