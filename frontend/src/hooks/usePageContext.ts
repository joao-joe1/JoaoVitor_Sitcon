import { useContext } from "react"

import { PageContext } from '@/components/Pagination/PaginationRoot'

export default function usePageContext() {
  return useContext(PageContext)
}