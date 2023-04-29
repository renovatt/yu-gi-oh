import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Content = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    border: 1px solid #000;
`

export const InfoContent = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    height: 80%;
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
    color: #000;
`

export const Span = styled.span`
    color: #555;
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
    color: #fff;
    padding: .5rem;
    outline: none;
    font-weight: bold;
    background-color: #000;
    border-radius: .5rem;
    border: 1px solid #000;

    &:hover{
        background-color: #fff;
        color: #000;
    }
`