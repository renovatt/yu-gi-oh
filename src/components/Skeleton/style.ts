import styled from "styled-components";

export const ImageContainer = styled.div`
    display: grid;
`

export const Image = styled.img`
    grid-area: 1/1;
    opacity: 0;
    transition: .2s;

    &:hover{
        transform: scale(1.05);
    }
`

export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
`