import { FielSet } from "./style"


export const Input = ({ name ,type ,children, placeholder, register ,disabled,value,readOnly}) => {
    return (
        <FielSet>
            <label htmlFor={name}>{children}</label>
            <input name={name} type={type} placeholder={placeholder} {...register} disabled={disabled} value={value} readOnly={readOnly}/>
        </FielSet>
    )
}