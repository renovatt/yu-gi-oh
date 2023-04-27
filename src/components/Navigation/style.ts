import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2rem;

`
export const NavLink = styled(Link)`
    margin: .5rem;
    font-weight: bold;
    color: var(--text-main-color);
`