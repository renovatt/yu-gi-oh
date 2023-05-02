import styled from "styled-components";

export const ButtonContent = styled.section`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-background-color);
`

export const Button = styled.button`
    padding: .5rem;
    margin: .5rem;
    border-radius: .5rem;
    width: 10rem;
    text-align: center;
    font-weight: bold;
    color: var(--text-primary-color);

    &:hover{
        opacity: .8;
    }
`

export const Span = styled.span`
    color: var(--text-main-color);
    padding: .5rem;
`