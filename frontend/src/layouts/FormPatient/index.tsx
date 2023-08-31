'use client'

import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import formatDate from '@/utils/formatDate';
import { useRouter } from 'next/navigation';

interface PatientFormData {
    nome: string;
    dataNasc: string;
    cpf: string;
    professional: string;
    requestType: string;
    procedures: string;
    dateTime: string;
}

interface ProceduresData {
    id: number;
    nome: string;
    tipoId: number;
}

interface ProfissionalData {
    id: number;
    nome: string;
}


interface PatientFormProps {
    data: Pick<PatientFormData, 'nome' | 'dataNasc' | 'cpf'>
}

export default function PatientForm({ data }: PatientFormProps) {

    const [isSubmitting, setIsSubmittig] = useState(false)
    const [procedures, setProcedures] = useState<ProceduresData[]>([]);
    const [profissional, setProfissional] = useState<ProfissionalData[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchProcedures() {
            try {
                const responseSolicitation = await fetch('http://localhost:3001/procedures');
                const jsonSolicitation = await responseSolicitation.json();
                console.log("Response from http://localhost:3001/procedures", jsonSolicitation);
                setProcedures(jsonSolicitation.data)
            } catch (error) {
                console.error("Error fetching procedures:", error);
            }
        }

        fetchProcedures();
    }, []);

    useEffect(() => {
        async function fetchProfissional() {
            try {
                const responseSolicitation = await fetch('http://localhost:3001/profissional');
                const jsonSolicitation = await responseSolicitation.json();
                console.log("Response from http://localhost:3001/profissional", jsonSolicitation);
                setProfissional(jsonSolicitation.data)
            } catch (error) {
                console.error("Error fetching procedures:", error);
            }
        }

        fetchProfissional();
    }, []);

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
        } catch (error) { }
    }

    return (
        <form onSubmit={onSubmit} className={styles.formContainer}>
            <button onClick={() => router.push('/')}>
                {isSubmitting ? "Carregando..." : "Voltar"}
            </button>
            <div className={styles.row}>
                <label>
                    Nome do Paciente
                    <input disabled type="text" name="name" value={data.nome} />
                </label>
                <label>
                    Data de Nascimento
                    <input disabled type="text" name="birthDate" value={formatDate(data.dataNasc)} />
                </label>
                <label>
                    CPF
                    <input disabled type="text" name="cpf" value={data.cpf} />
                </label>
            </div>
            <br />
            <label>
                Profissional
                <select name="profissionalType" required>
                    {profissional.map((prof) => (
                        <option key={prof.id} value=''>
                            {prof.nome}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <div className={styles.row}>
                <label>
                    Tipo de Solicitação*
                    <select name="requestType" required className={styles.widerSelect}>
                        <option value="" disabled>Selecione</option>
                        {procedures.map((procedure) => (
                            <option key={procedure.id} value={procedure.id}>
                                {procedure.nome}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Procedimentos*
                    <select name="procedures" required className={styles.widerSelect}>
                        <option value="" disabled>Selecione</option>
                        <option value="procedimento1">Procedimento 1</option>
                    </select>
                </label>
            </div>
            <div className={styles.column}>
                <label>
                    Data*
                    <input type="date" name="date" required />
                </label>
                <label>
                    Hora*
                    <input type="time" name="time" required />
                </label>
            </div>
            <br />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Carregando..." : "Salvar"}
            </button>
        </form>
    );
};
