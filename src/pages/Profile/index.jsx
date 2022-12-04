import { Header } from "../../components/Header"
import {Container } from "../../styles/containet"
import { MainStyle } from "./style"
export const Profile = () => {
    return(
        <Container>
            <Header/>
            <MainStyle>
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </MainStyle>
        </Container>
    )
}