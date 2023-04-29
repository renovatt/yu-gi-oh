import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    background-image: url('/card-background.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

export const Content = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, .7);
`

export const InfoContent = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    height: 60%;
`

export const CardImageContent = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: auto;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1px solid #000;
    }
`

export const Text = styled.h4`
    color: var(--text-primary-color);
`

export const Span = styled.span`
    color: var(--text-main-color);
    text-align: justify;
`

export const BackButton = styled.button`
    position: absolute;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 2rem;
    width: 8rem;
    height: 2rem;
    color: var(--text-primary-color);
    padding: .5rem;
    outline: none;
    font-weight: bold;
    font-size: 1.1rem;
    background-color: var(--main-background-color);
    border-radius: .5rem;
    border: 1px solid var(--border-main-color);

    &:hover{
        transition: all .3s;
        background-color: var(--primary-background-color);
        border-color: var(--border-main-color);
        color: var(--text-main-color);
    }
`