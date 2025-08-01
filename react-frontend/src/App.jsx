import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import UserContext from "./context/UserContext";

function App() {
    return (
        <>
            <UserContext>
                <RouterProvider router={router} />
            </UserContext>
        </>
    );
}

export default App;
