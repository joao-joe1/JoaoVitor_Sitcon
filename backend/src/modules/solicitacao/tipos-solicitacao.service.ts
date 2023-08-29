import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/infra/prisma/prisma.service"

@Injectable()
export class TiposSolicitacaoService {
    constructor(private readonly prismaService: PrismaService) { }

    async seedData() {
        const tipoSolicitacoesData = [
            { nome: 'Consulta', status: 'ativo' },
            { nome: 'Exames Laboratorias', status: 'ativo' }
        ]

        for (const data of tipoSolicitacoesData) {
            await this.prismaService.tipoSolicitacao.create({
                data
            })
        }
    }
}