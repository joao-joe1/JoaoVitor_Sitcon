import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Injectable()
export class ProcedimentosService {
    constructor(private readonly prismaService: PrismaService) { }
    async seedData() {
        const procedimentosData = [
            { nome: 'Consulta Pediátrica', tipoId: 1, status: 'ativo' },
            { nome: 'Consulta Clínico Geral', tipoId: 1, status: 'ativo' },
            { nome: 'Hemograma', tipoId: 2, status: 'ativo' },
            { nome: 'Glicemia', tipoId: 2, status: 'ativo' },
            { nome: 'Colesterol', tipoId: 2, status: 'ativo' },
            { nome: 'Triglicerídeos', tipoId: 2, status: 'ativo' }
        ];

        for (const data of procedimentosData) {
            await this.prismaService.procedimento.create({ data })
        }
    }
}