import Link from "next/link";
import styled, { CSSObject } from "styled-components";

type BannerProps = {
    banner?: CSSObject;
};

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
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
    overflow: hidden;
    cursor: pointer;

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
    }

    &:hover{
            img{
                transition: ease .3s;
                transform: scale(1.14);
                background-color: rgba(0, 0, 0, .8);
            }

            a{
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 2;
                width: 100%;
                height: 100px;
                transition: ease .3s;
                transform: initial;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0), black);
            }
        }
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    border-radius: .5rem;
    color: var(--text-main-color);
    transform: translateY(50px);
`