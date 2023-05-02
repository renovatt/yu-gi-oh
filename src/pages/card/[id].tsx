import React from 'react'
import CardInfo from '@/components/CardInfo'
import { GetServerSideProps } from 'next';
import { getCardById } from '@/services';
import { CardParamsProps } from '@/@types';

const Card = ({ card }: CardParamsProps) => {
    return <CardInfo card={card} searchValue='' />
}

export default Card;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { response } = await getCardById(params?.id as string);

    return {
        props: {
            card: response,
        },
    };
};