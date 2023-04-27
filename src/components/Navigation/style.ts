import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;

`
export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    font-weight: bold;
    font-size: 1rem;
    color: var(--text-primary-color);

    background-color: var(--main-background-color);
    border-radius: .5rem;
    padding: .5rem;
    width: 10rem;

    &:hover{
        transition: all .3s;
        color: var(--text-main-color);
        background-color: var(--primary-background-color);
    }
`