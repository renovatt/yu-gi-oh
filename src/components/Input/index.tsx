import React from 'react'
import * as S from './style'
import { InputProps } from './type'

const Input = ({ ...props }: InputProps) => {
    return (
        <S.Form>
            <S.Input type={props.type} placeholder={props.placeholder} />
        </S.Form>
    )
}

export default Input