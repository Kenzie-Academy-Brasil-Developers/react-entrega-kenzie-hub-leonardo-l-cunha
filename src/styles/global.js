import { createGlobalStyle } from "styled-components";

export const  GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Inter', sans-serif;
        overflow-Y: hidden;
    }

    button{
        cursor: pointer;
        background-color:transparent;
        border:none;
    }
    ul , ol,li{
        list-style:none;
    }
    a{
        text-decoration:none;
        
    }
    :root {
    --color-background: #FFFFFF;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3:#212529;
    --color-grey-4: #121214;
    --negative: #E83F5B;
    --sucess:##3FE864;
   
    --font-weight: 700;
    --font-weight-1: 600;
    --font-weight-3: 500;
    --font-weight-2: 400;

    --font-size:1rem;
    --font-size-1:0.85rem;
    --font-size-2:0.75rem;
    --font-size-3:1.125rem;

    }

`