import React, { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { getCookie } from "../../api/auth";

function Logout() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient.get("sanctum/csrf-cookie").then(() => {
            const csrfToken = getCookie("XSRF-TOKEN");
            if (csrfToken) {
                axiosClient
                    .post("logout", null, {
                        headers: {
                            "X-XSRF-TOKEN": csrfToken,
                            Accept: "application/json",
                        },
                    })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.error("Logout: ", err.message);
                    })
                    .finally(() => setLoading(false));
            }
        });
    }, [navigate]);
    return (
        loading ? (
            <div className="min-h-screen flex items-center justify-center">
                <Loader className="h-16 w-16 animate-spin" />
            </div>

        ) : <Navigate to="/login" replace />
    );
}

export default Logout;
