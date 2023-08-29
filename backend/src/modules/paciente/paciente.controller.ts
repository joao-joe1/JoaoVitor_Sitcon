import { Controller, Get, Query } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Controller('get-patiens')
export class PacienteController {
    constructor(private prismaService: PrismaService) { }
    @Get()
    async handle(@Query('page') page) {

        const amountOfPatientsPerPage = 10

        const firstIdPatientOfPage = (page - 1) * amountOfPatientsPerPage + 1
        const lastIdPatientOfPage = (page - 1) * amountOfPatientsPerPage + 10

        const data = await this.prismaService.paciente.findMany({
            where: {
                AND: [
                    { id: { gte: firstIdPatientOfPage } }, // GTE: Greater than or equal to
                    { id: { lte: lastIdPatientOfPage } }   // LTE: Less than or equal to
                ]
            },
        })

        return { data }
    }

    @Get('/lista')
    async handleGet() {
        const data = await this.prismaService.paciente.findMany()
        return { data }
    }
}