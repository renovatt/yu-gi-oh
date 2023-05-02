import React from 'react'
import * as S from './style'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { CardListParamsProps, CardProps } from '@/@types'

const RespectiveCards = ({ cards }: CardListParamsProps) => {
    const router = useRouter()

    const getCardId = (id: string) => {
        Router.push(`/card/${id}`)
    }

    return (
        <S.Container>
            <S.Content>
                {cards.length ? cards.map((card: CardProps) => (
                    <S.CardImageContent key={card.id}>
                        <Image
                            key={card.id}
                            onClick={() => getCardId(card.id as unknown as string)}
                            src={`https://images.ygoprodeck.com/images/cards/${card.id}.jpg`}
                            alt='card'
                            width={500}
                            height={500}
                            priority />
                    </S.CardImageContent>
                )) : <S.Text>Nenhum resultado encontrado</S.Text>}
                <S.BackButton onClick={() => router.push('/all-cards')}>Voltar</S.BackButton>
            </S.Content>
        </S.Container>
    )
}

export default RespectiveCards;