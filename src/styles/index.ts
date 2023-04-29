import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --max-width: 1100px;

    --main-background-color: #ffffff;
    --primary-background-color: #f50d60;
    --secondary-background-color: #dacc7d;
    --linear-background-color: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(43,4,98,1) 100%);
    
    --text-main-color: #ffffff;
    --text-primary-color: #f50d60;
    --text-secondary-color: #dacc7d;
    
    --border-main-color: #ffffff;
    --border-primary-color: #f50d60;
    --border-secondary-color: #dacc7d;
    --border-clean-color: #cccccc;

    --svg-main-color: #ffffff;
    --svg-primary-color: #f50d60;
    --svg-secondary-color: #dacc7d;
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
