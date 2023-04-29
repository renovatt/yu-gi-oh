import React from 'react'
import CardList from '@/components/CardList'
import Head from 'next/head'
import { CardParamsProps } from '@/@types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Cards = ({ card }: CardParamsProps) => {
    return (
        <>
            <Head>
                <title>Yu-Gi-Oh | Lista de Cartas</title>
            </Head>
            <div>
                <Header />
                <CardList card={card} />
                <Footer />
            </div>
        </>
    )
}

export default Cards