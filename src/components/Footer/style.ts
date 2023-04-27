import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    background: var(--third-background-color);
    border-top: 1px solid var(--border-primary-color);
    backdrop-filter: blur(3px);
    background-color: transparent;
    background: rgba(6, 11, 40, 0.149);
    padding: 2rem calc(4rem + 15px) 2rem 4rem;

    @media(max-width: 55.625rem) {
        flex-direction: column;
        height: auto;
    }
`

export const FooterDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-main-color);
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
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

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
        color: var(--svg-secondary-color);
        transition: .2s;

        &:hover{
        color: var(--svg-primary-color);
        transform: scale(1.2);
        }
    }

    &:hover{
        color: var(--text-primary-color);
    }
`