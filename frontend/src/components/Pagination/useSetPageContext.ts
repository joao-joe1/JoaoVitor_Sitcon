import { useContext, Dispatch, SetStateAction } from "react"

import { SetPageContext } from './PaginationRoot'

export default function useSetPageContext() {
  return useContext(SetPageContext)
}