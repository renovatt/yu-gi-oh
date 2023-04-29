import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    width: 100%;
    height: 5rem;
    background: var(--linear-up-background-color);
    /* border-bottom: 1px solid var(--border-primary-color); */

`

export const Content = styled.nav`
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
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