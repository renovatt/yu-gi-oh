import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;

    background-color: var(--secondary-background-color);
    
    background: url('/thumb.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: cover;
`
export const ListContainer = styled.section`
    background-color: transparent;
`

export const ThumbContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, .6);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .5rem;
    }
`