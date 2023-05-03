import React from 'react'
import * as S from './style'
import { CardListParamsProps, UrlProps } from '@/@types'
import RespectiveCards from '@/components/RespectiveCards'
import Pagination from '@/components/Pagination'
import Head from 'next/head'

const Gallery = ({ cards, offset, meta }: CardListParamsProps & UrlProps) => {
    return (
        <>
            <Head>
                <title>Yu-Gi-Oh | Galeria de Cartas</title>
            </Head>
            <S.Container>
                <RespectiveCards cards={cards} />
                <Pagination offset={offset} url='gallery-cards' meta={meta} />
            </S.Container>
        </>
    )
}

export default Gallery