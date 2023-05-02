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
    const [searchValue, setSearchValue] = React.useState("");
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <Head>
                <title>Yu-Gi-Oh | Lista de Cartas</title>
            </Head>
            <S.HeaderContainer>
                <Header />
                <S.Form>
                    <S.Input
                        type='search'
                        value={searchValue}
                        placeholder='O Lendário Exodia Encarnado'
                        onChange={handleSearchInputChange} />
                </S.Form>
            </S.HeaderContainer>

            <S.Container className='fade'>
                <S.ListContainer>
                    <CardList card={card} searchValue={searchValue} />
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
                        text='Galeria de Magos'
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