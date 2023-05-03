import React from 'react'
import * as S from './style'
import { MdHexagon } from 'react-icons/md'
import { useRouter } from 'next/router'

const Dashboard = () => {
    const router = useRouter()
    return (
        <S.Container className='fade'>
            <S.Content>
                <S.Text>É HORA DO DUELO!</S.Text>
                <S.IconContent onClick={() => router.push('all-cards')}>
                    <MdHexagon />
                    <S.Span>GO</S.Span>
                </S.IconContent>
            </S.Content>
        </S.Container >
    )
}

export default Dashboard