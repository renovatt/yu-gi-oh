import { StaticImageData } from "next/image";

export type ResponseCardProps = CardProps[]

export type CardProps = {
    id: number;
    name: string;
    desc: string;
    race: string;
    type: string;
    attribute: string;
    frameType: string;
    level: number;
    def: number;
    atk: number;
    card_image: CardImageProps;
}

export type CardImageProps = {
    card_images: {
        id: number;
        image_url: string;
        image_url_small: string;
    }
}

export type CardListContextProviderProps = {
    children: React.ReactNode
}

export type CardParamsProps = {
    card: CardProps[];
    searchValue: string;
}

export type CardListParamsProps = {
    cards: CardProps[];
}

export type UrlProps = {
    offset: number;
    meta: {
        total_pages: number;
        total_rows: number;
        current_rows: number;
    }
}

export type InitialValueProps = {
    error: boolean;
    loader: boolean;
    cards: ResponseCardProps;
    clear: () => void;
    loadCards: () => Promise<void>;
    setCards: React.Dispatch<React.SetStateAction<ResponseCardProps>>;
};

export type CardLinkProos = {
    thumb: StaticImageData;
    alt: string;
    text: string;
    route: string;
}