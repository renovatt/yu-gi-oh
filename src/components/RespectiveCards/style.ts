import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* background-color: var(--secondary-background-color); */

    @media (max-width: 78.438rem) {
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;

    @media (max-width: 78.438rem) {
        flex-wrap: wrap;
        margin-top: 8rem;
    }
`

export const Text = styled.p`
    width: 100%;
    font-size: .7rem;
    padding: .4rem;
    color: var(--text-clean-color);
`

export const CardImageContent = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: auto;
    padding: .5rem;

    img{
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
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