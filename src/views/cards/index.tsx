import React from 'react'
import * as S from './style'
import CardList from '@/components/CardList'
import Head from 'next/head'
import { CardParamsProps } from '@/@types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import thumb from '../../../public/thumb.jpg'

const Cards = ({ card }: CardParamsProps) => {
    return (
        <>
            <Head>
                <title>Yu-Gi-Oh | Lista de Cartas</title>
            </Head>
            <Header />
            <S.Container className='fade'>
                <S.ListContainer>
                    <CardList card={card} />
                </S.ListContainer>

                <S.ThumbContainer>
                    <Image
                        src={thumb}
                        alt='thumb_image'
                        width={2000}
                        height={2000}
                        priority
                    />
                </S.ThumbContainer>
            </S.Container>
            <Footer />
        </>
    )
}

export default Cards