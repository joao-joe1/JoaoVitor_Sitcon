import { Module } from '@nestjs/common';
import { PrismaService } from './infra/prisma/prisma.service';
import { PacienteService } from './modules/paciente/paciente.service';

@Module({
  providers: [PrismaService, PacienteService],
  controllers: [],
})

export class AppModule { }
