import { Module } from '@nestjs/common';
import { PrismaService } from './infra/prisma/prisma.service';
import { PacienteService } from './modules/paciente/paciente.service';
import { ProfissionalService } from './modules/profissional/profissional.service';
import { TiposSolicitacaoService } from './modules/solicitacao/tipos-solicitacao.service';
import { ProcedimentosService } from './modules/procedimentos/procedimentos.service';

@Module({
  providers: [PrismaService, PacienteService, ProfissionalService, TiposSolicitacaoService, ProcedimentosService],
  controllers: [],
})

export class AppModule { }
