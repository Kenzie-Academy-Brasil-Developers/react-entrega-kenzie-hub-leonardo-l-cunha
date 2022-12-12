import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { DivHead, FormStyled, SpanErro } from "./style"
import  img  from "./Logo.svg"
import { useForm } from "react-hook-form"
import  * as yup  from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react"
import { userContexts } from "../../contexts/userContext"

export const Register = () => {
    const { loading,registerApi } = useContext(userContexts)
   
    const echma = yup.object().shape({
        name:yup.string().required("O nome e obrigatorio").min(4,"o minino de caracteres e 4"),
        email: yup.string().required("O email e obrigatorio").email("email invalido"),
        password: yup.string().required("A senha e obrigatoria")
        .matches(/(?=.*?[A-Z])/,"Pelo menos uma letra maiúscula")
        .matches(/(?=.*?[a-z])/,"Pelo menos uma letra minúscula")
        .matches(/(?=.*?[0-9])/,"pelo menos um numero")
        .matches(/(?=.*?[#?!@$%^&*-])/,"Pelo menos um caractere especial")
        .min(8,"pelo menos oito caracteres"),
        confirPass: yup.string().required("Confirmação da senha e obrigatoria").oneOf([yup.ref("password")], "As senhas devem ser a mesma "),
        bio: yup.string().required("Campo Obrigatio").min(10, "minimo de 10 caracteres").max(300,"maximo de 300 caracteres"),
        contact: yup.string().required("Campo obrigato")

    })

    const { register , handleSubmit , formState: { errors }} = useForm({
        resolver: yupResolver(echma)
    })

    const onSubmit = (data) => {
        registerApi(data)
       
    } 
    return(
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
            <DivHead>
            <img src={img} alt="" />
                <Link to="/"><p>Volta</p></Link>
            </DivHead>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <h1>Crie sua conta</h1>
                <span>Rapido e grátis, vamos nessa</span>
                <Input name="name" type="text" placeholder="Digite aqui seu nome" children="Nome" register={register("name")} disabled={loading}/>
                {errors.name?.message && <SpanErro>{errors.name.message}</SpanErro>}
                <Input name="email" type="email" placeholder="Digite aqui seu email" children="Email" register={register("email")} disabled={loading}/>
                {errors.email?.message && <SpanErro>{errors.email.message}</SpanErro>}
                <Input name="passwrd" type="password" placeholder="Digite aqui sua senha" children="Senha" register={register("password")} disabled={loading}/>
                {errors.password?.message && <SpanErro>{errors.password.message}</SpanErro>}
                <Input name="password"type="password" placeholder="Digite novamente sua senha" children="Confirmar senha" register={register("confirPass")} disabled={loading}/>
                {errors.confirPass?.message && <SpanErro>{errors.confirPass.message}</SpanErro>}
                <Input name="bio" type="text" placeholder="Fale sobre você" children="Bio" register={register("bio")} disabled={loading}/>
                {errors.bio?.message && <SpanErro>{errors.bio.message}</SpanErro>}
                <Input name="contact" type="text" placeholder="Opção de contato" children="contato" register={register("contact")} disabled={loading}/>
                {errors.contact?.message && <SpanErro>{errors.contact.message}</SpanErro>}
                <select {...register("course_module")} >
                    <option value="Primeiro Módulo(Introdução ao frontend)">Primeiro Módulo</option>
                    <option value="segundo Módulo (Frontend intermediario)">segundo Módulo</option>
                    <option value="Terceiro Módulo (Frontend avançado)">Terceiro Módulo</option>
                </select>
                <Button type="submit" children={loading ? "..." : "Cadastrar"} disabled={loading}/>
            </FormStyled>
        </>
    
    )
        
  
}