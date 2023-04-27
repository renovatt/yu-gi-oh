import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 50%;
    margin-left: 3rem;
    margin-top: -8rem;
`


export const Text = styled.h1`
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 1rem;
    color: var(--text-main-color);
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 2.5rem;
    position: absolute;
    color: var(--text-main-color);
`

export const Hexagon = styled.div`
    width: 100px;
    height: 55px;
    background-color: #f50d60;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
        opacity: .8;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
    }

    &::before {
        bottom: 100%;
        border-bottom: 27.5px solid #f50d60;
    }

    &::after {
        top: 100%;
        border-top: 27.5px solid #f50d60;
    }
    `;