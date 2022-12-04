import styled from "styled-components";

export const FielSet = styled.fieldset`
    display:flex;
    flex-direction:column;
    gap:6px;
    border:none;

    && > label{
        font-size:var(--font-size-2);
        color:var(--color-grey-0);
        font-weight:var(--font-weight-2);
    }
    && > input {
        width:100%;
        height:40px;
        padding-left:16px;
        background-color:var(--color-grey-2);
        border-radius:4px;
        border:solid 1px var(--color-grey-0);
        color:var(--color-grey-0);
    }

    @media(max-width:700px) {

        && > input {
            height:30px;
        }
    }
`