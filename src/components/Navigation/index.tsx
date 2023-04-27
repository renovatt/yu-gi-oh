import React from 'react'
import * as S from './style'

const Navigation = () => {
    return (
        <S.Container>
            <S.NavLink href={'/'}>All Cards</S.NavLink>
            <S.NavLink href={'/'}>Divine Beats</S.NavLink>
            <S.NavLink href={'/'}>Search your card</S.NavLink>
        </S.Container>
    )
}

export default Navigation