import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 2.5rem;
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