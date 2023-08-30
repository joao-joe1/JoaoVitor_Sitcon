'use client'
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';

interface PatientTableProps { }

type TPatient = {
  id: number;
  nome: string;
  dataNasc: string;
  cpf: string;
};

const formatDate = (dateString: string): string => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const INITIAL_PAGINATION_VALUE = 1;

export default function PatientTable({ }: PatientTableProps) {
  const [data, setData] = useState<TPatient[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [page, setPage] = useState(INITIAL_PAGINATION_VALUE);

  useEffect(() => {
    async function getPatientsPerPage() {
      try {
        const data = await fetch(`http://localhost:3001/get-patiens?page=${page}`);
        const json = await data.json();

        setIsLoading(false);
        setData(json.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    getPatientsPerPage();

    return () => { };
  }, [page]);

  if (loading) return <h1>Loading....</h1>;

  return (
    <>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <RiSearchLine />
        </div>
        <input type="text" placeholder="Pesquisar" />
      </div>

      <table className={styles.patientTable}>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Nascimento</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient, index) => (
            <tr key={index} className={styles.patientRow}>
              <td>{patient.nome}</td>
              <td>{formatDate(patient.dataNasc)}</td>
              <td>{patient.cpf}</td>
              <td>
                <button className={styles.actionButton}><b>Prosseguir</b></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination} aria-label="pagination">
        {page > 1 && (
          <button onClick={() => setPage(page => page - 1)}>
            <FiChevronLeft /> {/* Setinha para a esquerda */}
          </button>
        )}

        <div className={styles.pageInputs}>
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={`pag_${i}`}
              className={styles.pageButton}
              onClick={() => setPage(i + 1)}
            >
              <b>{i + 1}</b>
            </button>
          ))}
        </div>

        {page < data.length && (
          <button onClick={() => setPage(page => page + 1)}>
            <FiChevronRight /> {/* Setinha para a direita */}
          </button>
        )}
      </div>
    </>
  );
}
