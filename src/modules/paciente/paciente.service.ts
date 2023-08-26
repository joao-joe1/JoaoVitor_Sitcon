import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Injectable()
export class PacienteService {
    constructor(private readonly prismaService: PrismaService) { }

    async seedData() {
        const pacientesData = [
            { nome: 'Augusto Fernandes', dataNascimento: new Date('2000-08-10'), cpf: '210.298.293-09', status: 'ativo' },
            { nome: 'Maria Silva Oliveira', dataNascimento: new Date('1999-03-21'), cpf: '210.298.293-08', status: 'ativo' },
            // ... outros dados de pacientes
        ];

        for (const data of pacientesData) {
            await this.prismaService.paciente.create({
                data,
            });
        }
    }
}
