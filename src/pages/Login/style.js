import styled from "styled-components";

export const FormStyle = styled.form`
    width:100%;
    max-width:369px;

    display:flex;
    flex-direction:column;
    gap:12px;

    position:fixed;
    z-index: 99;
    margin:0 auto;
    top: 30%;
    left: -50%;
    right: -50%;

    padding:24px;
    background-color:var(--color-grey-3);
    border-radius:4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    && h1 {
        color:var(--color-grey-0);
        text-align:center;
        font-size:var(--font-size-3);
        font-weight:var(--font-weight);
    }

    && span{
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-1);
        color:var(--color-grey-1);
        text-align:center;
        margin:16px 0px 16px 0px;
    }
    
    @media(max-width:700px){
        && {
            width:90%;
            
        }
    }

`
export const ErroLogin = styled.p`
    font-size:var(--font-size-2);
    color:var(--negative);
    font-weight:var(--font-weight-2);
`