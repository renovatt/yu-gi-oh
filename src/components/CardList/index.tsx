import React from 'react'
import * as S from './style'
import Router from 'next/router'
import { CardParamsProps, CardProps, UrlProps } from '@/@types'
import { CardListContext } from '@/contexts'

const CardList = ({ searchValue, offset, meta }: UrlProps & { searchValue: string }) => {
    const getCardId = (id: string) => {
        Router.push(`/card/${id}`)
    }

    const scrollRef = React.useRef<HTMLDivElement>(null)
    const [prevSize, setPrevSize] = React.useState(0)
    const { cards, loader, loadCards, loadMoreCards, quantity } = React.useContext(CardListContext)

    const filteredCards = cards.filter((card: CardProps) => {
        return card.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    const handleNextPage = () => {
        loadMoreCards()
    };

    React.useEffect(() => {
        loadCards()
    }, [quantity])

    React.useEffect(() => {
        if (cards && cards?.length) {
            const newSize = cards?.length
            if (newSize > prevSize) {
                scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
            }
            setPrevSize(newSize)
        }
    }, [cards])

    return (
        <S.Container>
            <S.Nav ref={scrollRef}>
                {loader ? <S.Text>Buscando lista..</S.Text> :
                    filteredCards.length ? filteredCards.map((card: CardProps) => (
                        <S.ListContainer key={card.id}>
                            <S.List
                                key={card.id}
                                onClick={() => getCardId(card.id as unknown as string)}>
                                {card.name}
                            </S.List>
                        </S.ListContainer>
                    )) : <S.Text>Nenhum resultado encontrado</S.Text>
                }

                {/* {filteredCards.length ? filteredCards.map((card: CardProps) => (
                    <S.ListContainer key={card.id}>
                        <S.List
                            key={card.id}
                            onClick={() => getCardId(card.id as unknown as string)}
                        >{card.name}</S.List>
                    </S.ListContainer>
                )) : <S.Text>Nenhum resultado encontrado</S.Text>} */}
                <button onClick={handleNextPage}>Mais</button>
            </S.Nav>
        </S.Container>
    )
}

export default CardList;