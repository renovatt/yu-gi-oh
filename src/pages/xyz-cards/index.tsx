import React from 'react'
import { GetServerSideProps } from 'next';
import { CardListParamsProps, UrlProps } from '@/@types';
import { getXYZCards } from '@/services';
import AllXYZCards from '@/views/xyz';

const XYZCards = ({ cards, offset, meta }: CardListParamsProps & UrlProps) => {
    return <AllXYZCards cards={cards} offset={offset} meta={meta}/>;
}

export default XYZCards;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const offset = query.page ? parseInt(query.page as string, 10) : 0;
    const { response } = await getXYZCards(offset);

    return {
        props: {
            offset,
            cards: response.data,
            meta: response.meta
        }
    }
}