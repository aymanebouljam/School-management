import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import { Button } from "@/components/ui/button";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
