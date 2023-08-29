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

        for (const data of profissionaisData) {
            await this.prismaService.profissional.create({
                data
            })
        }
    }
}
