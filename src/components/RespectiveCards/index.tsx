import React from 'react'
import * as S from './style'
import Router, { useRouter } from 'next/router'
import { CardListParamsProps, CardProps } from '@/@types'
import SkeletonImage from '../Skeleton'

const RespectiveCards = ({ cards }: CardListParamsProps) => {
    const router = useRouter()

    const getCardId = (id: string) => {
        Router.push(`/card/${id}`)
    }

    return (
        <S.Container className='fade'>
            <S.Content>
                {cards.length ? cards.map((card: CardProps) => (
                    <S.CardImageContent key={card.id}>
                        <SkeletonImage
                            cardId={card.id as unknown as string}
                            getCardId={getCardId}
                            src={`https://images.ygoprodeck.com/images/cards/${card.id}.jpg`}
                            alt='card-image' />
                    </S.CardImageContent>
                )) : <S.Text>Nenhum resultado encontrado</S.Text>}
                <S.BackButton onClick={() => router.push('/all-cards')}>Voltar</S.BackButton>
            </S.Content>
        </S.Container>
    )
}

export default RespectiveCards;