import styled from "styled-components";

export const Modal = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    inset: 0;
    z-index:99;

    background-color:var(--color-background-2);
`
export const ModalBox = styled.div`
    background-color:var(--color-background-1);
    width:90%;
    max-width:400px;

    && > div {
        width:100%;
        height:50px;

        display:flex;
        justify-content:space-between;
        align-items:center;

        padding:20px;
       

        background-color:var(--color-grey-2);
    }

    && div h3 {
        font-size:var(--font-size-2);
        font-weight:var(--font-weight);
        color:var(--color-grey-0);
    }

    && div button{
        font-size:var(--font-size);
        font-weight:var(--font-weight-1);
        color:var(--color-grey-1);
    }
`
export const ModalForm = styled.form`
    display:flex;
    flex-direction:column;
    gap:20px;

    padding:20px;

    && label {
        font-size:var(--font-size-2);
        color:var(--color-grey-0);
        font-weight:var(--font-weight-2);
    }
    && select {
        width:100%;
        padding: 13px;
        padding-left:16px;
        background-color:var(--color-grey-2);
        border-radius:4px;
        border:solid 1px var(--color-grey-0);
        color:var(--color-grey-0);
    }
    && div {
        display:flex;
        gap:22px;
        justify-content:space-between;
    }
    && div button:nth-child(1) {
        width:60%;
        padding:13px;

        background-color:var(--color-primary);
        border:1px solid var(--color-primary);
        color:var(--color-background);
        border-radius: 4px;
    }
    && div button:nth-child(2) {
        width:40%;
        padding:13px;

        background-color:var(--color-grey-1);
        border:1px solid var(--color-grey-1);
        color:var(--color-background);
        border-radius: 4px;
    }
`
export const ModalEdit = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    inset: 0;
    z-index:99;

    background-color:var(--color-background-2);
`