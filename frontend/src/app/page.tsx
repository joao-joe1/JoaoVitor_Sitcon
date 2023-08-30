import PatientTable from '@/layouts/PatientTable'

import { Pagination } from '@/components/Pagination'

export default async function Home() {
  

  return (
    <Pagination.RootProvider>
      <PatientTable />
      <Pagination.Paginate />
    </Pagination.RootProvider>
  )
}
