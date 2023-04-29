import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20%;
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

export const Text = styled.p`
    display: flex;
    color: #000;
`

export const Span = styled.span`
    display: flex;
    color: #555;
`