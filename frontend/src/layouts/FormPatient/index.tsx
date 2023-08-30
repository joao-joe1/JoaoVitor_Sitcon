'use client'

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import formatDate from '@/utils/formatDate';
// import PatientTable from '../Table';

interface PatientFormData {
    nome: string;
    dataNasc: string;
    cpf: string;
    professional: string;
    requestType: string;
    procedures: string;
    dateTime: string;
}

interface PatientFormProps {
    data: Pick<PatientFormData, 'nome' | 'dataNasc' | 'cpf'>
}

export default function PatientForm({ data }: PatientFormProps) {
    const [isSubmitting, setIsSubmittig] = useState(false)
    // const [formData, setFormData] = useState<PatientFormData>({
    //     name: '',
    //     birthDate: '',
    //     cpf: '',
    //     professional: '',
    //     requestType: '',
    //     procedures: '',
    //     dateTime: '',
    // });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            const formData = new FormData(e.currentTarget)
            const response = await fetch('/api/send-patient-solicitation', {
                method: 'POST',
                body: formData,
            })
            console.log("response of /api/send-user-solicitation:", response)

            const data = await response.json()
        } catch (error) {

        }


    }

    // console.log(data.data.nome)
    return (
        <form onSubmit={onSubmit}>
            <label>
                Nome do Paciente:
                <input disabled type="text" name="name" value={data.nome} required />
            </label>
            <br />
            <label>
                Data de Nascimento:
                <input disabled name="birthDate" value={formatDate(data.dataNasc)} required />
            </label>
            <br />
            <label>
                CPF:
                <input disabled type="text" name="cpf" value={data.cpf} required />
            </label>
            <br />
            <label>
                Profissional:
                <input type="text" name="professional" required />
            </label>
            <br />
            <label>
                Tipo de Solicitação:
                <select name="requestType" required>
                    <option value="">Selecione</option>
                    <option value="consulta">Consulta</option>
                    <option value="exame">Exame</option>
                    <option value="cirurgia">Cirurgia</option>
                </select>
            </label>
            <br />
            <label>
                Procedimentos:
                <select name="procedures" required>
                    <option value="">Selecione</option>
                    <option value="procedimento1">Procedimento 1</option>
                    <option value="procedimento2">Procedimento 2</option>
                    <option value="procedimento3">Procedimento 3</option>
                </select>
            </label>
            <br />
            <label>
                Data e Hora:
                <input type="datetime-local" name="dateTime" required />
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Carregando..." : "Salvar"}
            </button>
        </form>
    );
};
