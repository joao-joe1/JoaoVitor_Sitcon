'use client';

interface PaginationProps {

}

export default function Pagination({ pages, setPaginationValue }: PaginationProps) {
    const

    return (
        <div>
            <button>Previous</button>
            <div aria-label="pages">
                {Array.from({ length: pages }, (_, i) =>)}
            </div>
            <button>Next</button>
        </div>
    )
}