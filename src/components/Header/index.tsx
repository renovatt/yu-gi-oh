import React from 'react'
import * as S from './style'
import Input from '../Input'
import Image from 'next/image'
import logo from '../../../public/logo.png'

const Header = () => {
    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }
    return (
        <S.Container>
            <S.NavLink href={'/'}>
                <S.LogoContainer>
                    <Image onLoad={handleLoad} src={logo} alt='logo' priority />
                </S.LogoContainer>
            </S.NavLink>

            <S.Content>
                {/* <Input type='text' placeholder='O Lendário Exodia Encarnado' /> */}
            </S.Content>
        </S.Container>
    )
}

export default Header