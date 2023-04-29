import React from 'react'
import * as S from './style'
import Router from 'next/router'
import { CardParamsProps, CardProps } from '@/@types'

const CardList = ({ card }: CardParamsProps) => {
    const getCardId = (id: string) => {
        Router.push(`/card/${id}`)
    }
    return (
        <S.Container>
            <S.Nav>
                {card.length ? card?.map((card: CardProps) => (
                    <S.ListContainer key={card.id}>
                        <S.List
                            key={card.id}
                            onClick={() => getCardId(card.id as unknown as string)}
                        >{card.name}</S.List>
                    </S.ListContainer>
                )) : <p>Buscando..</p>}
            </S.Nav>
        </S.Container>
    )
}

export default CardList;