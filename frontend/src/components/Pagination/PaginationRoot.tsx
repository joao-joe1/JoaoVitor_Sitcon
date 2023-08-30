

'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react'

interface PageProviderProps {
    children: React.ReactNode
}

interface Value {

}

export const PageContext = createContext<number>(undefined!)
export const SetPageContext = createContext<Dispatch<SetStateAction<number>>>(undefined!)

const INITIAL_PAGINATION_VALUE = 1

export default function PaginationRootProvider({ children }: PageProviderProps) {
    const [page, setPage] = useState(INITIAL_PAGINATION_VALUE)

    return (
        <PageContext.Provider value={page}>
            <SetPageContext.Provider value={setPage}>
                {children}
            </SetPageContext.Provider>
        </PageContext.Provider>
    )
}