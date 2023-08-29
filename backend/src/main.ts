import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PacienteService } from './modules/paciente/paciente.service';
import { ProfissionalService } from './modules/profissional/profissional.service';
import { TiposSolicitacaoService } from './modules/solicitacao/tipos-solicitacao.service';
import { ProcedimentosService } from './modules/procedimentos/procedimentos.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });


  //Paciente Service
  // const pacienteService = app.get(PacienteService);
  // await pacienteService.seedData();

  //Profissional Service
  // const profissionalService = app.get(ProfissionalService)
  // await profissionalService.seedData();

  //Tipo de Solicitação Service
  // const solicitacaoService = app.get(TiposSolicitacaoService)
  // await solicitacaoService.seedData();

  // Procedimentos Service
  // const procedimentosService = app.get(ProcedimentosService)
  // await procedimentosService.seedData();

  await app.listen(3001);
}
bootstrap();
