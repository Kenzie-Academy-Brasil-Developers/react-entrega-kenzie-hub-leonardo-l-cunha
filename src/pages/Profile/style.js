import styled from "styled-components"

export const MainStyle = styled.main`
    width:100%;
    max-width:1200px;
    height:100vh;
    margin:0 auto;
    padding:24px;
    margin-bottom:100px;


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
export const SectionStyle = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    margin-bottom:200px;
    

    && div {
        display:flex;
        justify-content:space-between;
       
    }

    && div h1 {
        font-size:var(--font-size-3);
        font-weight:var(--font-weight-1);
        color:var(--color-grey-0);
    }

    && div:nth-child(1)  button {
        width:32.49px;
        height:32px;
        border-radius: 4px;
        background-color:var(--color-background-1);

        color:var(--color-background);
        font-size:28px;
    }
`
export const UlStyle = styled.ul`
    margin-top:28px;
    display:flex;
    flex-direction:column;

    background-color:var(--color-background-1);

    width:100%;
  
    

    padding:26px;
    border-radius: 4px;

    gap:16px;
`

export const LiStyle = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:49px;
    background-color:var(--color-grey-4);
    border-radius:4px;
    padding: 0px 22px;
    cursor: pointer;

    &&:hover{
        background-color:var(--color-grey-2);
    }

    && div{
        display:flex;
        align-items:center;
     
    }

    && h3 {
        font-size:var(--font-size-1);
        font-weight:var(--font-weight);
        color:var(--color-background);
    }

    && div span {
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-2);
        color:var(--color-grey-1);
    }
    
`