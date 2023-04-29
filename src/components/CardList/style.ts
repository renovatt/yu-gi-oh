import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--main-background-color);
`

export const Nav = styled.nav`
    /* position: absolute;
    top: 0;
    left: 0; */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 20rem;
    height: 100vh;
    background-color: var(--secondary-background-color);
    overflow-y: scroll;
`

export const ListContainer = styled.ul`
    width: 100%;
    height: 100%;
`

export const List = styled.li`
    width: 100%;
    padding: 0 .5rem;
    
    &:hover{
        cursor: pointer;
        color: var(--text-main-color);
        background-color: var(--primary-background-color);
    }
`