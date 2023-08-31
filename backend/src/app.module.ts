import { Module } from '@nestjs/common';
import { PrismaService } from './infra/prisma/prisma.service';
import { PacienteService } from './modules/paciente/paciente.service';
import { ProfissionalService } from './modules/profissional/profissional.service';
import { TiposSolicitacaoService } from './modules/solicitacao/tipos-solicitacao.service';
import { ProcedimentosService } from './modules/procedimentos/procedimentos.service';
import { PacienteModule } from './modules/paciente/paciente.module';
import { PrismaModule } from './infra/prisma/prisma.module';
import { ProcedimentosModule } from './modules/procedimentos/procedimentos.module';
import { ProfissionalModule } from './modules/profissional/profissional.module';

@Module({
  imports: [PacienteModule, PrismaModule, ProcedimentosModule, ProfissionalModule],
  // providers: [PrismaService, PacienteService, ProfissionalService, TiposSolicitacaoService, ProcedimentosService],
})


export class AppModule { }
