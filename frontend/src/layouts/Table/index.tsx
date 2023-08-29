'use client';

import React, { useEffect, useState } from 'react';

import styles from './styles.module.css'


interface PatientTableProps { }

type TPatient = {
  id: number,
  nome: string,
  dataNasc: string,
  cpf: string
}

const formatDate = (dateString: string): string => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const INITIAL_PAGINATION_VALUE = 1;

export default function PatientTable({ }: PatientTableProps) {
  const [data, setData] = useState<TPatient[]>([])
  const [loading, setIsLoading] = useState(true);
  const [page, setPage] = useState(INITIAL_PAGINATION_VALUE);

  useEffect(() => {
    console.log("useEffect has hired ")
    async function getPatientsPerPage() {
      try {
        const data = await fetch(`http://localhost:3001/get-patiens?page=${page}`)
        console.log("response inside getPatientsPerPage has value: ", data)
        const json = await data.json()
        console.log("json value:", json)

        setIsLoading(false)
        setData(json.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    }

    getPatientsPerPage()

    return () => {

    }
  }, [page])

  if (loading) return <h1>Loading....</h1>

  console.log("data value: ", data)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome do Paciente</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient, index) => (
            <tr key={index}>
              <td>{patient.nome}</td>
              <td>{formatDate(patient.dataNasc)}</td>
              <td>{patient.cpf}</td>
              <td>
                <button>Ação</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {!(data.length === 0) ? (
        data.map((patient, i) => <pre key={`data_${i}`}>{JSON.stringify(patient)}</pre>)
      ) : (<h1>Não tem usuários para mostragem</h1>)}

      <div aria-label='pagination'>
        <button onClick={() => setPage(page => page - 1)}>Previous</button>
        <div >
          {/* {Array.from({ length: 10 }, (_, i) => <span key={`pag_${i}`}>{i + 1}</span>)} */}
        </div>
        <button onClick={() => setPage(page => page + 1)}>Next</button>
      </div >
    </>

  );
};
