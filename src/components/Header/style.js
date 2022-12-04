import styled from "styled-components";

export const NavStyle = styled.header`
    border-bottom:solid 1px var(--color-grey-1);
`

export const ContainerStyle = styled.div`
    width:100%;
    max-width:1200px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:24px;

    && button{
        width:55px;
        height:32px;
        background-color:var(--color-grey-3);
        color:var(--color-grey-0);
        border-radius: 4px;
    }

    && h1 {
        font-size:var(--font-size-3);
        font-weight:var(--font-weight);
        color:var(--color-grey-0);
    }

    && span {
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-2);
        color:var(--color-grey-1);
    }
`
export const HeadStyle = styled.header`
    width:100%;
    height:108px;
    border-bottom:solid 1px var(--color-grey-1);
`