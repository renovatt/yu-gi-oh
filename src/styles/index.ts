import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --max-width: 1100px;

    --main-background-color: #ffffff;
    --primary-background-color: #f50d60;
    --secondary-background-color: #f35b04;
    
    --primary-background-color: #9d04f3;
    --secondary-background-color: #10002b;

    --linear-up-background-color: linear-gradient(180deg, rgba(53,12,54,1) 0%, rgba(157,4,243,1) 100%);
    --linear-down-background-color: linear-gradient(0deg, rgba(53,12,54,1) 0%, rgba(157,4,243,1) 100%);
    
    --text-main-color: #ffffff;
    --text-primary-color: #9d04f3;
    --text-secondary-color: #10002b;
    
    --border-main-color: #ffffff;
    --border-primary-color: #9d04f3;
    --border-secondary-color: #10002b;
    --border-clean-color: #cccccc;

    --svg-main-color: #ffffff;
    --svg-primary-color: #9d04f3;
    --svg-secondary-color: #10002b;
}

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Saira Condensed', sans-serif;
}

body {
    min-width: 100vw;
    min-height: 100vh;
    background: var(--main-background-color);
}

main{
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: var(--max-width); */
}

::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color: var(--main-background-color);
}
::-webkit-scrollbar-thumb{
    background-color: var(--primary-background-color);
}

html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}


*, input, button{
    border:0;
    outline:0;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

h1, h2, h3, h4, h5, h6{
  padding: 0;
  margin: 0;
}

button{
    cursor: pointer;
}

.fade{
    opacity: 0;
    transform: translateX(-20px);
    animation: fade .3s forwards;

    @keyframes fade{
        to{
        opacity: 1;
        transform: initial;
        }
    }
}`
