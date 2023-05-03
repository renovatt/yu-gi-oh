import React from 'react'
import * as S from './style'
import { CardListParamsProps, UrlProps } from '@/@types'
import RespectiveCards from '@/components/RespectiveCards'
import Pagination from '@/components/Pagination'
import Head from 'next/head'

const AllXYZCards = ({ cards, offset, meta }: CardListParamsProps & UrlProps) => {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh | Monstros XYZ</title>
      </Head>
      <S.Container>
        <RespectiveCards cards={cards} />
        <Pagination offset={offset} url='xyz-cards' meta={meta} />
      </S.Container>
    </>
  )
}

export default AllXYZCards