import { ButtonStyle } from "./style"

export const Button = ({ type, children, disabled}) => {
    return (
        <>
            <ButtonStyle type={type} disabled={disabled}>{children}</ButtonStyle>
        </>
    )
}
