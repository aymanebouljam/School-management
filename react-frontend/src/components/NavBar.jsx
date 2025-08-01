// src/components/Navbar.jsx
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isAuth }) {
    const [isDark, setIsDark] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const prefersDark = localStorage.getItem("theme") === "dark";
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
    }, []);

    const toggleDarkMode = () => {
        const nextMode = !isDark;
        setIsDark(nextMode);
        document.documentElement.classList.toggle("dark", nextMode);
        localStorage.setItem("theme", nextMode ? "dark" : "light");
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    SchoolApp
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
                    <li>
                        <Link to="/" className="hover:text-indigo-500">
                            Home
                        </Link>
                    </li>
                    {isAuth ? (
                        <li>
                            <Link to="/logout" className="hover:text-indigo-500">
                                Logout
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to="/login"
                                    className="hover:text-indigo-500"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className="hover:text-indigo-500"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/users" className="hover:text-indigo-500">
                            Users
                        </Link>
                    </li>
                </ul>

                {/* Right Buttons */}
                <div className="flex items-center gap-4">
                    {/* Dark mode */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-gray-700 dark:text-gray-300 hover:text-indigo-500"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? "🌙" : "☀️"}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
                    <ul className="flex flex-col gap-3 text-gray-800 dark:text-gray-200">
                        <li>
                            <a href="#" className="hover:text-indigo-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-500">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-500">
                                Register
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-500">
                                Users
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
