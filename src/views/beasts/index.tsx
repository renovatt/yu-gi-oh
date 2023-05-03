import React from 'react'
import * as S from './style'
import { CardListParamsProps } from '@/@types'
import RespectiveCards from '@/components/RespectiveCards'
import Head from 'next/head'

const Beasts = ({ cards }: CardListParamsProps) => {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh | Bestas Divinas</title>
      </Head>
      <S.Container>
        <RespectiveCards cards={cards} />
      </S.Container>
    </>
  )
}

export default Beasts