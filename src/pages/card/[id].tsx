import React from 'react'
import CardInfo from '@/components/CardInfo'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getAllCards, getCardById } from '@/services';
import { CardParamsProsps, CardProps, ResponseCardProps } from '@/@types';

const Card = ({ card }: CardParamsProsps) => {
    return <CardInfo card={card} />
}

export default Card;

export const getStaticPaths: GetStaticPaths = async () => {
    const { response } = await getAllCards();
    const paths = response.map((card: CardProps) => ({
        params: { id: card.id.toString() }
    }))

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    const { response } = await getCardById(params?.id as string);

    return {
        props: {
            card: response
        }
    };
}
