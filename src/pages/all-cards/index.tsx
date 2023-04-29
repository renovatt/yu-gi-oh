import React from 'react'
import CardList from '@/components/CardList';
import { GetServerSideProps } from 'next';
import { CardListParamsProps } from '@/@types';
import { getAllCards } from '@/services';

const AllCards = ({ cards }: CardListParamsProps) => {
    return <CardList card={cards} />
}

export default AllCards;

export const getServerSideProps: GetServerSideProps = async () => {
    const { response } = await getAllCards();

    return {
        props: {
            cards: response
        }
    }
}