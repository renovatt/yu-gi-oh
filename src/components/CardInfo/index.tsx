import React from 'react'
import * as S from './style'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardParamsProps } from '@/@types'

const CardInfo = ({ card: [card] }: CardParamsProps) => {
    const router = useRouter()

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
                        <Image
                            src={`https://images.ygoprodeck.com/images/cards/${card.id}.jpg`}
                            alt='card'
                            width={500}
                            height={500}
                            priority />
                    </S.CardImageContent>
                    <S.BackButton onClick={() => router.back()}>Voltar</S.BackButton>
                </S.Content>
            </S.Container>
        </>
    )
}

export default CardInfo;