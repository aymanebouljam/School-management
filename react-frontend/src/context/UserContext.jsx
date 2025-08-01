import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }

    return context;
}

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
