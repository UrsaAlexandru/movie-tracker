import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #E98074;
        --secondary-color: #8e8d8a;
        --title-color: #E85A4F;
        --background-color: #EAE7DC;
        --font-color: black;
        --navbar-color: #D8C3A5;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-color);
    }
    
    a{
        font-family: inherit;
        font-size: inherit;
        font-size: 1rem;
    }

    h1{
        font-size: 4rem;
        span{
            font-size: 4rem;
        }
    }

    span{
        color: var(--primary-color);
    }

`;

export default GlobalStyle;
