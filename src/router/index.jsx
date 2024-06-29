import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login/index.";


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}