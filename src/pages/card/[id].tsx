import React from 'react'
import CardInfo from '@/components/CardInfo'
import { GetServerSideProps } from 'next';
import { getCardById } from '@/services';
import { CardListParamsProps } from '@/@types';

const Card = ({ cards }: CardListParamsProps) => {
    return <CardInfo cards={cards} />
}

export default Card;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { response } = await getCardById(params?.id as string);

    return {
        props: {
            cards: response,
        },
    };
};