import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PacienteService } from './paciente/paciente.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pacienteService = app.get(PacienteService);
  await pacienteService.seedData();
  await app.listen(3000);
}
bootstrap();
