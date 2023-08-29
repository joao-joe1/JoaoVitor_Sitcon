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
  // console.log(json)

  const page = 1
  const amountOfPatientsPerPage = 10

  const firstIdPatientOfPage = (page - 1) * amountOfPatientsPerPage + 1
  const lastIdPatientOfPage = (page - 1) * amountOfPatientsPerPage + 10

  return (
    <>
      <h1>Home</h1>
      <PatientTable />
    </>
  )
}
