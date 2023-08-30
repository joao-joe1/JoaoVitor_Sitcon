import PatientTable from '@/layouts/Table'
import { useRouter } from 'next/router';

// import Row from '@/'

type TPatient = {
  id: number,
  //...
}

const initialPagination = 1;

export default async function Home() {
  const res = await fetch("http://localhost:3001/get-patiens")
  const json = await res.json();
  const router = useRouter();

  return (
    <>
      {/* <h1>Home</h1> */}
      <PatientTable router={router} />
    </>
  )
}
