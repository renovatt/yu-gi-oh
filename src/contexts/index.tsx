import React from 'react';
import { getAllCards } from '@/services';
import { CardListContextProviderProps, InitialValueProps } from '@/@types';

const initialValue: InitialValueProps = {
    error: false,
    loader: false,
    cards: [],
    clear: () => { },
    setCards: async () => { },
    loadCards: async () => { }
};

export const CardListContext = React.createContext({} as InitialValueProps);

export const CardListContextProvider = ({ children }: CardListContextProviderProps) => {
    const [error, setError] = React.useState(initialValue.error)
    const [loader, setLoader] = React.useState(initialValue.loader)
    const [cards, setCards] = React.useState(initialValue.cards);

    async function loadCards() {
        setLoader(true);
        try {
            const { response } = await getAllCards()
            setCards(response)
        } catch (error) {
            setError(true)
        } finally {
            setLoader(false);
        }
    }

    async function clear() {
        setCards(() => initialValue.cards)
    }

    const contextValue: InitialValueProps = {
        error,
        loader,
        cards,
        loadCards,
        setCards,
        clear,
    };

    return (
        <CardListContext.Provider value={contextValue}>
            {children}
        </CardListContext.Provider>
    );
};