import React from 'react'
import * as S from './style'

const Dashboard = () => {
    return (
        <S.Container className='fade'>
            <S.Content>
                <S.Text>É HORA DO DUELO!</S.Text>
                <S.Hexagon href={'/all-cards'}>
                    <S.Span>GO</S.Span>
                </S.Hexagon>
            </S.Content>
        </S.Container>
    )
}

export default Dashboard