import React from 'react'
import * as S from './style'
import { ImageProps } from '@/@types'
import Image from 'next/image'
import cardBack from '../../../public/cardback.jpg'

const SkeletonImage = ({ src, alt, cardId, getCardId }: ImageProps) => {
    const [sketelon, setSkeleton] = React.useState(true)

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        setSkeleton(false)
        event.currentTarget.style.opacity = "1";
    }

    return (
        <S.ImageContainer>
            {sketelon &&
                <S.Skeleton>
                    <Image
                        src={cardBack}
                        alt='card-back'
                        width={500}
                        height={500}
                    />
                </S.Skeleton>}
            <S.Image
                onClick={() => getCardId(cardId)}
                onLoad={handleLoad}
                src={src}
                alt={alt}
            />
        </S.ImageContainer>
    )
}

export default SkeletonImage