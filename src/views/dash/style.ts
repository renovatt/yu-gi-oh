import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('../../../public/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Text = styled.h1`
    font-weight: bold;
    font-size: 4rem;
`

export const Button = styled.button`
    text-align: center;
    outline: none;
    width: 15rem;
    height: 2.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: .5rem;
`