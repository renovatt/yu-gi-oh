import React from 'react'
import { GetServerSideProps } from 'next';
import { CardListParamsProps, UrlProps } from '@/@types';
import { getGallery } from '@/services';
import Gallery from '@/views/gallery';

const GalleryCards = ({ cards, offset, meta }: CardListParamsProps & UrlProps) => {
    return <Gallery cards={cards} offset={offset} meta={meta} />;
}

export default GalleryCards;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const offset = query.page ? parseInt(query.page as string, 10) : 0;
    const { response } = await getGallery(offset);

    return {
        props: {
            offset,
            cards: response?.data,
            meta: response.meta
        }
    }
}