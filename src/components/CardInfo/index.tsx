import React from 'react'
import * as S from './style'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CardListParamsProps } from '@/@types'
import SkeletonImage from '../Skeleton'

const CardInfo = ({ cards: [card] }: CardListParamsProps) => {
    const router = useRouter()

    const getCardId = (id: string) => {
        router.push(`/card/${id}`)
    }

    return (
        <>
            <Head>
                <title>Yu-Gi-Oh | {card.name}</title>
            </Head>
            <S.Container className='fade'>
                <S.Content>
                    <S.InfoContent>
                        <S.Text>ID: <S.Span>{card.id}</S.Span></S.Text>
                        <S.Text>Nome: <S.Span>{card.name}</S.Span></S.Text>
                        {card.level && <S.Text>Nível: <S.Span>{card.level}</S.Span></S.Text>}
                        <S.Text>Raça: <S.Span>{card.race}</S.Span></S.Text>
                        <S.Text>Tipo: <S.Span>{card.type}</S.Span></S.Text>
                        <S.Text>FrameType: <S.Span>{card.frameType}</S.Span></S.Text>
                        {card.attribute && <S.Text>Atributo: <S.Span>{card.attribute}</S.Span></S.Text>}
                        {card.atk && <S.Text>ATQ: <S.Span>{card.atk}</S.Span></S.Text>}
                        {card.def && <S.Text>DEF: <S.Span>{card.def}</S.Span></S.Text>}
                        <S.Text>Descrição: <S.Span>{card.desc}</S.Span></S.Text>
                    </S.InfoContent>

                    <S.CardImageContent>
                        <SkeletonImage
                            cardId={card.id as unknown as string}
                            getCardId={getCardId}
                            src={`https://images.ygoprodeck.com/images/cards/${card.id}.jpg`}
                            alt='card-image' />
                    </S.CardImageContent>
                    <S.BackButton onClick={() => router.back()}>Voltar</S.BackButton>
                </S.Content>
            </S.Container>
        </>
    )
}

export default CardInfo;