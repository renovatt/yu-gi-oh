import React from 'react'
import * as S from './style'
import Input from '../Input'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import Navigation from '../Navigation'

const Header = () => {
    return (
        <S.Container>
            <S.NavLink href={'/'}>
                <S.LogoContainer>
                    <Image src={logo} alt='logo' priority />
                </S.LogoContainer>
            </S.NavLink>

            <S.Content>
                <Navigation />
                <Input type='text' placeholder='O Lendário Exodia Encarnado' />
            </S.Content>
        </S.Container>
    )
}

export default Header