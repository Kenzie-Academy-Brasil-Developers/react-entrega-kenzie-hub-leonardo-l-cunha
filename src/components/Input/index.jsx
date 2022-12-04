import { FielSet } from "./style"


export const Input = ({ name ,type ,children, placeholder, register ,disabled}) => {
    return (
        <FielSet>
            <label htmlFor={name}>{children}</label>
            <input name={name} type={type} placeholder={placeholder} {...register} disabled={disabled}/>
        </FielSet>
    )
}