import styled from "styled-components";

export const DivHead = styled.div`
    width:100%;
    max-width:369px;
    overflow:hidden;

    display:flex;
    justify-content:space-between;
    align-items:center;

    position:fixed;
    z-index: 99;
    margin:0 auto;
    top: 3%;
    left: -50%;
    right: -50%;

    && a p {
        width: 67px;
        height: 48px;
        background-color:var(--color-grey-3);
        color:var(--color-grey-0);
        padding:16px;
        border-radius:4px;
    }

    @media(max-width:700px){
        && {
            width:90%;
            top:0;
        }
    }
    
`

export const FormStyled = styled.form`
    width:100%;
    max-width:369px;
    height:87%;
    overflow-y:auto;

    display:flex;
    flex-direction:column;
    gap:12px;

    position:absolute;
    z-index: 99;
    margin:0 auto;
    top: 10%;
    left: -50%;
    right: -50%;

    padding:24px;
    background-color:var(--color-grey-3);
    border-radius:4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    &&::-webkit-scrollbar{
        display:none;
    }

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

    && select{
        width:100%;
        padding: 13px;
        padding-left:16px;
        background-color:var(--color-grey-2);
        border-radius:4px;
        border:solid 1px var(--color-grey-0);
        color:var(--color-grey-0);
    }

    @media(max-width:700px){
        && {
            width:90%;
            top:8%;
        }
    }
`
export const SpanErro = styled.p`
    font-size:var(--font-size-2);
    color:var(--negative);
    font-weight:var(--font-weight-2);
`