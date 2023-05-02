import React from 'react'
import * as S from './style'
import Image from 'next/image'
import { CardLinkProos } from '@/@types'

const CardLink = ({ thumb, alt, text, route }: CardLinkProos) => {
    return (
        <S.Container>
            <S.Card>
                <Image src={thumb} alt={alt} width={500} height={500} />
                <S.NavLink href={route}>{text}</S.NavLink>
            </S.Card>

            {/* <S.Card banner={{ backgroundImage: `url(${gallery.src})` }}>
                <Image src={thumb} alt={alt} width={500} height={500} />
                <S.NavLink href={route}>{text}</S.NavLink>
            </S.Card> */}
        </S.Container>
    )
}

export default CardLink