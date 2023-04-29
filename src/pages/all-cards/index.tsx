import React from 'react'
import { GetServerSideProps } from 'next';
import { CardListParamsProps } from '@/@types';
import { getAllCards } from '@/services';
import Cards from '@/views/cards';

const AllCards = ({ cards }: CardListParamsProps) => {
    return <Cards card={cards} />;
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