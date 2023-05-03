import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    
    background-color: var(--secondary-background-color);
    background-image: url('/bg.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    @media (max-width: 50rem) {
        align-items: center;
    }
`

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 50%;
    margin-left: 3rem;
    margin-top: -4rem;

    @media (max-width: 50rem) {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(3px);
        background: rgba(0, 0, 0, .6);
        margin: 0;
    }
`

export const IconContent = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg{
        cursor: pointer;
        width: 10rem;
        height: 10rem;
        color: #f50d60;
    }
`

export const Text = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2rem;
    font-family: 'Bruno Ace', cursive;
    color: var(--text-main-color);

    @media (max-width: 50rem){
        font-size: 2rem;
    }
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 2.5rem;
    position: fixed;
    cursor: pointer;
    font-family: 'Bruno Ace', cursive;
    color: var(--text-main-color);
`