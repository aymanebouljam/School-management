import React from "react";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
    const { user } = useOutletContext();

    if (!user) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
                No user data available.
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                User Profile
            </h2>
            <div className="space-y-2">
                <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                        Name:{" "}
                    </span>
                    <span className="text-gray-800 dark:text-gray-100">
                        {user.name}
                    </span>
                </div>
                <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                        Email:{" "}
                    </span>
                    <span className="text-gray-800 dark:text-gray-100">
                        {user.email}
                    </span>
                </div>
                <div>
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                        Joined:{" "}
                    </span>
                    <span className="text-gray-800 dark:text-gray-100">
                        {new Date(user.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
