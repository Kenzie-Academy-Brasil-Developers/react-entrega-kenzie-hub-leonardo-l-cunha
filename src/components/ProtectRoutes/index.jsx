import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userContexts } from "../../contexts/userContext"

export const ProtectRoutes = () => {
    const { user, loading } = useContext(userContexts)
    if(loading){
        return null
    }
    return user ?  <Outlet/> : <Navigate to="/"/>
       
}