import { Route, Routes } from "react-router-dom"
import { ProtectRoutes } from "../components/ProtectRoutes"
import { TechProvider } from "../contexts/TechContext"
import { Login } from "../pages/Login"
import { Profile } from "../pages/Profile"
import { Register } from "../pages/Register"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<ProtectRoutes/>}>
                <Route path="/profile" element={<TechProvider><Profile/></TechProvider>}/>
            </Route>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}