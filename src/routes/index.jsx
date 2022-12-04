import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Profile } from "../pages/Profile"
import { Register } from "../pages/Register"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}