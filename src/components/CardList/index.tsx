import React from 'react'
import * as S from './style'
import Router from 'next/router'
import { CardParamsProps, CardProps } from '@/@types'

const CardList = ({ card, searchValue }: CardParamsProps) => {
    const getCardId = (id: string) => {
        Router.push(`/card/${id}`)
    }

    const filteredCards = card.filter((card: CardProps) => {
        return card.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    
    return (
        <S.Container>
            <S.Nav>
                {filteredCards.length ? filteredCards.map((card: CardProps) => (
                    <S.ListContainer key={card.id}>
                        <S.List
                            key={card.id}
                            onClick={() => getCardId(card.id as unknown as string)}
                        >{card.name}</S.List>
                    </S.ListContainer>
                )) : <S.Text>Nenhum resultado encontrado</S.Text>}
            </S.Nav>
        </S.Container>
    )
}

export default CardList;