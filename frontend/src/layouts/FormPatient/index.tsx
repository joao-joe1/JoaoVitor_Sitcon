'use client'

import { useState } from 'react';

interface PatientFormData {
    name: string;
    birthDate: string;
    cpf: string;
    professional: string;
    requestType: string;
    procedures: string;
    dateTime: string;
}

const PatientForm: React.FC = () => {
    const [formData, setFormData] = useState<PatientFormData>({
        name: '',
        birthDate: '',
        cpf: '',
        professional: '',
        requestType: '',
        procedures: '',
        dateTime: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para o servidor ou realizar outras ações necessárias
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome do Paciente:
                <input type="text" name="name" required onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Data de Nascimento:
                <input type="date" name="birthDate" required onChange={handleInputChange} />
            </label>
            <br />
            <label>
                CPF:
                <input type="text" name="cpf" required onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Profissional:
                <input type="text" name="professional" required onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Tipo de Solicitação:
                <select name="requestType" required onChange={handleInputChange}>
                    <option value="">Selecione</option>
                    <option value="consulta">Consulta</option>
                    <option value="exame">Exame</option>
                    <option value="cirurgia">Cirurgia</option>
                </select>
            </label>
            <br />
            <label>
                Procedimentos:
                <select name="procedures" required onChange={handleInputChange}>
                    <option value="">Selecione</option>
                    <option value="procedimento1">Procedimento 1</option>
                    <option value="procedimento2">Procedimento 2</option>
                    <option value="procedimento3">Procedimento 3</option>
                </select>
            </label>
            <br />
            <label>
                Data e Hora:
                <input type="datetime-local" name="dateTime" required onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Salvar</button>
        </form>
    );
};
