import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--secondary-background-color);

    @media (max-width: 78.438rem) {
        width: 100%;
        height: 100%;
    }
`