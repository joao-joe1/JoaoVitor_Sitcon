import { Module } from "@nestjs/common";
import { ProfissionalService } from "./profissional.service";

@Module({
    providers: [ProfissionalService],
    exports: [ProfissionalService]
})

export class ProfissionalModule { }