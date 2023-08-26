import { Module } from "@nestjs/common";
import { PacienteService } from "./paciente.service";

@Module({
    providers: [PacienteService],
    exports: [PacienteService]
})

export class PacienteModule { }