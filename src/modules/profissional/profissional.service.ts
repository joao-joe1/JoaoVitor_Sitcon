import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Injectable()
export class ProfissionalService {
    constructor(private readonly prismaService: PrismaService) { }

    async seedData() {
        const profissionaisData = [
            { nome: 'Orlando Nobrega', status: 'ativo' },
            { nome: 'Rafaela Tenorio', status: 'ativo' },
            { nome: 'João Paulo Nobrega', status: 'ativo' }
        ];

        const profissionalAtendeData = [
            { procedimento: { connect: { id: 1 } }, profissional: { connect: { id: 2 } }, status: 'ativo' },
            { procedimento: { connect: { id: 2 } }, profissional: { connect: { id: 2 } }, status: 'ativo' },
            { procedimento: { connect: { id: 2 } }, profissional: { connect: { id: 3 } }, status: 'ativo' },
            { procedimento: { connect: { id: 1 } }, profissional: { connect: { id: 3 } }, status: 'inativo' },
            { procedimento: { connect: { id: 3 } }, profissional: { connect: { id: 1 } }, status: 'ativo' },
            { procedimento: { connect: { id: 4 } }, profissional: { connect: { id: 1 } }, status: 'ativo' },
            { procedimento: { connect: { id: 5 } }, profissional: { connect: { id: 1 } }, status: 'ativo' },
            { procedimento: { connect: { id: 6 } }, profissional: { connect: { id: 1 } }, status: 'ativo' }
        ];

        const createProfissionais = profissionaisData.map(data => this.prismaService.profissional.create({ data }))
        const createProfissionaisAtende = profissionalAtendeData.map(data => this.prismaService.profissionalAtende.create({ data }))

        await Promise.all([...createProfissionais, ...createProfissionaisAtende]);
    }
}
