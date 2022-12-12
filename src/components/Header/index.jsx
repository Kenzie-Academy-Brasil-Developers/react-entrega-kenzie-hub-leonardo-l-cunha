import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { userContexts } from "../../contexts/userContext"
import img  from "../../pages/Register/Logo.svg"
import { ContainerStyle, HeadStyle, NavStyle } from "./style"

export const Header = () => {
    const { user } = useContext(userContexts)
    
    const navigate = useNavigate()
    const clearLocal = () => {
        localStorage.clear()
        navigate("/")
    }

    return(
       <>
        <NavStyle>
            <ContainerStyle>
                <img src={img} alt="" />
                <button onClick={clearLocal}>Sair</button>
            </ContainerStyle>
        </NavStyle>
        <HeadStyle>
            <ContainerStyle>
            <h1>Olá, {user.name} </h1>
            <span>{user.course_module}</span>
            </ContainerStyle>
            
        </HeadStyle>
       </>
    )
}