import Link from "next/link";
import styled, { CSSObject } from "styled-components";

type BannerProps = {
    banner?: CSSObject;
};

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`

export const Card = styled.section<BannerProps>`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    width: 17rem;
    height: 25rem;
    border-radius: .5rem;
    margin: 2rem;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, .8);

    /* background-color: var(--main-background-color); */
    /* background: ${(props) => props.banner?.backgroundImage}; */
    /* background-repeat: no-repeat; */
    /* background-position: center center; */
    /* object-fit: cover; */

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .5rem;
        z-index: -1;
    }
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    width: 10rem;
    height: 2.5rem;
    font-size: .8rem;
    font-weight: bold;
    border-radius: .5rem;
    padding: .5rem;
    color: var(--text-primary-color);
    background-color: var(--main-background-color);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .8);

    &:hover{
        transition: all .3s;
        opacity: .8;
    }
`