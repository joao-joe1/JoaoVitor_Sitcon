'use client';

import React, { useEffect, useState } from 'react';

import styles from './styles.module.css'


interface PatientTableProps { }

type TPatient = {
  id: number
}

const INITIAL_PAGINATION_VALUE = 1;

export default function PatientTable({ }: PatientTableProps) {
  const [data, setData] = useState<TPatient[]>([])
  const [loading, setIsLoading] = useState(true);
  const [page, setPage] = useState(INITIAL_PAGINATION_VALUE);

  useEffect(() => {
    console.log("useEffect has hired ")
    async function getPatientsPerPage() {
      try {
        const data = await fetch(`http://localhost:3001/get-patiens`, {})
        console.log("response inside getPatientsPerPage has value: ", data)
        const json = await data.json()

        setIsLoading(false)
        setData(json)
      } catch (error) {
        console.error(error)
        throw error
      }
    }

    getPatientsPerPage()

    return () => {

    }
  }, [page])

  if (loading) return null

  console.log("data value: ", data)

  return (
    <>
      {/* <table>
        <thead>
          <tr>
            <th>Nome do Paciente</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody> */}
      {/* </tbody>
      </table> */}
      {data.map((patient, i) => <pre key={`data_${i}`}>{JSON.stringify(patient)}</pre>)}
      <div aria-label='pagination'>
        <button onClick={() => setPage(page => page - 1)}>Previous</button>
        <div >
          {Array.from({ length: 10 }, (_, i) => <span key={`pag_${i}`}>{i + 1}</span>)}
        </div>
        <button onClick={() => setPage(page => page + 1)}>Next</button>
      </div >
    </>

  );
};
