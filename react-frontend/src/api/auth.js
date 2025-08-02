import { axiosClient } from "./axios";

export function getCookie(name) {
    const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (match) return decodeURIComponent(match[2]);
    return null;
}

export const checkAuth = async () => {
    try {
        const user = await axiosClient.get("api/user");
        return user.data;
    } catch (err) {
        throw new Error(err?.response?.data?.message ?? err.message);
    }
};
