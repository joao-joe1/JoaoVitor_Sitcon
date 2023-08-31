import { Module } from "@nestjs/common";
import { ProcedimentosService } from "./procedimentos.service";
import { ProcedimentoController } from "./procedimento.controller";



@Module({
    controllers: [ProcedimentoController],
    providers: [ProcedimentosService],
    exports: [ProcedimentosService]
})


export class ProcedimentosModule { }