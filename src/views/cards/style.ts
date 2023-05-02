import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* background-color: var(--secondary-background-color);
    background: url('/thumb.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: cover; */

    background-color: #fff;
`
export const ListContainer = styled.section`
    background-color: transparent;
`

export const CardLinksContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    /* background: rgba(0, 0, 0, .8); */
`