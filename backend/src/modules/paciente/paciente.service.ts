import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Injectable()
export class PacienteService {
    constructor(private readonly prismaService: PrismaService) { }

    async seedData() {
        const pacientesData = [
            {
                nome: 'Augusto Fernandes',
                dataNasc: new Date('2000-08-10'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Maria Silva Oliveira',
                dataNasc: new Date('1999-03-21'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Alfonse Smikchuz',
                dataNasc: new Date('2002-10-02'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Nagela Perreira',
                dataNasc: new Date('1997-05-16'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'João Paulo Ferreira',
                dataNasc: new Date('1995-06-26'),
                cpf: '210.298.293-09',
                status: 'inativo'
            },
            {
                nome: 'Gustavo Hernanes',
                dataNasc: new Date('2001-07-10'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Zira Silva',
                dataNasc: new Date('2003-02-14'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Helena Marques',
                dataNasc: new Date('2000-01-11'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Julio Costa Martins',
                dataNasc: new Date('1980-11-23'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'João Bicalho',
                dataNasc: new Date('1993-03-12'),
                cpf: '210.298.293-09',
                status: 'inativo'
            },
            {
                nome: 'Carolina Rosa Silva',
                dataNasc: new Date('2001-12-24'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
            {
                nome: 'Paulina Araujo',
                dataNasc: new Date('2002-08-10'),
                cpf: '210.298.293-09',
                status: 'ativo'
            },
        ];

        for (const data of pacientesData) {
            await this.prismaService.paciente.create({ data });
        }
    }
}
