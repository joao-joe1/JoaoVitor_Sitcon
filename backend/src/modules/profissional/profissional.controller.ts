import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Controller('profissional')
export class ProfissionalController {
    constructor(private readonly prismaService: PrismaService) { }
    @Get()
    async handle() {
        const data = await this.prismaService.profissional.findMany()
        return { data }
    }
}