import React from 'react'
import CardList from '@/components/CardList'
import Head from 'next/head'

const Cards = () => {
    return (
        <>
            <Head>
                <title>Yu-Gi-Oh | Cartas</title>
            </Head>
            <div>
                <CardList />
            </div>
        </>
    )
}

export default Cards