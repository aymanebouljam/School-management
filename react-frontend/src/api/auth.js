import { axiosClient } from "./axios";

export const checkAuth = async () => {
    try {
        const user = await axiosClient.get("api/user")
        return user.data;
    } catch (err) {
        console.error(err?.response?.data?.message ?? err.message);
        return null;
    }
};
