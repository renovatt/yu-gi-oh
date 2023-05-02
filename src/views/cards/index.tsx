import React from 'react'
import * as S from './style'
import CardList from '@/components/CardList'
import Head from 'next/head'
import { CardParamsProps } from '@/@types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import slifer from '../../../public/slifer.jpg'
import gallery from '../../../public/gallery.jpg'
import magician from '../../../public/magician.jpg'
import CardLink from '@/components/CardLink'

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

                <S.CardLinksContainer>
                    <CardLink
                        thumb={slifer}
                        alt='slifer-image'
                        text='Bestas Divinas'
                        route='/' />

                    <CardLink
                        thumb={magician}
                        alt='magician-image'
                        text='Galeria Magos'
                        route='/' />

                    <CardLink
                        thumb={gallery}
                        alt='gallery-image'
                        text='Galeria de Cartas'
                        route='/' />
                </S.CardLinksContainer>
            </S.Container>
            <Footer />
        </>
    )
}

export default Cards