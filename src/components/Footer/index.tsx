import * as S from './style'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    return (
        <S.Footer>
            <S.FooterDescription>
                <S.FooterContent>
                    <S.FooterCopyright>&copy; {currentYear} willcode | Powered by
                        <S.FooterLink
                            href="https://www.linkedin.com/in/renovatt"
                            target="_blank">renovatt
                        </S.FooterLink>
                    </S.FooterCopyright>

                    <S.FooterCopyright>
                        Todos os direitos reservados | Todos direito de imagens reservados aos criadores
                    </S.FooterCopyright>
                </S.FooterContent>
            </S.FooterDescription>

            <S.SocialMedia>
                <S.FooterLink href="https://www.linkedin.com/in/renovatt" target="_blank">
                    <FaLinkedin />
                </S.FooterLink>

                <S.FooterLink href="https://github.com/renovatt" target="_blank">
                    <FaGithub />
                </S.FooterLink>
            </S.SocialMedia>
        </S.Footer>
    )
}

export default Footer;