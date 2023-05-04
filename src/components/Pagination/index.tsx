import React from 'react'
import * as S from './style'
import { useRouter } from 'next/router'
import { UrlProps } from '@/@types'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const Pagination = ({ offset, meta, url }: & UrlProps & { url: string }) => {

    const router = useRouter()
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = Math.ceil(meta.total_rows / 5);

    //10885

    React.useEffect(() => {
        const currentPage = Math.floor(offset / 5) + 1;
        setCurrentPage(currentPage);
    }, [offset]);

    const handlePrevPage = () => {
        const newOffset = Math.max(offset - 5, 0);
        router.push(`${url}/?page=${newOffset}`);
    };

    const handleNextPage = () => {
        const newOffset = Math.min(offset + 5, (totalPages - 1) * 5);
        router.push(`${url}/?page=${newOffset}`);
    };
    return (
        <S.ButtonContent>
            <S.Button onClick={handlePrevPage}><GrFormPrevious /></S.Button>
            <S.Span>Página {currentPage} de {totalPages}</S.Span>
            <S.Button onClick={handleNextPage}><GrFormNext /></S.Button>
        </S.ButtonContent>
    )
}

export default Pagination