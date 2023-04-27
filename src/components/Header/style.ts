import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    width: 100%;
    height: 5rem;
    background-color: var(--primary-background);
`

export const Content = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    background-color: var(--primary-background);
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
`

export const LogoContainer = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`