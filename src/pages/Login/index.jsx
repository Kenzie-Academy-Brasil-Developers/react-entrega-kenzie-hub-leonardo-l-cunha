import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { Button} from "../../components/Button"
import { BtnRegister } from "../../components/Button/Button Register"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { ErroLogin, FormStyle } from "./style"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
 
export const Login = () => {
    const navigate = useNavigate()

    const echma = yup.object().shape({
        email: yup.string().required("Email Obrigatoio").email("email invalido"),
        password: yup.string().required("Senha obrigatoria"),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(echma)
    })

    const loginApi = async (data)=> {
       try {
        const response = await api.post("sessions",data)
        window.localStorage.clear()
        window.localStorage.setItem("user",JSON.stringify(response.data))
        toast.success("Login realizado com sucesso")
        setTimeout(()=> {
            navigate("/profile")
        },3000)
       } catch (error) {
        toast.error(error.response.data.message)
       }
    }
    const onSubmit = (data) => {
        loginApi(data)
    }
    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
             />
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input name="email" type= "email" children="Email" placeholder="Digite seu email" register={register("email")}/>
            {errors.email?.message && <ErroLogin>{errors.email.message}</ErroLogin>}
            <Input name="password" type= "password" children="Senha" placeholder="Digite sua senha" register={register("password")}/>
            {errors.password?.message && <ErroLogin>{errors.password.message}</ErroLogin>}
            <Button type={"submit"} children={"Entrar"} />
            <span>Ainda não possui uma conta?</span>
            <Link to="/register">
                <BtnRegister children="Cadastre-se"/>
            </Link>
        </FormStyle>
        </>
        
    )
}