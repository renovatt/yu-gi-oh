import styled from "styled-components";

export const ButtonContent = styled.section`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-background-color);

    @media (max-width: 78.438rem) {
        margin-top: 5rem;
        width: 100%;
    }
`

export const Button = styled.button`
    margin: .5rem;
    border-radius: .5rem;
    width: 2rem;
    text-align: center;
    font-weight: bold;
    color: var(--text-primary-color);

    svg{
        width: 1.75rem;
        height: 1.75rem;
    }

    &:hover{
        opacity: .8;
    }

    /* @media (max-width: 78.438rem) {
        font-size: .6rem;
        width: 6rem;
    } */
`

export const Span = styled.span`
    color: var(--text-main-color);
    padding: .5rem;
    text-align: center;

    @media (max-width: 78.438rem) {
        font-size: .6rem;
    }
`