import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout() {
    return (
        <>
            <NavBar />

            <main className="mx-auto max-w-screen-lg p-4">
                <Outlet />
            </main>
            {/* <footer>Footer</footer> */}
        </>
    );
}

export default Layout;
