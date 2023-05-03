import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--secondary-background-color);
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
    background: rgba(0, 0, 0, .8);
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
    }
`

export const Text = styled.h4`
    font-size: .8rem;
    color: var(--text-primary-color);
`

export const Span = styled.span`
    font-size: .7rem;
    text-align: justify;
    color: var(--text-clean-color);
`

export const BackButton = styled.button`
    position: absolute;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 2rem;
    width: 6rem;
    height: 2rem;
    color: var(--text-primary-color);
    padding: .5rem;
    outline: none;
    font-weight: bold;
    font-size: .8rem;
    border-radius: .5rem;
    background-color: var(--main-background-color);
    border: 1px solid var(--border-main-color);

    &:hover{
        transition: all .3s;
        opacity: .8;
    }
`