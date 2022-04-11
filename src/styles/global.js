import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(#f3f1f1 16.62%,#f1eae9 85.61%) ;
    }

    body, input, button {
        font: 16px Josefin Sans, sans-serif;  
    }

    #root {
        max-width: 900px;
        margin: 0 auto; 
        padding: 40px 20px; 
    }

    button {
        cursor: pointer;
        width: 10vw;
        justify-content: space-around;
        margin-top: 20px;
    }

    img {
        width: 200px;
        height: 250px;
        border-radius: 5%;
       }

    div {
        margin-top: 20px;
        margin-bottom: 20px;
    }

`;
