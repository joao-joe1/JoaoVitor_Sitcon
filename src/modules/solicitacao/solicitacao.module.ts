import { Module } from "@nestjs/common";
import { TiposSolicitacaoService } from "./tipos-solicitacao.service";


@Module({
    providers: [TiposSolicitacaoService],
    exports: [TiposSolicitacaoService]
})

export class SolicitacaoModule { }