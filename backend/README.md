## Esquema do Banco de Dados

O arquivo `schema.prisma` define a estrutura do banco de dados do projeto usando a linguagem do Prisma Schema. Ele descreve os modelos (tabelas), os campos de cada modelo e os relacionamentos entre eles.

Para saber mais sobre como funciona o Prisma Schema e como você pode definir a estrutura do banco de dados, confira a [documentação oficial do Prisma Schema](https://pris.ly/d/prisma-schema).

Aqui está um trecho do arquivo `schema.prisma`:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Paciente {
  id          Int           @id @default(autoincrement())
  nome        String
  dataNasc    DateTime
  cpf         String
  status      String
  Solicitacao Solicitacao[]
}

model Profissional {
  id                 Int                  @id @default(autoincrement())
  nome               String
  status             String
  Solicitacao        Solicitacao[]
  ProfissionalAtende ProfissionalAtende[]
}

model TipoSolicitacao {
  id           Int            @id @default(autoincrement())
  nome         String
  status       String
  Solicitacao  Solicitacao[]
  Procedimento Procedimento[]
}

model Procedimento {
  id                 Int                  @id @default(autoincrement())
  nome               String
  tipo               TipoSolicitacao      @relation(fields: [tipoId], references: [id])
  tipoId             Int
  status             String
  Solicitacao        Solicitacao?         @relation(fields: [solicitacaoId], references: [id])
  solicitacaoId      Int?
  ProfissionalAtende ProfissionalAtende[]
}

model Solicitacao {
  id                Int             @id @default(autoincrement())
  pacienteId        Int
  profissionalId    Int
  tipoSolicitacaoId Int
  data              DateTime
  horario           String
  procedimentos     Procedimento[]
  paciente          Paciente        @relation(fields: [pacienteId], references: [id])
  profissional      Profissional    @relation(fields: [profissionalId], references: [id])
  tipoSolicitacao   TipoSolicitacao @relation(fields: [tipoSolicitacaoId], references: [id])
}

model ProfissionalAtende {
  id             Int          @id @default(autoincrement())
  procedimento   Procedimento @relation(fields: [procedimentoId], references: [id])
  profissional   Profissional @relation(fields: [profissionalId], references: [id])
  procedimentoId Int
  profissionalId Int
  status         String
}

```