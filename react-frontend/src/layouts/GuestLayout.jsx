import React from "react";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function GuestLayout() {
    return (
        <>
            <Navbar/>

            <main className="mx-auto max-w-screen-lg p-4">
                <Outlet />
            </main>
            {/* <footer>Footer</footer> */}
        </>
    );
}

export default GuestLayout;
