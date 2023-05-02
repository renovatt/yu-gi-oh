import React from 'react'
import { GetServerSideProps } from 'next';
import { CardListParamsProps } from '@/@types';
import { gellDivineBeast } from '@/services';
import Beasts from '@/views/beasts';

const DivineBeasts = ({ cards }: CardListParamsProps) => {
    return <Beasts cards={cards} />;
}

export default DivineBeasts;

export const getServerSideProps: GetServerSideProps = async () => {
    const { response } = await gellDivineBeast();

    return {
        props: {
            cards: response
        }
    }
}