import { Controller, Get, Query } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Controller('api')
export class PacienteController {
    constructor(private prismaService: PrismaService) { }
    @Get('patients')
    async handle(@Query('page') page) {
        const amountOfPatientsPerPage = 10
        const firstIdPatientOfPage = (page - 1) * amountOfPatientsPerPage + 1
        const lastIdPatientOfPage = (page - 1) * amountOfPatientsPerPage + 10

        const data = await this.prismaService.paciente.findMany({
            where: {
                AND: [
                    { id: { gte: firstIdPatientOfPage } },
                    { id: { lte: lastIdPatientOfPage } }
                ]
            },
        })

        return { data }
    }

    @Get('patients')
    async handleGet() {
        const data = await this.prismaService.paciente.findMany()
        return { data }
    }

    @Get('patients/one-by-id')
    async getPatientById(@Query('id') id: string) {

        const idpatient = parseInt(id)
        const data = await this.prismaService.paciente.findUnique({
            where: {
                id: idpatient
            }
        })
        return { data }
    }

}