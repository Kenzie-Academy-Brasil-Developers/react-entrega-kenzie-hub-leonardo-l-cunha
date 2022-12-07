import { useNavigate } from "react-router-dom"
import img  from "../../pages/Register/Logo.svg"
import { ContainerStyle, HeadStyle, NavStyle } from "./style"

export const Header = () => {
    const data = JSON.parse(localStorage.getItem("@USERID"))
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
            <h1>Olá, {data.name}</h1>
            <span>{data.course_module}</span>
            </ContainerStyle>
            
        </HeadStyle>
       </>
    )
}