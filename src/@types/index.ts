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
}

export type CardListParamsProps = {
    cards: CardProps[];
}

export type InitialValueProps = {
    error: boolean;
    loader: boolean;
    cards: ResponseCardProps;
    clear: () => void;
    loadCards: () => Promise<void>;
    setCards: React.Dispatch<React.SetStateAction<ResponseCardProps>>;
};