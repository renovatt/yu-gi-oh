import styled from "styled-components";

export const Footer = styled.footer`
    /* position: fixed;
    bottom: 0;
    left: 0; */

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
    background: var(--linear-down-background-color);

    @media(max-width: 55.625rem) {
        flex-direction: column;
        height: auto;
    }
`

export const FooterDescription = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 55.625rem) {
        align-items: center;
        justify-content: center;
    }
`

export const FooterCopyright = styled.span`
    display: flex;
    margin: .2rem;
    font-size: .8rem;
    color: var(--text-main-color);
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media(max-width: 55.625rem) {
        margin-top: .5rem;
    }
`

export const FooterLink = styled.a`
    display: flex;
    color: var(--text-main-color);
    align-items: center;
    transition: .2s;
    padding-left: .2rem;

    svg{
        height: 25px;
        width: 25px;
        color: var(--svg-main-color);
        transition: .2s;

        &:hover{
            color: var(--svg-secondary-color);
            transform: scale(1.2);
        }
    }

    &:hover{
        color: var(--text-secondary-color);
    }
`