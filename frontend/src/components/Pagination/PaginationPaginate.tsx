'use client';

import usePageContext from "@/hooks/usePageContext";
import useSetPageContext from "./useSetPageContext";

import styles from './PaginationPaginate.module.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationPaginateProps {
    quantity?: number
}

export default function PaginationPaginate({ quantity = 10 }: PaginationPaginateProps) {
    const page = usePageContext()
    const setPage = useSetPageContext()

    return (
        <div className={styles.pagination}>
            <button className={styles.pageButton} onClick={() => setPage(page => Math.max(page - 1, 1))}><FiChevronLeft /></button>
            <div className={styles.pageInputs}>
                {Array.from({ length: quantity }, (_, i) => <span className={styles.paginate} key={`paginate_${i}`} onClick={() => setPage(i + 1)}>{i + 1}</span>)}
            </div>
            <button className={styles.pageButton} onClick={() => setPage(page => Math.min(page + 1, quantity))}><FiChevronRight /></button>
        </div>
    )
}