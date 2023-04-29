import React from 'react'
import * as S from './style'
import { CardListContext } from '@/contexts'

const CardList = () => {
    const { loader, cards, loadCards } = React.useContext(CardListContext)

    React.useEffect(() => {
        loadCards()
    }, [])

    return (
        <S.Container>
            <S.Nav>
                {loader && <p>Buscando..</p>}
                {cards?.map(card => (
                    <S.ListContainer>
                        <S.List key={card.id}>{card.name}</S.List>
                    </S.ListContainer>
                ))}
            </S.Nav>
        </S.Container>
    )
}

export default CardList;