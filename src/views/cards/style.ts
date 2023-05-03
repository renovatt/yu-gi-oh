import styled from "styled-components";

export const HeaderContainer = styled.section`
     display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 2.5rem;
    position: absolute;
    top: 1.2rem;
    right: 2rem;

    @media (max-width: 29rem) {
        width: 8rem;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: .5rem;
    border-radius: .5rem;
    color: var(--text-primary-color);
    padding: 8px 28px 8px 8px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>');
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 15px 15px;

    &::placeholder{
        font-size: .6rem;
    }
`

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

export const Span = styled.span<{open: boolean}>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 1rem;
    left: ${(props) => props.open ? '14rem' : '0'};
    width: ${(props) => props.open ? 'auto' : '100%'};
    height: ${(props) => props.open ? 'auto' : '100%'};
    background-color: ${(props) => props.open ? 'none' : 'var(--secondary-background-color)'};
    transition: ease .3s;
    z-index: 9;

    svg{
        color: #fff;
        width: 1.75rem;
        height: 1.75rem;
        margin-top: .5rem;
}
`

export const ListContainer = styled.section<{open: boolean}>`
    z-index: 1;
    position: absolute;
    transition: ease .3s;
    width: ${(props) => props.open ? '17rem' : '3rem'};
    overflow: ${(props) => props.open ? 'initial' : 'hidden'};
`

export const CardLinksContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, .7);
    
    @media (max-width: 86.813rem){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        overflow-y: scroll;
        align-items: flex-start;
        justify-content: flex-start;
    }

    @media (max-width: 66.813rem) {
        grid-template-columns: repeat(2, 1fr);
        margin-left: 3rem;
    }

    @media (max-width: 45.563rem) {
        grid-template-columns: repeat(1, 1fr);
    }
`