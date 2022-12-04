import styled from "styled-components"

export const MainStyle = styled.main`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    padding:24px;

    display:flex;
    flex-direction:column;
    gap:23px;

    && h2{
        font-size:var(--font-size-3);
        font-weight:var(--font-weight);
        color:var(--color-grey-0);
        margin-top:37px;
    }

    && p {
        font-size:var(--font-size);
        font-weight:var(--font-weight-2);
        color:var(--color-background);
    }

`