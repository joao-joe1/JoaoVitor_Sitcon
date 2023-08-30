import PatientTable from '@/layouts/Table'

import Pagination from '@/components/Pagination';

// import Row from '@/'

type TPatient = {
  id: number,
  //...
}

const initialPagination = 1;

export default async function Home() {
  const res = await fetch("http://localhost:3001/get-patiens")
  const json = await res.json();

  return (
    <>
      {/* <h1>Home</h1> */}
      <PatientTable />
    </>
  )
}
