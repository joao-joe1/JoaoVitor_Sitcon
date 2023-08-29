import { Module } from "@nestjs/common";
import { ProcedimentosService } from "./procedimentos.service";



@Module({
    providers: [ProcedimentosService],
    exports: [ProcedimentosService]
})


export class ProcedimentosModule { }