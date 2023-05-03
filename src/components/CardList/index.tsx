import React from 'react'
import * as S from './style'
import Router from 'next/router'
import { CardProps, CardSearchProps } from '@/@types'
import { CardListContext } from '@/contexts'

const CardList = ({ searchValue }: CardSearchProps) => {
    const { cards, loader, loadCards, loadMoreCards, quantity } = React.useContext(CardListContext)
    const filteredCards = cards.filter((card: CardProps) => {
        return card.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    const getCardId = (id: string) => {
        Router.push(`/card/${id}`)
    }

    const handleNextPage = () => {
        loadMoreCards()
    };

    React.useEffect(() => {
        loadCards()
    }, [quantity])

    return (
        <S.Container>
            <S.Nav>
                {filteredCards.length ? filteredCards.map((card: CardProps) => (
                    <S.ListContainer key={card.id}>
                        <S.List
                            key={card.id}
                            onClick={() => getCardId(card.id as unknown as string)}>
                            {card.name}
                        </S.List>
                    </S.ListContainer>)) :
                    <S.Text>Nenhum resultado encontrado, carregue mais nomes da lista.</S.Text>
                }
                <S.Button onClick={handleNextPage}>Carregar Lista</S.Button>
            </S.Nav>
        </S.Container>
    )
}

export default CardList;