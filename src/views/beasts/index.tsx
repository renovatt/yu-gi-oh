import React from 'react'
import * as S from './style'
import { CardListParamsProps } from '@/@types'
import RespectiveCards from '@/components/RespectiveCards'

const Beasts = ({ cards }: CardListParamsProps) => {
  return (
    <S.Container>
      <RespectiveCards cards={cards} />
    </S.Container>
  )
}

export default Beasts