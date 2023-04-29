import React from 'react'
import * as S from './style'
import Image from 'next/image'
import { CardParamsProsps as CardParamsProps } from '@/@types'

const CardInfo = ({ card: [card] }: CardParamsProps) => {

    const cardImage2 = `https://images.ygoprodeck.com/images/cards/58604027.jpg`
    const cardImage = `https://images.ygoprodeck.com/images/cards/${card.id}.jpg`
    return (
        <S.Container>
            <S.Content>
                <S.Text>ID: <S.Span>{card.id}</S.Span></S.Text>
                <S.Text>Nome: <S.Span>{card.name}</S.Span></S.Text>
                <S.Text>Nível: <S.Span>{card.level}</S.Span></S.Text>
                <S.Text>Raça: <S.Span>{card.race}</S.Span></S.Text>
                <S.Text>Tipo: <S.Span>{card.type}</S.Span></S.Text>
                <S.Text>FrameType: <S.Span>{card.frameType}</S.Span></S.Text>
                <S.Text>Atributo: <S.Span>{card.attribute}</S.Span></S.Text>
                <S.Text>ATQ: <S.Span>{card.atk}</S.Span></S.Text>
                <S.Text>DEF: <S.Span>{card.def}</S.Span></S.Text>
                <S.Text>Descrição: <S.Span>{card.desc}</S.Span></S.Text>
            </S.Content>

            <S.CardImageContent>
                <Image
                    src={cardImage ? cardImage : cardImage2}
                    alt='card'
                    width={500}
                    height={500}
                    priority />
            </S.CardImageContent>
        </S.Container>
    )
}

export default CardInfo;