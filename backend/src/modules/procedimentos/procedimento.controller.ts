import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Controller('procedures')
export class ProcedimentoController {
    constructor(private readonly prismaService: PrismaService) { }
    @Get()
    async handle() {
        const data = await this.prismaService.procedimento.findMany()
        return { data }
    }
}