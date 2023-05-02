import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 100vh;
    background-color: var(--secondary-background-color);

    /* background: url('/load-2.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: cover; */

`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: transparent;
    overflow-y: scroll;
    /* backdrop-filter: blur(3px); */
    /* background: rgba(0, 0, 0, .8); */

    ::-webkit-scrollbar-track{
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--primary-background-color);
    }
`

export const ListContainer = styled.ul`
    width: 100%;
    height: 100%;
`

export const List = styled.li`
    width: 100%;
    font-size: .7rem;
    padding: .4rem;
    color: var(--text-clean-color);
    
    &:hover{
        cursor: pointer;
        transition: all .2s;
        color: var(--text-main-color);
        background-color: var(--primary-background-color);
    }
`