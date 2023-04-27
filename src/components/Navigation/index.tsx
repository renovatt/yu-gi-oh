import React from 'react'
import * as S from './style'

const Navigation = () => {
    return (
        <S.Container>
            <S.NavLink href={'/'}>Todas as Cartas</S.NavLink>
            <S.NavLink href={'/'}>Bestas Divinas</S.NavLink>
            <S.NavLink href={'/'}>Procure sua carta</S.NavLink>
        </S.Container>
    )
}

export default Navigation