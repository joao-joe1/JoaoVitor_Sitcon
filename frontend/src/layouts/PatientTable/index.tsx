'use client'

import React, { useEffect, useState, use } from 'react';

import { useRouter } from 'next/navigation';

import styles from './styles.module.css';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';


import formatDate from '@/utils/formatDate';

import usePageContext from '@/hooks/usePageContext';
import usePatientsByPageWithControllers from "@/hooks/usePatientsByPageWithControllers"

interface PatientTableProps { }



const INITIAL_PAGINATION_VALUE = 1;



export default function PatientTable({ }: PatientTableProps) {
  const router = useRouter()
  const page = usePageContext();
  const {data, isError, isLoading} = usePatientsByPageWithControllers(page)

  if (isLoading) return <h1>Loading....</h1>;
  if(!data || isError) return <h1>Houve algum erro</h1> 

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
                <button className={styles.actionButton} onClick={() => {
                  router.push(`/user-consultation?patient_id=${patient.id}`);
                }}>
                  <b>Prosseguir</b>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
