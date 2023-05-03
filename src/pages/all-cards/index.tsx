import React from 'react'
import { GetServerSideProps } from 'next';
import { CardListParamsProps, UrlProps } from '@/@types';
import { getAllCards } from '@/services';
import Cards from '@/views/cards';

const AllCards = ({  offset, meta }: UrlProps) => {
    return <Cards  offset={offset} meta={meta} />;
}

export default AllCards;

// export const getServerSideProps: GetServerSideProps = async () => {
//     const { response } = await getAllCards();

//     return {
//         props: {
//             cards: response
//         }
//     }
// }

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//     const offset = query.page ? parseInt(query.page as string, 10) : 0;
//     const { response } = await getAllCards(offset);

//     return {
//         props: {
//             offset,
//             cards: response?.data,
//             meta: response.meta
//         }
//     }
// }