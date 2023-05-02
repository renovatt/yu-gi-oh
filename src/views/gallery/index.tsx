import React from 'react'
import * as S from './style'
import { CardListParamsProps, UrlProps } from '@/@types'
import RespectiveCards from '@/components/RespectiveCards'
import Pagination from '@/components/Pagination'

const Gallery = ({ cards, offset, meta }: CardListParamsProps & UrlProps) => {
    return (
        <S.Container>
            <RespectiveCards cards={cards} />
            <Pagination offset={offset} url='gallery-cards' meta={meta} />
        </S.Container>
    )
}

export default Gallery